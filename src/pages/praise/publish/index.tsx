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

export default function PraisePublish() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <NavBar leftShow style={{marginBottom: 0}} onClickBack={() => navigate(-1)} />
      <Typography variant="h6" gutterBottom>
        发布你的表白
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
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <TextField
            id="outlined-multiline-static"
            label="内容"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </FormControl>
        <Button variant="contained">发布</Button>
      </Box>
    </>
  );
}