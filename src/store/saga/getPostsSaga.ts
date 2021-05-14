// outer
import {call, put ,select} from 'redux-saga/effects'
import {getAllPostsAPI} from '../api';


// local
import {filterPostsDataAction, postsDataAction} from "../reducers/postReducers/postsReducer";


export const GET_ALL_POSTS_SAGA = "GET_ALL_POSTS_SAGA"


export default function* getAllPostsWorker() {
    try {
        // @ts-ignore
        const response = yield call(getAllPostsAPI);
        yield put(postsDataAction(response.data));

        // @ts-ignore
        let data = yield select(state=>[state.posts,state.users]);
        yield put(filterPostsDataAction(data))

    } catch (error) {
        console.log(error)
    }
}

