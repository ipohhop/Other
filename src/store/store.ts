// outer
import {configureStore, PayloadAction} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import createSagaMiddleware from 'redux-saga';

// local
import usersReducer from './reducers/usersReducer/userReducer'
import User from './reducers/usersReducer/interfaceUserReducer';
import setLocationReducer from "./reducers/locationReducer";
import {filterPostsReducer, postsReducer} from "./reducers/postReducers/postsReducer";
import rootSagaWatcher from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users: usersReducer,
        location:setLocationReducer,
        posts:postsReducer,
        filterPosts:filterPostsReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSagaWatcher)


export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (userDataAction?: PayloadAction<User[], string>) => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
