// outer


// local
import {FilterPost, FilterPosts_data, Post} from "./postsInterfaces";
import User from "../../../../store/reducers/usersReducer/interfaceUserReducer";


// function for filter posts data from JSONPlaceholder to table format

export function filterForPosts(posts: Post[], users: User[]): FilterPost[] {

    function filterPosts(id: number) {
        return posts.filter(item => item.userId === id)
    }

    return users.map(item => {
        return {
            "FirstName": item.name,
            "UserName": item.username,
            "Email": item.email,
            "Company": item.company.name,
            "id": item.id,
            data: filterPosts(item.id)
        }
    })
}


// reducer for post_table item data

export const RESET_POST_ITEM_STATE = "RESET_POST_ITEM_STATE"
export const SET_BODY_POST_ITEM_STATE = "SET_BODY_POST_ITEM_STATE"
export const SET_TITLE_POST_ITEM_STATE = "SET_TITLE_POST_ITEM_STATE"

export type ActionType = {
    type: "RESET_POST_ITEM_STATE" | 'SET_BODY_POST_ITEM_STATE' | 'SET_TITLE_POST_ITEM_STATE',
    title?: string,
    body?: string,
    data?:FilterPosts_data
}

export function setBodyPostItem(data:string):ActionType{
    return {
        type:SET_BODY_POST_ITEM_STATE,
        body:data
    }
}

export function setTitlePostItem(data:string):ActionType{
    return {
        type:SET_TITLE_POST_ITEM_STATE,
        title:data
    }
}

export function resetPostItemData(data:FilterPosts_data):ActionType{
    return {
        type:RESET_POST_ITEM_STATE,
        data:data
    }
}

export function postItemReducer(state:any | FilterPosts_data, action: ActionType) {
    switch (action.type) {
        case RESET_POST_ITEM_STATE:
            return {...action.data};
        case SET_BODY_POST_ITEM_STATE:
            return {...state, "body": action.body};
        case SET_TITLE_POST_ITEM_STATE:
            return {...state, "title": action.title};
        default:
            return state;
    }
}

