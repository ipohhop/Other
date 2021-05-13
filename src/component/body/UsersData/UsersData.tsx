// outer
import Button from '@material-ui/core/Button'
import React, {FunctionComponent} from 'react'

// local
import UsersDataTableData from './users_data_components/UsersDataTableData'
import {useAppDispatch} from "../../../store/store"
import {GET_USERS_SAGA} from "../../../store/saga/getUserSaga"
import "./pageOne.css"

interface OwnProps {}

type Props = OwnProps

const styleButton = {
    marginTop: "15px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}


const UsersData: FunctionComponent<Props> = (props) => {

    const dispatch = useAppDispatch()

    return (
        <div className="users-data__container">

            <UsersDataTableData/>

            <Button
                style={styleButton}
                variant="contained"
                color="primary"
                onClick={() => dispatch({type: GET_USERS_SAGA})}>
                Get users
            </Button>
        </div>
    );
};


export default UsersData;
