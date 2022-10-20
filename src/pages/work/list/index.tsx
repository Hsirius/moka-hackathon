import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import BugReportIcon from '@mui/icons-material/BugReport';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Rate, Tag } from '@nutui/nutui-react';
import Button from '@mui/material/Button';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';

import styles from './index.module.scss'
import classNames from 'classnames';
import Spacing from '../../../components/Spacing.tsx';
import { useNavigate } from 'react-router';
import { Snackbar } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const DataList = [
  { id: '1', type: 'demand', title: '异步导入EHR', tag: '大客户需求', level: 'p0', status: '待开发', inSchedule: true, desc: '方案ready、新版详情页客户反馈问题', score: 6.87, milestone: 'M11S2' },
  { id: '2', type: 'bug', title: '招聘需求编制加载不出来', tag: '用户反馈', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
  { id: '3', type: 'opt', title: '替换移动端微信icon', tag: 'sugar icon', level: 'p2', status: '已提测', desc: '新版详情页客户反馈问题', score: 3.00, milestone: 'M11S1' },
]

export default function BasicTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [isOpen, setOpen] = React.useState(false);
  const [dataList, setDataList] = React.useState(DataList);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            }} type="primary" plain>{item.tag}</div></div>
            <Tag type={item.level === 'p0' ? 'danger' : "primary"} round>{item.level}</Tag>
          </Spacing>
          <Spacing spacing='lg'>
            <span>{item.status}</span>
            <span>{item.inSchedule ? '已排期' : '待排期'}</span>
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
            <Button variant="contained" size="small" onClick={(e) => { e.stopPropagation(); handleClick() }}>抢任务</Button>
          </div>
        </Spacing>
      </ListItem>
      <Divider variant="inset" /></>
  }

  const handleClick = () => {
    setOpen(true);
    const newData = dataList.splice(1, DataList.length - 1)
    setDataList(newData)
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '16px auto' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '90%', margin: '16px auto' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
          <Tab label="推荐" {...a11yProps(0)} />
          <Tab label="需求" {...a11yProps(1)} />
          <Tab label="BUG" {...a11yProps(2)} />
          <Tab label="工程优化" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        {dataList.map(item => renderList(item))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {dataList.filter(item => item.type === 'demand').map(item => renderList(item))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {dataList.filter(item => item.type === 'bug').map(item => renderList(item))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {dataList.filter(item => item.type === 'opt').map(item => renderList(item))}
      </TabPanel>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        message="牛蛙！这都被抢到了！！"
        action={
          <Button color="inherit" size="small">
            <CloseIcon />
          </Button>
        }
      />
    </Box >
  );
}
