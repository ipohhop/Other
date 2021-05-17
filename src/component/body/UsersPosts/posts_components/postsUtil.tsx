import User from "../../../../store/reducers/usersReducer/interfaceUserReducer";
import React, {FunctionComponent, useRef, useState} from 'react';
import TableCell from "@material-ui/core/TableCell";
import InputBase from "@material-ui/core/InputBase";
import TableRow from "@material-ui/core/TableRow";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Fab from "@material-ui/core/Fab";
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios";
import {log} from "util";

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

    const [active, setActive] = useState(false)
    const defaultData = useRef(item)
    // console.log(item)

    function putData() {

        const data = defaultData.current
        console.log("data",data)

        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.userId}`,data)
            .then(data=>{
                console.log(data.data)
            })
    }


    return (
        <>
            <TableRow key={item.id} style={active ? {background: "rgba(255,255,0,0.43)"} : {}}>
                <TableCell component="th" scope="row">
                    {item.title}
                    <InputBase
                        disabled={!active}
                        defaultValue={item.title}
                        inputProps={{'aria-label': 'naked'}}
                    />
                </TableCell>
                <TableCell>
                    {item.body}
                    <InputBase
                        style={{width: "100%", wordWrap: "break-word"}}
                        disabled={!active}
                        defaultValue={item.body}
                        inputProps={{'aria-label': 'naked'}}
                    />
                </TableCell>
                <TableCell>

                    <strong>
                        <Fab size="small" color="primary" aria-label="add">
                            <BorderColorIcon onClick={() => setActive(state => true)}/>
                        </Fab>
                    </strong>

                </TableCell>

                <TableCell>
                    <strong>
                        <Fab size="small" color="default" aria-label="add">
                            <SaveIcon onClick={putData}/>
                        </Fab>
                    </strong>
                </TableCell>
            </TableRow>
        </>
    );
};

export default TableRowWrapper;


