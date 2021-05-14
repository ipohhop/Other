// outer
import * as React from 'react';
import {DataGrid, GridRowsProp, GridToolbar} from '@material-ui/data-grid';
import {useMemo} from "react";

//local
import {useAppSelector} from "../../../../store/store";
import {columnsUser, creatRow} from "../tableDataUsersUtilit";



export default function UsersDataTableData() {
    const users = useAppSelector(store => store.users)

    let rowsUsers: GridRowsProp = useMemo(() => creatRow(users), [users])

    return (
        <div style={{height: 450, width: '100%'}}>
            <DataGrid
                rows={rowsUsers}
                columns={columnsUser}
                pageSize={5}

                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}
