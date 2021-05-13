// outer
import React, {FunctionComponent} from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

// local
import User from "../../../store/interfaceUserReducer";
import {useAppDispatch} from "../../../store/store";
import {setLocation} from "../../../store/locationReducer";


export function creatRow(usersData: User[]) {

    if (usersData instanceof Array) {
        return usersData.map(item => ({
                "id": item.id,
                "FirstName": item.name,
                "UserName": item.username,
                "Email": item.email,
                "Address": item.address.city,
                "Company": item.company.name,
                "PostEvent": function (e: any) {

                    e.stopPropagation()
                    console.log(item.phone)

                }
            })
        )
    }
    return []
}


interface OwnProps {
    params: any
}

type Props = OwnProps;

const ButtonGoToPosts: FunctionComponent<Props> = ({params}) => {

    const history = useHistory()
    const dispatch = useAppDispatch()

    function redirectToPosts(e: any) {
        history.push('/itemTwo')
        dispatch(setLocation(1))
        params.value(e)
    }

    return (

        <strong>
            <Button
                onClick={redirectToPosts}
                variant="contained"
                color="primary"
                size="small"
                style={{marginLeft: 16}}
            >
                Open post
            </Button>
        </strong>

    );
};


export const columnsUser: any[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: "FirstName", headerName: 'First name', width: 180},
    {field: "UserName", headerName: "User name", width: 130},
    {field: "Email", headerName: "Email", width: 180,},
    {field: "Address", headerName: "Address", width: 160},
    {field: "Company", headerName: "Company", width: 190},
    {
        field: "PostEvent", headerName: "Posts", width: 190,
        renderCell: (params: any) => <ButtonGoToPosts params={params}/>
    },
];



