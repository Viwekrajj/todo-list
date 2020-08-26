import React, {useState} from 'react'
import firebase from './firebase'

function Main() {
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
        <div>
            <input type="text" 
            placeholder="enter ur data"
            onChange={handleOnChange}
            value={title}/>

            <button onClick={createTodo}>Add item</button>
        </div>
    )
}

export default Main
