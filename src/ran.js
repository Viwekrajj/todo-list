import React from 'react';
import Chat from './Chat'
import ChatId from './ChatId'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // backgroundColor:'black',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  chat:{
    
    width:'70%',
    position: 'absolute',
    bottom: '10px',
    left:'40%',
  },
  chatId:{
    
    width:'30%',
    height:'50%',
    
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <div className={classes.chatId}>
            <ChatId/>
        </div>
        <div className={classes.chat}>
        <Chat/>
        </div>
      </div>
  );
}