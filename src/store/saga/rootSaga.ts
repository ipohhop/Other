// outer
import {takeLeading} from "redux-saga/effects";

// local
import getUsersWorker, {GET_USERS_SAGA} from "./getUserSaga";
import getAllPostsWorker, {GET_ALL_POSTS_SAGA} from "./getPostsSaga";





export default function* rootSagaWatcher() {
    yield takeLeading(GET_USERS_SAGA, getUsersWorker);
    yield takeLeading(GET_ALL_POSTS_SAGA, getAllPostsWorker)
}

