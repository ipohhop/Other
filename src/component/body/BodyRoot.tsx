// outer
import React, {FunctionComponent, useEffect} from 'react';
import {Route, Switch} from 'react-router';


// local
import UsersData from "./UsersData/UsersData";
import UsersPosts from './UsersPosts/UsersPosts';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive/PageFive';
import PageSix from "./PageSix/PageSix";
import PageSeven from './PageSeven/PageSeven';
import {useAppDispatch} from "../../store/store";
import {GET_USERS_SAGA} from "../../store/saga/getUserSaga";


interface OwnProps {}

type Props = OwnProps;

const BodyRoot: FunctionComponent<Props> = (props) => {

    // get users and push in store
    const dispatch = useAppDispatch()
    useEffect(() => {dispatch({type: GET_USERS_SAGA})}, [])


    return (
        <div className="body__container">

            <Switch>

                <Route exact path='/' render={() => <UsersData/>}/>
                <Route path='/itemTwo' render={() => <UsersPosts/>}/>
                <Route path='/itemThree' render={() => <PageThree/>}/>
                <Route path='/itemFour' render={() => <PageFour/>}/>
                <Route path='/itemFive' render={() => <PageFive/>}/>
                <Route path='/itemSix' render={() => <PageSix/>}/>
                <Route path='/itemSeven' render={() => <PageSeven/>}/>

            </Switch>

        </div>
    );
};

export default BodyRoot;
