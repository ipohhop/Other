// outer
import React from "react";
import Button from "@material-ui/core/Button";

// local
import User from "../../../store/interfaceUserReducer";


export function creatRow(array: User[]) {

    if (array instanceof Array) {
        return array.map(item => ({
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

export const columnsUser: any[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: "FirstName", headerName: 'First name', width: 180},
    {field: "UserName", headerName: "User name", width: 130},
    {field: "Email", headerName: "Email", width: 180,},
    {field: "Address", headerName: "Address", width: 160},
    {field: "Company", headerName: "Company", width: 190},
    {
        field: "PostEvent", headerName: "Posts", width: 190,
        renderCell: (params: any) => {
            return (
                <strong>
                    <Button
                        onClick={params.value}
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{marginLeft: 16}}
                    >
                        Open post
                    </Button>
                </strong>
            )
        },
    },
];



