import User from "../../../../store/reducers/usersReducer/interfaceUserReducer";
import React, {FunctionComponent, useRef, useState} from 'react';
import TableCell from "@material-ui/core/TableCell";
import InputBase from "@material-ui/core/InputBase";
import TableRow from "@material-ui/core/TableRow";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface FilterPost {
    FirstName: string;
    UserName: string;
    Email: string;
    Company: string;
    id: number;
    data: FilterPosts_data[];
}

export interface FilterPosts_data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function filterForPosts(posts: Post[], users: User[]): FilterPost[] {

    function filterPosts(id: number) {
        return posts.filter(item => item.userId === id)
    }

    return users.map(item => {
        return {
            "FirstName": item.name,
            "UserName": item.username,
            "Email": item.email,
            "Company": item.company.name,
            "id": item.id,
            data: filterPosts(item.id)
        }
    })

}


interface OwnProps {
    item: any
}

type Props = OwnProps;

const TableRowWrapper: FunctionComponent<Props> = ({item}) => {

    const [active, setActive] = useState(true)
    const defaultData = useRef(item)


    return (
        <>
            <TableRow key={item.id} onDoubleClick={() => setActive(state => !state)}>
                <TableCell component="th" scope="row">
                    <InputBase
                        disabled={active}
                        defaultValue={item.title}
                        inputProps={{'aria-label': 'naked'}}
                    />
                </TableCell>
                <TableCell>
                    <InputBase
                        style={{width:"100%",wordWrap:"break-word"}}
                        disabled={active}
                        defaultValue={item.body}
                        inputProps={{'aria-label': 'naked'}}
                    />
                </TableCell>
            </TableRow>
        </>
    );
};

export default TableRowWrapper;


