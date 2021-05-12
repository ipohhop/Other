import {takeEvery, call, put, all} from 'redux-saga/effects'
import axios from 'axios'
import {userDataAction} from "../userReducer";

const getDataFetch = async (url: string) => await axios.get("https://jsonplaceholder.typicode.com/users");

export const GET_USERS_SAGA = "GET_USERS_SAGA"


function* getUsersWorker() {
    console.log(1111)
    try {
        // @ts-ignore
        const response = yield call(getDataFetch);
        console.log("respons",response)
        yield put(userDataAction(response));
    } catch (error) {
        console.log(2222)
    }
}

export function* helloSaga() {
    console.log('Hello Sagas!')
}

function* watchApi() {
    yield takeEvery(GET_USERS_SAGA, getUsersWorker);
}

export default function* rootSaga() {
    yield all([watchApi]);
}
