import React, {FunctionComponent} from 'react';
import PageOneTableData from './page_one_components/PageOneTableData';

interface OwnProps {}

type Props = OwnProps;

const PageOne: FunctionComponent<Props> = (props) => {

    return (
        <>
            <PageOneTableData/>
        </>
    );
};

export default PageOne;
