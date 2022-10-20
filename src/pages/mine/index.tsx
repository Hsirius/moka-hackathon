import * as React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavBar, Tag } from '@nutui/nutui-react';
import Avatar from '@mui/material/Avatar';
import Spacing from '../../components/Spacing.tsx';
import styles from '../../styles/common.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { praiseList } from '../../static/data/index.js'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { tagData } from '../../static/data/index.js'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 36,
      height: 36,
    },
    children: `${name.split('')[0][0]}`,
  };
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
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
    <NavBar leftShow style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
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
            {tagData.map(t => <div key={t.label} style={{ padding: '0 4px', borderRadius: '4px', border: '1px solid rgb(250,36,0)', color: '#fa2400', fontSize: '12px' }}>{t.label}</div>)}
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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {praiseList.map((item, index) =>
            <div key={`${item.userName}-${index}`} style={{ marginBottom: '16px' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" {...stringAvatar(item.userName)} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.userName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.content}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
            </div>
          )}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper >
    </>
  );
}
