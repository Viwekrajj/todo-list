import React, { useState,useEffect } from 'react';
import './Todo.css'

function Todo() {
    const initialTodos= JSON.parse(window.localStorage.getItem("todos")||
    "[]")
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(initialTodos);

    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todoList))
    },[todoList]);
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleClick = () => {

        if (todo !== "") {
            const todoDetails = {
                id: Math.floor(Math.random() * 1000),
                value: todo,
                isCompleted: false,
            };
            setTodoList([...todoList, todoDetails]);
        }
        
        
    };

    const onDelete = (e, id) => {
        e.preventDefault();

        setTodoList(todoList.filter((t) => t.id !== id));
    }

    const onComplete = (e, id) => {
        e.preventDefault();

        const element = todoList.findIndex((elem) => elem.id === id);


        const newTodoList = [...todoList];


        newTodoList[element] = {
            ...newTodoList[element],
            isCompleted: true,
        };

        setTodoList(newTodoList);

    };


    return (
        <div>
            <div>
                <input type="text" className="inputText"

                    onChange={(e) => handleChange(e)}
                    placeholder="input todo....." />
                <button onClick={handleClick}>Add</button>
            </div>




            <div className="show">

                {todoList !== [] ? (
                    <ul>
                        {todoList.map((t) => (
                            <li className={t.isCompleted ? "crossText" : "listitem"}> {t.value}
                                <button onClick={(e) => onDelete(e, t.id)}><i className="fas fa-trash-alt space"></i></button>
                               
                                <button onClick={(e) => onComplete(e, t.id)}><i class="far fa-check-circle"></i></button>
                            </li>
                        ))}
                    </ul>

                ) : null}
            </div>



        </div>
    );
}

export default Todo
