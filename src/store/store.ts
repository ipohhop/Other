// outer
import {configureStore, PayloadAction} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import createSagaMiddleware from 'redux-saga';


// local
import usersReducer from './userReducer'
import getUsersWatcher from "./saga/getUserSaga";
import User from './interfaceUserReducer';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(getUsersWatcher)


export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (userDataAction?: PayloadAction<User[], string>) => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
