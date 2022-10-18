import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MokaLogo from '../../static/images/mokaLogo.png'
import { NoticeBar } from '@nutui/nutui-react';



const cards = [{ title: '工作', link: 'work' }, { title: '活动', link: 'activity' }, { title: '表白墙', link: 'praise' }, { title: '更多', link: 'more' }];

const theme = createTheme({
  palette: {
    primary: {
      main: '#0068FF',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={MokaLogo} alt='moka logo' />
          <Typography variant="h6" color="inherit" noWrap>
            Moka backyard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <NoticeBar text='视频JD 2022-10-25要提测啦！' />
        {/* Hero unit */}
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.link} xs={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
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