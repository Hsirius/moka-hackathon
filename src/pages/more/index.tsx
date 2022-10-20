import * as React from 'react';

import { NavBar,  } from '@nutui/nutui-react';
import {  useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Mine() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar title='更多' leftShow style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
      <Box
          component='div'
          display='flex'
          flexDirection='column'
          sx={{ width: '90%', margin: '0 auto' }}
        > 
        <Typography variant="h6" color="inherit" style={{marginTop: '80px'}}>
          想体验更多功能？投我们一票吧！
        </Typography>
      </Box>  
    </>
  );
}
