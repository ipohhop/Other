import Button from '@material-ui/core/Button';
import React, {FunctionComponent} from 'react';
import PageOneTableData from './page_one_components/PageOneTableData';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {userDataAction} from "../../../store/userReducer";
import {GET_USERS_SAGA} from "../../../store/saga/getUserSaga";

interface OwnProps {}

type Props = OwnProps;

const PageOne: FunctionComponent<Props> = (props) => {

    const data = useAppSelector(state => state.users)

    // @ts-ignore
    const dispatch =  useAppDispatch()

    console.log("data:", data)
    return (
        <>
            <PageOneTableData/>

            <Button variant="contained" color="primary" onClick={() => {
                // @ts-ignore
                dispatch({GET_USERS_SAGA})
                console.log("get users")
            }}>
                Get users
            </Button>
        </>
    );
};


export default PageOne;
