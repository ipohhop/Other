// outer
import {call, put} from 'redux-saga/effects'


// local
import {deleteOnePost, putOnePost} from "../reducers/postReducers/postsReducer";
import {FilterPosts_data} from "../../component/body/UsersPosts/posts_components/postsInterfaces";
import {deletePostItem, putPostItem} from "../api";

export const SET_PAYLOAD_POST_SAGA = "PUT_POST_SAGA"

export const PUT_POST_SAGA = "PUT_POST_SAGA"
export const DELETE_POST_SAGA = "DELETE_POST_SAGA"


interface ActionPostsSet {
    type: string,
    payload: FilterPosts_data,
    defaultPost:FilterPosts_data,
    do: string
}



export default function* putAndDeletePostWorker(action: ActionPostsSet) {
    try {
        if (action.do === PUT_POST_SAGA) {
            // @ts-ignore
            const response = yield call(putPostItem, action.payload);
            yield put(putOnePost([response.data,action.defaultPost]));
        }

        if (action.do === DELETE_POST_SAGA) {
            // @ts-ignore
            const response = yield call(deletePostItem, action.payload);
            yield put(deleteOnePost([response.data,action.defaultPost]));
        }

    } catch (error) {
        console.log(error)
    }
}

