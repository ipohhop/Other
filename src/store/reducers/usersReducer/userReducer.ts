// outer
import {createReducer, createAction} from "@reduxjs/toolkit"


// local
import User from "./interfaceUserReducer"

export const userDataAction = createAction<User[]>('GET_USERS')


const usersReducer = createReducer([], {

    [userDataAction.type]: (state, action) => action.payload

})


export default usersReducer
