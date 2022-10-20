import React, { PropsWithChildren, ReactNodeArray } from 'react';
import classNames from 'classnames';
import * as ReactIs from 'react-is';

import styles from './Spacing.module.scss';

type SpacingType = 'sm' | 'md' | 'lg' | 'xl' | number;

type ItemWidth = string | number;

export interface SpacingProps {
  className?: string;
  style?: React.CSSProperties;
  spacing?: SpacingType | [SpacingType, SpacingType];
  lastChildSpacing?: boolean;
  noFlex?: boolean;
  itemWidth?: ItemWidth | ItemWidth[];
  stretched?: boolean;
  verticalStretched?: boolean;
  container?: boolean;
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  separator?: React.ReactNode;
}

enum SIZE_MAP {
  sm = 4,
  md = 8,
  lg = 16,
  xl = 32,
}

enum DIR_MAP {
  horizontal = 'marginRight',
  vertical = 'marginBottom',
}

const DEFAULT_SEPARATOR = {
  horizontal: <span className={styles.horizontalSeparator}>|</span>,
  vertical: <div className={styles.verticalSeparator} />,
};

const getMargin = (s: SpacingType) => {
  return typeof s === 'number' ? `${s}px` : `${SIZE_MAP[s] || 8}px`;
};

/**
 * 扁平化ReactNodeArray
 *
 * @param {ReactNodeArray} arr
 * @returns result
 */
const flattenReactNodeArray = (arr: ReactNodeArray) => {
  let res: ReactNodeArray = [];
  React.Children.toArray(arr).forEach((el) => {
    if (ReactIs.isFragment(el)) {
      res = [...res, ...flattenReactNodeArray(el.props.children)];
    } else if (Array.isArray(el)) {
      res = [...res, ...flattenReactNodeArray(el)];
    } else {
      res = [...res, el];
    }
  });
  return res;
};

const Spacing: React.FC<PropsWithChildren<SpacingProps>> = ({
  className,
  style,
  spacing = 'md',
  lastChildSpacing,
  noFlex,
  itemWidth,
  stretched,
  verticalStretched,
  container,
  direction = 'horizontal',
  align = direction === 'horizontal' && 'center',
  justify,
  wrap,
  separator,
  children,
}) => {
  const getSizeStyle = () => {
    if (wrap) {
      // 折行
      // size转为数组，分别取值
      const refactorSize = Array.isArray(spacing) ? spacing : [spacing, spacing];
      const [hSize, vSize] = refactorSize;
      return {
        marginRight: getMargin(hSize),
        marginBottom: getMargin(vSize),
      };
    } else {
      // 不折行
      // 如果数组，取第一项
      const refactorSize = Array.isArray(spacing) ? spacing[0] : spacing;
      return {
        [DIR_MAP[direction]]: getMargin(refactorSize),
      };
    }
  };

  const getAdditionalStyle = (array: ReactNodeArray, index: number) => {
    const isLastChild = lastChildSpacing ? false : index === array.length - 1;

    let res = {};
    if (isLastChild) {
      if (wrap) {
        // 折行的最后一项
        res = { ...res, ...getSizeStyle() };
      }
    } else {
      res = { ...res, ...getSizeStyle() };
    }

    // 加宽度
    if (itemWidth) {
      // 当itemWidth为数组，且长度跟children长度一样时
      if (Array.isArray(itemWidth) && array.length === itemWidth.length) {
        // 对应的宽度不为空时添加对应的宽度
        res = itemWidth[index] ? { ...res, width: itemWidth[index] } : res;
      } else {
        res = { ...res, width: itemWidth };
      }
    }

    return res;
  };

  /** children扁平化处理，转为一维数组，并去掉空值 */
  let _children: ReactNodeArray = flattenReactNodeArray(React.Children.toArray(children)).filter((child) => !!child);

  /** 在每个元素后面追加分隔符 */
  if (separator) {
    const _separator = separator === true ? DEFAULT_SEPARATOR[direction] : separator;
    _children = _children.reduce<ReactNodeArray>((acc, cur, index, array) => {
      if (index === array.length - 1) {
        return [...acc, cur];
      } else {
        return [...acc, cur, _separator];
      }
    }, []);
  }

  const renderDom: ReactNodeArray = _children.map((child, index, array) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        key: `spacing-${index}`,
        style: { ...child.props.style, ...getAdditionalStyle(array, index) },
      });
    } else {
      return (
        <span key={`spacing-${index}`} style={getAdditionalStyle(array, index)}>
          {child}
        </span>
      );
    }
  });

  /** 无需flex布局 */
  if (noFlex) {
    // fix Spacing return type error
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{renderDom}</>;
  }

  return (
    <div
      className={classNames(
        styles.spacing,
        {
          [styles.alignCenter]: align === 'center',
          [styles.wrap]: wrap,
        },
        className
      )}
      style={style}
    >
      {renderDom}
    </div>
  );
};

export default Spacing;
