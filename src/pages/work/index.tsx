import React from 'react'
import { Grid,GridItem } from '@nutui/nutui-react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Work = () => {
  const dataList = [
    {title: '进行中的', icon: 'dongdong', linkUrl: '/progress'},
    {title: '我发起的', icon: 'dongdong', linkUrl: '/progress'},
    {title: '我参与的', icon: 'dongdong', linkUrl: '/progress'},
    {title: '已完成的', icon: 'dongdong', linkUrl: '/progress'},
    {title: '任务日程', icon: 'dongdong', linkUrl: '/progress'},
    {title: '我评论的', icon: 'dongdong', linkUrl: '/progress'},
  ]
  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '16px auto' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid gutter={3} border={false}>
        {dataList.map(item => <GridItem key={item.title} icon={item.icon} text={item.title} />)}
      </Grid>
    </>
  )
}
export default Work