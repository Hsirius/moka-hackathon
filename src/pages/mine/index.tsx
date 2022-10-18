import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import TurnLeft from '@mui/icons-material/TurnLeft';
import SearchIcon from '@mui/icons-material/Search';
import BugReportIcon from '@mui/icons-material/BugReport';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Rate, Tag } from '@nutui/nutui-react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Spacing from '../../components/Spacing';
import styles from '../../styles/common.module.scss'
import { Link } from 'react-router-dom';

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
export default function Mine() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ width: '90%', margin: '16px auto' }}>
      <Spacing spacing='lg'>
        <Avatar alt="Cindy Baker" sx={{ width: 120, height: 120 }} src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
        <Spacing direction='vertical' className={styles.directionColumn}>
          <Spacing>
            <Typography variant="h6">
              赛雷
            </Typography>
            <span><Tag type="primary">职位渠道组</Tag></span>
          </Spacing>
          <div>积分：<Link to='baidu.com'>999</Link></div>
          <Spacing wrap>
            <div><Tag plain type="primary">客户第一</Tag></div>
            <div><Tag plain type="primary">offer业务专家</Tag></div>
            <div><Tag plain type="primary">就是牛</Tag></div>
          </Spacing>
        </Spacing>
      </Spacing>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
          <Tab label="表白（30）" {...a11yProps(0)} />
          <Tab label="活动（2）" {...a11yProps(1)} />
          <Tab label="任务（99）" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        item one
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  );
}
