// outer
import React, {FunctionComponent} from 'react';
import Button from "@material-ui/core/Button";

// local
import PostTableData from "./posts_components/PostTableData";
import {useAppDispatch} from "../../../store/store";
import {GET_ALL_POSTS_SAGA} from "../../../store/saga/getPostsSaga";


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


interface OwnProps {}

type Props = OwnProps;

const UsersPosts: FunctionComponent<Props> = (props) => {

    const dispatch = useAppDispatch()


    return (
        <>
            <PostTableData/>
            <Button
                style={styleButton}
                variant="contained"
                color="primary"
                onClick={() => {
                    dispatch({type: GET_ALL_POSTS_SAGA})
                }}>
                Get posts
            </Button>

        </>);
};

export default UsersPosts;
