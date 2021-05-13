// outer
import {call, put,takeLeading} from 'redux-saga/effects'
import { getDataAPI } from '../api';


// local
import {userDataAction} from "../userReducer";



export const GET_USERS_SAGA = "GET_USERS_SAGA"


function* getUsersWorker() {
    try {
        // @ts-ignore
        const response = yield call(getDataAPI);
        yield put(userDataAction(response.data));

    } catch (error) {
        console.log(error)
    }
}

export default function* getUsersWatcher() {
    yield takeLeading(GET_USERS_SAGA, getUsersWorker);
}

