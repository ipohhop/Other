// outer
import * as React from 'react';
import {DataGrid, GridFilterModel, GridRowsProp, GridToolbar} from '@material-ui/data-grid';

//local
import {useAppSelector} from "../../../../store/store";
import {columnsUser, creatRow} from "../tableDataUsersUtilit";
import {useMemo} from "react";


const riceFilterModel: GridFilterModel = {
    items: [{columnField: 'commodity', operatorValue: 'contains', value: 'rice'}],
};

export default function UsersDataTableData() {
    const users = useAppSelector(store => store.users)

    let rowsUsers: GridRowsProp = useMemo(() => creatRow(users), [users])

    return (
        <div style={{height: 450, width: '100%'}}>
            <DataGrid rows={rowsUsers} columns={columnsUser} pageSize={5}
                      filterModel={riceFilterModel}
                      components={{
                          Toolbar: GridToolbar,
                      }}
            />
        </div>
    );
}
