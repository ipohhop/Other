// outer
import {call, put} from 'redux-saga/effects'
import {getDataAPI} from '../api';


// local
import {userDataAction} from "../reducers/usersReducer/userReducer";

export const GET_USERS_SAGA = "GET_USERS_SAGA"


export default function* getUsersWorker() {
    try {
        // @ts-ignore
        const response = yield call(getDataAPI);
        yield put(userDataAction(response.data));

    } catch (error) {
        console.log(error)
    }
}

