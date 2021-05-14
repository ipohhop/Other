// outer
import {createReducer, createAction} from "@reduxjs/toolkit"


// local
import {filterForPosts, Post} from "../../../component/body/UsersPosts/posts_components/postsUtil";
import User from "../usersReducer/interfaceUserReducer";


export const postsDataAction = createAction<Post[]>('GET_ALL_POSTS')


export const postsReducer = createReducer([], {

    [postsDataAction.type]: (state, action) => action.payload

})


export const filterPostsDataAction = createAction<[Post[], User[]]>('FILTER_ALL_POSTS')

// @ts-ignore
export const filterPostsReducer = createReducer([], {

    [filterPostsDataAction.type]: (state, action) => {

        return filterForPosts(action.payload[0],action.payload[1])
    }

})



