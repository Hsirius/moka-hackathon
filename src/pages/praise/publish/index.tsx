import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NavBar } from '@nutui/nutui-react';
import { useNavigate } from 'react-router';
import { Paper, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function PraisePublish() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState('');
  const [isOpen, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
    <NavBar title='发布表白' leftShow style={{ marginBottom: 0 }} onClickBack={() => navigate(-1)} />
    <Paper elevation={0} sx={{ width: '90%', margin: '16px auto' }}>
      <Typography variant="h6" gutterBottom style={{color: '#1976d2'}}>
        发布你的表白
      </Typography>
      <Box
        component="div"
        display='flex'
        flexDirection='column'
        sx={{
          '& > :not(style)': { m: 1 },
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">对象</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="对象"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>欢哥</MenuItem>
            <MenuItem value={21}>涛哥</MenuItem>
            <MenuItem value={22}>壮哥</MenuItem>
            <MenuItem value={23}>飞哥</MenuItem>
            <MenuItem value={24}>赛雷</MenuItem>
            <MenuItem value={25}>峰哥</MenuItem>
            <MenuItem value={26}>高伟哥</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <TextField
            id="outlined-multiline-static"
            label="内容"
            multiline
            rows={4}
          />
        </FormControl>
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