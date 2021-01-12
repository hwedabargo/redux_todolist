import {ADD_TASK} from "../Constant/action-types";
import {CHANGE_IS_DONE} from "../Constant/action-types";
import {EDIT_TASK} from "../Constant/action-types";
// import {SET_FILTER} from "../Constant/action-types";


export const addTask =(payload)=>{
    return{
        type: ADD_TASK,
        payload:payload,
        
    };
};

export const changeIsDone =(payload)=>{
    return{
        type: CHANGE_IS_DONE,
        payload:payload,
        
    };
};

export const editTask =(payload)=>{
    return{
        type: EDIT_TASK,
        payload:payload,
        
    };
};
// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
