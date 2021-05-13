// outer
import {createReducer ,createAction} from "@reduxjs/toolkit"


// local
import User from "./interfaceUserReducer"

export const userDataAction = createAction<User[] >('GET_USERS')


const usersReducer = createReducer([], {
    [userDataAction.type]:(state,action)=>{
        // const set = new Set(...state)
        // console.log(set)

        // state.push(...action.payload)
        return action.payload
    }
})



export default usersReducer
