import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemAvatar } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BugReportIcon from '@mui/icons-material/BugReport';
import classNames from 'classnames';
import styles from '../../styles/common.module.scss'
import Spacing from '../../components/Spacing.tsx'
import { Rate, Tag } from '@nutui/nutui-react';

const dataList = [
  { id: '1', type: 'demand', title: '异步导入EHR', tag: '大客户需求', level: 'p0', status: '待开发', inSchedule: true, desc: '方案ready、新版详情页客户反馈问题', score: 6.87, milestone: 'M11S2' },
  { id: '2', type: 'bug', title: '招聘需求编制加载不出来', tag: '用户反馈', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
  { id: '3', type: 'opt', title: '替换移动端微信icon', tag: 'sugar icon', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
  { id: '4', type: 'bug', title: '招聘需求编制加载不出来', tag: '用户反馈', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
  { id: '5', type: 'opt', title: '替换移动端微信icon', tag: 'sugar icon', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
]

const Work = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer =
    (anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const workList = [
    { title: '进行中的', icon: 'dongdong' },
    { title: '我发起的', icon: 'dongdong' },
    { title: '我参与的', icon: 'dongdong' },
    { title: '已完成的', icon: 'dongdong' },
    { title: '我评论的', icon: 'dongdong' },
  ]
  const otherList = [
    { title: '转交任务', icon: 'dongdong' },
    { title: '一键发布', icon: 'dongdong' },
    { title: '任务日程', icon: 'dongdong' },
    { title: '周度统计', icon: 'dongdong', linkUrl: '/work/analysis' },
  ]
  const renderList = (item) => {
    return <>
      <ListItem alignItems="flex-start" onClick={() => navigate(`/work/list/${item.id}`, { state: { info: JSON.stringify(item) } })}>
        <ListItemAvatar>
          {item.type === 'demand' && <AssignmentIcon />}
          {item.type === 'bug' && <BugReportIcon />}
          {item.type === 'opt' && <BuildIcon />}
        </ListItemAvatar>
        <Spacing direction='vertical' className={classNames(styles.flex, styles.directionColumn)}>
          <Spacing className={styles.flex} align='start'>
            <span>{item.title}</span>
            <div><div style={{
              color: '#1976d2', border: '1px solid #1976d2', padding: '4px 10px',
              borderRadius: '4px', whiteSpace: 'nowrap', fontSize: '12px'
            }} >{item.tag}</div></div>
            <Tag type={item.level === 'p0' ? 'danger' : "primary"} round>{item.level}</Tag>
          </Spacing>
          <div>{item.desc}</div>
          <div className={classNames(styles.flex, styles.justifyBetween)}>
            <Spacing className={styles.flex}>
              <Spacing className={styles.flex}>
                <Rate count="1" modelValue={item.score} />
                <span>{item.score}</span>
              </Spacing>
              <span>{item.milestone}</span>
            </Spacing>
            <div>
              {item.status === '已提测' ? <Tag type="success">{item.status}</Tag>: <Tag type="primary">{item.status}</Tag>}
            </div>
          </div>
        </Spacing>
      </ListItem>
      <Divider variant="inset" /></>
  }
  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '16px auto' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu" role="presentation" onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper
        component="div"
        sx={{ p: '2px 4px', width: '90%', margin: '16px auto' }}
      >{dataList.map(item => renderList(item))}</Paper>
      
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        <Box
          sx={{ width:250 }}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <List>
            {[{ title: '任务大厅', icon: 'dongdong', linkUrl: '/work/list' }].map((text, index) => (
              <ListItem key={text.title} disablePadding onClick={() => navigate(text.linkUrl)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {workList.map((text, index) => (
              <ListItem key={text.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {otherList.map((text, index) => (
              <ListItem key={text.title} disablePadding onClick={() => navigate(text.linkUrl)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
export default Work