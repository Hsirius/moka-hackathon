import React from 'react';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

const actions = [
  { icon: <ShareIcon />, name: '发布表白', clickHandler: () => navigate('/praise/publish') },
  { icon: <FileCopyIcon />, name: '发布活动', clickHandler: () => navigate('/activity/publish') },
  { icon: <SaveIcon />, name: '发布任务', clickHandler: () => navigate('/work/publish') },
  { icon: <PrintIcon />, name: '接收任务', clickHandler: () => navigate('/work/list') },
];

  return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="首页" icon={<HomeIcon />} onClick={() => navigate('/')} />
      <BottomNavigationAction label="日程" icon={<RestoreIcon />} onClick={() => navigate('/schedule')} />
      <BottomNavigationAction label="待办事项" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="我的" icon={<PermIdentityIcon />} onClick={() => navigate('/mine')}/>
    </BottomNavigation>
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: '50%', right: 'calc(50% - 28px)' }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={action.clickHandler}
        />
      ))}
    </SpeedDial>
  </Paper>
}

