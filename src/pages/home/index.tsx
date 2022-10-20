import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MokaLogo from '../../static/images/mokaLogo.png'
import { NoticeBar } from '@nutui/nutui-react';
import PraiseImg from '../../static/images/praise.jpg'
import ActivityImg from '../../static/images/activity.jpg'
import MoreImg from '../../static/images/more.jpg'


const cards = [
  { title: '工作', link: 'work' }, 
  { title: '活动', link: 'activity', url: ActivityImg }, 
  { title: '表白墙', link: 'praise', url: PraiseImg }, 
  { title: '更多', link: 'more', url: MoreImg }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#0068FF',
    },
  },
});

export default function Home() {
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={MokaLogo} alt='moka logo' />
          <Typography variant="h4" style={{fontWeight: 'bold'}} color="inherit" noWrap>
            iMoka
          </Typography>
          &nbsp;
          <Typography variant="subtitle1" style={{fontWeight: 'normal', marginTop: '8px'}} color="inherit" noWrap>
            让Moka更有温度  
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <NoticeBar scrollable text='视频JD 2022-10-25要提测啦！赶快抓紧时间搞吧！害搁这摸鱼呐' />
        {/* Hero unit */}
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={card.link} xs={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={() => navigate(card.link)}
                >
                  <CardMedia
                    component="img"
                    image={card.url || `https://source.unsplash.com/random`}
                    alt="random"
                    height={120}
                  />
                  <Typography variant="h6" component="h2" style={{padding: '12px 14px 0'}}>
                    {card.title}
                  </Typography>
                  <CardActions style={{padding: '0 0 8px'}}>
                    <RouterLink to={`/${card.link}`}>
                      <Button size="small">View</Button>
                    </RouterLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}