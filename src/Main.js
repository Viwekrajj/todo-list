import React, {useState} from 'react'
import firebase from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2.5),

       
      },
    },
  
  }));

function Main() {
    const classes = useStyles();
   const[title, setTitle]=useState('');

   const handleOnChange=(e)=>{
       setTitle(e.target.value);
   };

   const createTodo=()=>{
       const todoRef=firebase.database().ref('Todo');
       const todo={
           title,
           complete:false,
       };
       todoRef.push(todo);
   };


    return (
        <div className={classes.root}>
          
           <TextField  type="text" 
            id="standard-basic"
             label="Enter ur list" 
             onChange={handleOnChange}
             value={title}/>
           
           
           <Button onClick={createTodo} variant="contained">Add item</Button>

            </div> 

            
           
      
    )
}

export default Main