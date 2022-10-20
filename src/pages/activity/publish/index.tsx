import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Paper, Snackbar } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { NavBar } from '@nutui/nutui-react';
import { useNavigate } from 'react-router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';

export default function StateTextFields() {
  const navigate = useNavigate()
  const [isOpen, setOpen] = React.useState(false)
  const [name, setName] = React.useState('');
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [minNum, setMinNum] = React.useState('');
  const [maxNum, setMaxNum] = React.useState('');
  const [mark, setMark] = React.useState('');

  return (
    <>
    <NavBar title='发布活动' leftShow style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
    <Paper elevation={0} sx={{ width: '90%', margin: '16px auto' }}>
      <Typography variant="h6" gutterBottom style={{color: '#1976d2'}}>
        发布你的活动
      </Typography>
      <Box
        component="div"
        display='flex'
        flexDirection='column'
        sx={{
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          id="name"
          label="活动名称"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            label="活动时间"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          id="place"
          label="活动地点"
          value={place}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlace(e.target.value)}
        />
        <TextField
          id="minNum"
          label="最小活动人数"
          value={minNum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinNum(e.target.value)}
        />
        <TextField
          id="maxNum"
          label="最大活动人数"
          value={maxNum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxNum(e.target.value)}
        />
        <TextField
          id="mark"
          label="备注"
          value={mark}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMark(e.target.value)}
        />
        <Button variant="contained" onClick={() => setOpen(true)}>发布</Button>
      </Box>
      <Snackbar
        open={isOpen}
        autoHideDuration={1000}
        message="发布成功"
        sx={{ bottom: { xs: 90, sm: 0 } }}
        action={
          <Button color="inherit" size="small">
            <CloseIcon />
          </Button>
        }
      />
      </Paper>
    </>
  );
}