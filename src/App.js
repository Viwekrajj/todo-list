import React from 'react';
import Main from './Main';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core/styles';


 import './App.css';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(60),
      width: theme.spacing(45),
      height: theme.spacing(60),
      
    },
  },
}));



function App() {
  const classes = useStyles();
  return (
   
      <div className={classes.root}>
      <Paper elevation={3}>
      <Main/>
      <TodoList/>
      </Paper>
      </div>
     
    
  );
}

export default App;
