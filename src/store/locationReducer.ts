// outer
import {createReducer, createAction} from "@reduxjs/toolkit"


// local


export const setLocation = createAction<number>('SET_LOCATION')


const setLocationReducer = createReducer(0, {

    [setLocation.type]: (state, action) => action.payload

})


export default setLocationReducer
