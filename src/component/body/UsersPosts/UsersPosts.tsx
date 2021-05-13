import React, {FunctionComponent} from 'react';
import PostTableData from "./posts_components/PostTableData";

interface OwnProps {}

type Props = OwnProps;

const UsersPosts: FunctionComponent<Props> = (props) => {

    return (
        <>
            <PostTableData/>

        </>);
};

export default UsersPosts;
