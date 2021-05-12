// outer
import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router';


// local
import PageOne from "./PageOne/PageOne";
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive/PageFive';
import PageSix from "./PageSix/PageSix";
import PageSeven from './PageSeven/PageSeven';


interface OwnProps {}

type Props = OwnProps;

const BodyRoot: FunctionComponent<Props> = (props) => {

    return (
        <div className="body__container">

            <Switch>

                <Route exact path='/' render={() => <PageOne/>}/>
                <Route path='/itemTwo' render={() => <PageTwo/>}/>
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
