// outer
import {createReducer, createAction} from "@reduxjs/toolkit"
import {FilterPost, FilterPosts_data, Post} from "../../../component/body/UsersPosts/posts_components/postsInterfaces";


// local
import {filterForPosts} from "../../../component/body/UsersPosts/posts_components/postsUtil";
import User from "../usersReducer/interfaceUserReducer";
import {Map} from "@material-ui/icons";


export const postsDataAction = createAction<Post[]>('GET_ALL_POSTS')


export const postsReducer = createReducer([], {

    [postsDataAction.type]: (state, action) => action.payload

})


export const filterPostsDataAction = createAction<[Post[], User[]]>('FILTER_ALL_POSTS')

export const putOnePost = createAction<[FilterPosts_data, FilterPosts_data]>('PUT_ONE_POST')
export const deleteOnePost = createAction<[{}, FilterPosts_data]>('DELETE_ONE_POST')

// @ts-ignore
export const filterPostsReducer = createReducer([], {

    [filterPostsDataAction.type]: (state, action) => {
        return filterForPosts(action.payload[0], action.payload[1])
    },
    [putOnePost.type]: (state: FilterPost[], action) => {
        const [data, defaultPost] = action.payload

        //fix bug , JSONplaseholder return false id
        data.id = Math.floor(Math.random() * 100000)

        const userIndex = data.userId - 1

        const userDataPost = state[userIndex]["data"]

        const index = userDataPost.findIndex(item => item.title === defaultPost.title)

        state[userIndex]["data"].splice(index, 1, data)
        return state

    },
    [deleteOnePost.type]: (state: FilterPost[], action) => {
        const [data, defaultPost] = action.payload

        const userIndex = defaultPost.userId - 1
        const userDataPost = state[userIndex]["data"]
        const index = userDataPost.findIndex(item => item.title === defaultPost.title)

        state[userIndex]["data"].splice(index, 1)
        return state
    },


})



