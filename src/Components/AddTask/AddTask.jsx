import React, { useState } from 'react';
import './AddTask.css';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Actions';
function AddTask() {

  const [toAddTask,setToAddTask]=useState("")
  
  const handlechange = (e) => {
    setToAddTask(e.target.value)
  }
  // console.log(toAddTask);
  const dispatch=useDispatch()

  const handlesubmit =()=>{
    if(toAddTask){

      dispatch(addTask({toAddTask:toAddTask}))
      setToAddTask=("")
    }
    else 
          alert("empty Task");
  }
  return (
    <div  className="AddTask">
        <h1>TO DO LIST!</h1>
        <div className="AddField">
        <Form.Control  id="AddTaskInput" size="lg" type="text" placeholder="Enter Your Task" onChange={handlechange} value={toAddTask} />
         <Button variant="outline-primary" className="add-todo"   style={{ border:"2px white solid" , color:"white" }}  onClick={handlesubmit}>
            Add</Button>
              
                </div>
                {/* onClick={handlesubmit}
                value={toAddTask} onChange={handlechange} */}
    </div>
  );
}

export default AddTask;
