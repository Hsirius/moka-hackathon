import React from 'react'
import { NavBar, Barrage, Cell } from '@nutui/nutui-react'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';
import Spacing from '../../components/Spacing.tsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { praiseList } from '../../static/data/index.js'
import Heart from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import styles from '../../styles/common.module.scss'
import classNames from 'classnames';

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box'
}

const Praise = () => {
  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{ width: '100%', boxShadow: 0 }}>
        <NavBar leftShow title='表白墙' style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
        <Box
          component='div'
          display='flex'
          flexDirection='column'
          sx={{ width: '90%', margin: '0 auto' }}
        >
          <Spacing className={styles.flexBetween} align='start' style={{ marginTop: '8px', justifyContent: 'space-between' }}>
            <div className={classNames(styles.flex, styles.alignCenter)}>
              <Typography variant="h6" style={{ marginRight: '8px' }}>
                表白墙
              </Typography>
              <Typography variant="subtitle1" >
                2022等你来表白
              </Typography>
            </div>
            <div onClick={() => navigate('/praise/rank')}><BarChartIcon style={{ color: 'rgb(245, 12, 44)' }} /></div>
          </Spacing>
          <Cell className="barrage-demo-wrap" style={barrageStyle}>
            <Barrage className="barrage-demo" speeds={9000} barrageList={praiseList.map(p => p.content)} frequency={3000} style={barrageStyle} />
          </Cell>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {praiseList.map((item, index) =>
              <div key={`${item.userName}-${index}`} style={{ marginBottom: '16px' }}>
                <div>
                  <Spacing>
                    <div style={{ minWidth: 'auto', marginTop: 0 }}>
                      <Avatar src={`https://joeschmoe.io/api/v1/random?timestamp=${index}`} />
                    </div>
                    <span>对</span>
                    <div style={{ minWidth: 'auto', marginTop: 0 }}>
                      <Avatar src={`https://joeschmoe.io/api/v1/random?timestamp=123${index}`} />
                    </div>
                    <span>说:</span>
                  </Spacing>
                  <div style={{ padding: '16px 0 0 72px' }}>{item.content}</div>
                  <Spacing className={styles.justifyBetween} style={{ padding: '8px 0 8px 72px' }}>
                    <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}><Heart style={{ color: '#F50C2C', marginRight: '4px' }} /><span>{item.dianzan}</span></Typography>
                    <Typography variant='caption'>{item.time}</Typography>
                  </Spacing>
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