// outer
import {takeEvery, call, put, all, takeLatest, takeLeading} from 'redux-saga/effects'
import axios from 'axios'

// local
import {userDataAction} from "../userReducer";


const getDataFetch = async (url: string) => await axios.get("https://jsonplaceholder.typicode.com/users");

export const GET_USERS_SAGA = "GET_USERS_SAGA"


function* getUsersWorker() {
    try {
        // @ts-ignore
        const response = yield call(getDataFetch);
        console.log("response", response)
        yield put(userDataAction(response.data));
    } catch (error) {
        console.log(error)
    }
}

export default function* getUsersWatcher() {
    yield takeLeading(GET_USERS_SAGA, getUsersWorker);
}

