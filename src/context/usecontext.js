

import { useReducer } from "react";
import { createContext } from "react";

export const TaskContent = createContext()

const taskReducer = (state, action) => {
    switch(action.type){
        
        case 'ADD_TASK':
           console.log('a');
            const id = Math.random() * 100
            const task ={...action.payload,id}
            return {...state,tasksList:[...state.tasksList,task]}

            case 'DELETE_TASK' :
                console.log('mm')
          
    }

}

export const Todolist = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, {
        tasksList: [],
        selectedTask: {}
    })

    return (
        <TaskContent.Provider value={{state,dispatch}}>
            {children}
        </TaskContent.Provider>
    )
}

