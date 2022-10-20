import React, { useState, useEffect } from 'react';
import { Line, Liquid } from '@ant-design/plots';
import { lineData } from './resourceData.js'
import { NavBar } from '@nutui/nutui-react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Spacing from '../../../components/Spacing.tsx'

const WorkAnalysis = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setTimeout(() => {
      setData(lineData)
    }, 500)
  };
  const config = {
    data,
    height: 200,
    padding: 'auto',
    xField: 'Date',
    yField: 'score',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  const liquidConfig = {
    percent: 0.75,
    shape: function (x, y, width, height) {
      const r = width / 4;
      const dx = x - width / 2;
      const dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 2,
      distance: 4,
      style: {
        stroke: '#F50C2C',
        strokeOpacity: 0.65,
      },
    },
    theme: {
      styleSheet: {
        brandColor: '#F50C2C',
      },
    },
    wave: {
      length: 128,
    },
  };

  return <>
    <NavBar leftShow title='周度统计' style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
    <Box
      component='div'
      display='flex'
      flexDirection='column'
      sx={{ width: '90%', margin: '0 auto' }}
    >
      <Spacing style={{ marginTop: '16px', padding: '8px', background: '#03FA4C', borderRadius: '8px' }}>
        <Liquid width={200} height={120} {...liquidConfig} />
        <div>
          <Typography variant="h6" style={{ marginRight: '8px' }}>
            本周已完成
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#FAF603', display: 'flex', alignItems: 'center' }}><span>20%</span> <ArrowDownwardIcon /></div>
            <span>上周</span>
          </div>
        </div>
      </Spacing>
      <div style={{ marginTop: '16px', padding: '8px', background: '#F7F8FA', borderRadius: '8px' }}>
        <div style={{ color: '#E9D10E', fontSize: '20px', fontWeight: 'bold' }}>
          “ 金星虽然是不发光的行星，但却比许多恒星还要明亮 ”
        </div>
        <div style={{ marginTop: '16px' }}>
          <Typography variant="caption">
            处理工作会话
          </Typography>
          <Typography variant="subtitle2">
            393 次
          </Typography>
        </div>
        <div style={{ marginTop: '16px' }}>
          <Typography variant="caption">
            总共花了
          </Typography>
          <Typography variant="subtitle2">
            135 分钟
          </Typography>
        </div>
        <div style={{ marginTop: '16px', }}>
          <Typography variant="caption">
            最晚时间
          </Typography>
          <Typography variant="subtitle2">
            周四夜晚 11:28
          </Typography>
        </div>
      </div>
      <div style={{ marginTop: '16px', marginBottom: '8px' }}>
        <Typography variant="caption">
          本周积分情况
        </Typography>
        <Line {...config} />
      </div>
    </Box>
  </>;
};

export default WorkAnalysis
