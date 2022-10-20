import * as React from 'react';
import List from '@mui/material/List';
import { activityData } from '../../static/data/index.js'
import Spacing from '../../components/Spacing.tsx'
import Box from '@mui/material/Box';
import { NavBar } from '@nutui/nutui-react';
import { useNavigate } from 'react-router';
import styles from '../../styles/common.module.scss'
import { Avatar, Button, Snackbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function AlignItemsList() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false)
  return (
    <>
      <NavBar title='活动列表' leftShow style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
      <Box
        component='div'
        display='flex'
        flexDirection='column'
        sx={{ width: '90%', margin: '0 auto' }}
      >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {activityData.map((item, index) => <div key={item.partName}>
            <Spacing style={{ margin: '16px 0', padding: '8px', background: '#F7F8FA', borderRadius: '8px' }}>
              <Avatar src={`https://joeschmoe.io/api/v1/random?timestamp=${index}`} />
              <Spacing className={styles.directionColumn} align='start'>
                <Spacing>
                  <Typography variant="subtitle1" >
                    {item.partName}
                  </Typography>
                  <div style={{ padding: '4px 8px', fontSize: '12px', background: item.status === '可加入' ? '#4FF80A' : 'yellow', borderRadius: '8px' }}>{item.status}</div>
                </Spacing>
                <Spacing>
                  <Typography variant="caption">计划人数：{item.peopleMinNumber}</Typography>
                  <Typography variant="caption">当前人数：{item.currentPeopleNumber}</Typography>
                </Spacing>
                <Spacing>
                  <Typography variant="caption">{item.time}</Typography>
                  <Typography variant="caption">{item.location}</Typography>
                </Spacing>
              </Spacing>
              <Snackbar
                open={isOpen}
                autoHideDuration={1000}
                message="加入成功"
                sx={{ bottom: { xs: 90, sm: 0 } }}
                action={
                  <Button color="inherit" size="small">
                    <CloseIcon />
                  </Button>
                }
              />
              <div onClick={() => setOpen(true)}>
                <Button variant="contained" size="small">加入</Button>
              </div>
            </Spacing>
          </div>)}
        </List>
      </Box>
    </>
  );
}