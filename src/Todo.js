import React from 'react';
import firebase from './firebase';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2.5),

     
    },
  },

}));

export default function Todo({ todo }) {
  const classes = useStyles();
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div  className={classes.root}>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <Button onClick={deleteTodo} variant="contained">Delete</Button>
      <Button onClick={completeTodo} variant="contained">Complete</Button>
      
    </div>
  );
}