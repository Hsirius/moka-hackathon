import React from 'react'
import { NavBar,Barrage,Cell } from '@nutui/nutui-react'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';
import Spacing from '../../components/Spacing';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

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
    children: `${name.split('')[0][0]}${name.split('')[1][0]}`,
  };
}

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box'
}

const Praise = () => {
  const navigate = useNavigate();
  const dataList = [
    {speaker: '大蛋儿', receiver: '二狗', content: '你太棒了！！！你太棒了！！！你太棒了！！！', time: '2022-01-01 19:00:00'},
    {speaker: '二狗', receiver: '大蛋儿', content: '你太棒了！！！', time: '2022-02-01 19:00:00'},
  ]
  const list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']

  return (
    <>
      <Paper sx={{ width: '100%', boxShadow: 0 }}>
        <NavBar leftShow style={{marginBottom: 0}} onClickBack={() => navigate(-1)} />
        <Box
          component='div'
          display='flex'
          flexDirection='column'
          sx={{width: '90%', margin: '0 auto'}}
        >
           <Spacing>
            <Typography variant="h6" gutterBottom>
              表白墙
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              2022等你来表白
            </Typography>
          </Spacing>
          <Cell className="barrage-demo-wrap" style={barrageStyle}>
            <Barrage className="barrage-demo" barrageList={list} style={barrageStyle} />
          </Cell>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {dataList.map((item, index) => 
              <div key={`${item.speaker}-${index}`} style={{marginBottom: '16px'}}>
                <div>
                  <Spacing>
                    <div style={{minWidth: 'auto', marginTop: 0}}>
                      <Avatar alt="Cindy Baker" {...stringAvatar(item.speaker)} />
                    </div>
                    <span>对</span>
                    <div style={{minWidth: 'auto', marginTop: 0}}>
                      <Avatar alt="Cindy Baker" {...stringAvatar(item.receiver)} />
                    </div>
                    <span>说:</span>
                  </Spacing>
                  <div style={{padding: '16px 0 16px 72px'}}>{item.content}</div>
                </div>
                <Divider variant="inset" />
              </div>
            )}
           </List>
        </Box>
      </Paper>
    </>
  )
}
export default Praise