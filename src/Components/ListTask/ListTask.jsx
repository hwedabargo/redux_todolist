import React from 'react';
import "./ListTask.css";
import Task from "../Task/Task"
import { useSelector } from 'react-redux';

function ListTask(){
    const todos= useSelector(state=>state.todos)
    // console.log(todos)
     return (
        <div className="listTask" >
            {
            
             todos.map((item,index) => <Task item ={item} key={index} index={index} />) 

            }
  
        </div>
    )
        
}

export default ListTask;