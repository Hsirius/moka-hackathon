import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { NavBar } from '@nutui/nutui-react';
import { useLocation, useNavigate } from 'react-router';
import { useState,useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Avatar } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Camera from '@mui/icons-material/CameraAlt';
import Send from '@mui/icons-material/Send';
import Heart from '@mui/icons-material/Favorite';
import HeartBroken from '@mui/icons-material/HeartBroken';
import Replay from '@mui/icons-material/ChatBubble';
import Spacing from '../../../components/Spacing.tsx';


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

export default function IconMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [info, setInfo] = useState({})
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(location.state?.info){
      setInfo(JSON.parse(location.state.info))
    }
  }, [location.state])
  return (
    <Paper sx={{ width: '100%', boxShadow: 0 }}>
      <NavBar leftShow style={{marginBottom: 0}} onClickBack={() => navigate(-1)} />
      <Typography variant="h6">
        {info.title}
      </Typography>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>需求来源</ListItemText>
          <ListItemText>{info.tag}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <ListItemText>{info.tag}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <ListItemText>{info.tag}</ListItemText>
        </MenuItem>
      </MenuList>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} scrollButtons="auto" variant="scrollable" aria-label="basic tabs example">
          <Tab label="设计" {...a11yProps(0)} />
          <Tab label="前端" {...a11yProps(1)} />
          <Tab label="后端" {...a11yProps(2)} />
          <Tab label="测试" {...a11yProps(3)} />
          <Tab label="计划" {...a11yProps(4)} />
          <Tab label="风险" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>需求来源</ListItemText>
            <ListItemText>{info.tag}</ListItemText>
          </MenuItem>
        </MenuList>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          aria-label="contacts"
        >
          <ListItem disablePadding>
            <ListItemButton alignItems='flex-start'>
              <ListItemIcon>
                <Avatar alt="Cindy Baker">H</Avatar>
              </ListItemIcon>
              <ListItemText primary="Chelsea Otakan" secondary={
                <React.Fragment>
                  <Typography
                    component="div"
                    variant="body1"
                    color="text.primary"
                  >
                    4 HOURS AGO
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {"I'll be in your neighborhood doing errands this…"}
                  </Typography>
                  <Spacing align='center'>
                    <Spacing align='center'><Heart /><span>30</span></Spacing>
                    <Spacing align='center'><HeartBroken /><span>30</span></Spacing>
                    <Spacing align='center'><Replay /><span>回复</span></Spacing>
                  </Spacing>
                </React.Fragment>
              } />
            </ListItemButton>
          </ListItem>
        </List>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '16px auto' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <Camera />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Send />
          </IconButton>
        </Paper>
      </TabPanel>
    </Paper>
  );
}