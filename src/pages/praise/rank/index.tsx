import React from 'react'
import { NavBar } from '@nutui/nutui-react'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { praiseRank } from '../../../static/data/index.js'

const PraiseRank = () => {
  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{ width: '100%', boxShadow: 0 }}>
        <NavBar leftShow title='排行榜' style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
        <Box
          component='div'
          display='flex'
          flexDirection='column'
          sx={{ width: '90%', margin: '0 auto' }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {praiseRank.map((item, index) =>
              <div onClick={() => navigate('/mine')} key={`${item.userName}-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '16px 0', padding: '8px', background: '#F7F8FA', borderRadius: '8px' }}>
                <Avatar src={`https://joeschmoe.io/api/v1/random?timestamp=${index}`} />
                <div style={{ marginLeft: '16px', flex: 1 }}>
                  <Typography variant='subtitle1'>{item.userName}</Typography>
                  <Typography variant='caption'>{item.departmentName}</Typography>
                </div>
                <div>
                  <Typography variant='subtitle1'>{item.times}</Typography>
                </div>
              </div>
            )}
          </List>
        </Box>
      </Paper>
    </>
  )
}
export default PraiseRank