import { ADD_TASK } from "../Constant/action-types";
import { CHANGE_IS_DONE } from "../Constant/action-types";
import { EDIT_TASK } from "../Constant/action-types";

const initialstate ={


 todos:[
    {
     id: Math.random(),
     description:"climb Mountian everest",
     isDone: false,
      },

      {
      id: Math.random(),
      description:"swin in the great barrier reef",
      isDone: false,
      },
 
      {
          id: Math.random(),
          description:"go to hawaii",
          isDone: false,
      },
      {
          id: Math.random(),
          description:"visit the great wall of china1",
          isDone: false,
      },
],

};

function rootReducer(state = initialstate , action){


    const {type,payload}= action;
    switch(type){
        case ADD_TASK:
            return {
                todos : state.todos.concat({id:Math.random(),
                    description: payload.toAddTask,
                    isDone: false
                }),
            };
            case CHANGE_IS_DONE :
                return{
                    todos : state.todos.map((item)=>
                    item.id === payload.id ? {...item,isDone : !item.isDone }: item


                    ),
                };
            case EDIT_TASK:
                return{
                    todos : state.todos.map((item)=>
                    item.id === payload.id ? 
                    {...item,description : payload.description }
                    : item


                    ),
                };
            default: 
                return state;
            
    }
    
}
export default rootReducer;
