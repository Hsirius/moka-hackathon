import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WorkPublish() {
  const [name, setName] = React.useState('');
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [minNum, setMinNum] = React.useState('');
  const [maxNum, setMaxNum] = React.useState('');

  return (
    <>
      <Typography variant="h3" gutterBottom>
        发布你的活动
      </Typography>
      <Box
        component="form"
        display='flex'
        flexDirection='column'
        alignItems='center'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
      >
        <TextField
          id="name"
          label="活动名称"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <TextField
          id="time"
          label="活动时间"
          value={time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
        />
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
        <Button variant="contained">发布</Button>
      </Box>
    </>
  );
}