import {createReducer ,createAction} from "@reduxjs/toolkit"


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserGeo;
}

export interface UserGeo {
    lat: string;
    lng: string;
}

export interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface ActionUserInterface {
    type: string,
    data: User[]
}


export const userDataAction = createAction<User[] >('GET_USERS')


const usersReducer = createReducer([], {
    [userDataAction.type]:(state,action)=>{

        // @ts-ignore
        state.push(action)
    }
})


export default usersReducer
