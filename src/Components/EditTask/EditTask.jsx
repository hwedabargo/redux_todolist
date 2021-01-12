import React, { useState } from 'react';
import { Form  , Button , Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {editTask} from "../../Redux/Actions";

import "./EditTask.css";

function EditTask({id}){
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow =()=>setShow(true);

    //hooks to tasktext 
    // const [TaskText,setTaskText]=useState("");

    // here you can get item from task to edit it in daylog
 const taskItem =  useSelector(state => state.todos.find(item=>item.id === id));

 // here initalzation to newDescription becuse you can edit to new task 
  const [newDescription, setNewDescription]=useState(taskItem.description);


  // this needit to maker reducer 
const dispatch=useDispatch()

// this part need it to submit newDescription & close medul
const handlesubmit=()=>{
    dispatch(editTask({id:taskItem.id , description:newDescription}))
    handleClose()
}

    const handelChange=(e)=>{
        setNewDescription(e.target.value)
        console.log(newDescription)

    }
    return(
         
           <>
      <Button variant="outline-dark" className="btn_edit" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" defaultValue={taskItem.description} onChange={handelChange}></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
        {/* defaultValue={taskItem.task} onChange={handleChange} */}
      </Modal>
    </>
        
    )
}
export default EditTask;