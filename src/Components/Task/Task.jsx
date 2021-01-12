import { Button } from 'react-bootstrap';
import React from 'react';
import "./Task.css";
import { useDispatch } from 'react-redux';
import { changeIsDone } from "../../Redux/Actions";
import EditTask from "../EditTask/EditTask"

function Task({item , index}){
    // const handelChange =()=>{

    // 
    const dispatch=useDispatch();

// this function to do changed in button done
    const handlesubmit =()=>{
     
            dispatch(changeIsDone({id:item.id}))
        }
        // this part for task 
    return(
        <div className="Task" >
         <h4 style={{textDecoration:!item.isDone? "none" : "line-through"}}><span className="Task_Number">Task {index +1} : </span>{item.description}</h4>
         <div>
             <Button variant= {!item.isDone? "success" : "outline-danger"} className="done_btn" onClick={handlesubmit}>{!item.isDone?"Done":"Unod"}</Button>
             <EditTask  id={item.id} />
             {/* id={toDo_task.id} */}
         </div>
        </div>
    )
}
export default Task;