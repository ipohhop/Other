// outer
import React, {FunctionComponent, useEffect, useReducer, useRef, useState} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField/TextField";
import Fab from "@material-ui/core/Fab";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

// local
import {deleteData, putData} from "./postsTableAPI";
import {ActionType, postItemReducer, resetPostItemData, setBodyPostItem, setTitlePostItem} from "./postsUtil";
import {FilterPosts_data} from "./postsInterfaces";

// require outer
const _ = require('lodash');


interface OwnProps {
    item: FilterPosts_data
}

type Props = OwnProps;

const TableRowWrapper: FunctionComponent<Props> = ({item}) => {

        // origin data ref
        const defaultData = useRef({...item})

        // active item status point
        const [active, setActive] = useState(false)


        // creat current data reducer
        const [dataItem, dispatchesData] = useReducer(postItemReducer, {...item})

        //function for set input value in current data object
        function setPostValue(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
                              actionCreator: (data: string) => ActionType) {
            let value = e.target.value
            dispatchesData(actionCreator(value))
        }


        const [statusCorrect, setStatusCorrect] = useState("")


        // origin data point
        const [changePoint, setChangePoint] = useState(true)

        // effect for comparison origin data and current data
        useEffect(() => {
            let status = _.isEqual(defaultData.current, dataItem)
            if (status !== changePoint) setChangePoint(status)

        }, [dataItem])

        // delete post item status
        const [deleteStatus, setDeleteStatus] = useState(false)

        //delete post item function
        function deletePostItem() {
            let deleteStatusFn = false
            return () => {
                setStatusCorrect(prev => {
                    switch (prev) {
                        case "":
                            deleteStatusFn = true
                            setDeleteStatus(true)
                            return "delete"
                        case "correcting":
                            deleteStatusFn = true
                            setDeleteStatus(true)
                            return "delete"
                        case "delete":
                            deleteStatusFn = false
                            setDeleteStatus(false)
                            return ""
                        default:
                            return ""
                    }
                })
            }
        }

        function correctPostItem() {
            setStatusCorrect(prev => {
                switch (prev) {
                    case "" :
                        setActive(true)
                        return "correcting"
                    case "delete":
                        setActive(true)
                        return "correcting"
                    case "correcting":
                        setActive(false)
                        // console.log(defaultData.current)
                        dispatchesData(resetPostItemData(defaultData.current))
                        return ""
                    default:
                        return ""
                }
            })
        }
        console.log("dataItem value:",dataItem)
        console.log("status:", statusCorrect)
        // deleteData(defaultData)

// function for set color post on item
        function colorBlock() {
            if (deleteStatus) return {background: "rgba(231,27,27,0.62)"}
            return active
                ? changePoint
                    ? {background: "rgba(37,222,24,0.47)"}
                    : {background: "rgba(238,206,48,0.45)"}
                : {}
        }

        return (
            <>
                <TableRow key={item.id} style={colorBlock()}>

                    {/*title textarea post*/}

                    <TableCell>
                        <TextField
                            disabled={!active}
                            style={{width: "100%", color: "black"}}
                            multiline
                            rows={4}
                            value={dataItem.title}
                            onChange={(e) => setPostValue(e, setTitlePostItem)}
                            variant={active ? "outlined" : undefined}
                        />
                    </TableCell>

                    {/*body textarea post*/}

                    <TableCell style={{color: "rgba(0, 0, 0, 0.87)"}}>
                        <TextField
                            onChange={(e) => setPostValue(e, setBodyPostItem)}
                            disabled={!active}
                            style={{width: "100%", color: "rgba(0, 0, 0, 0.87)"}}
                            multiline
                            rows={4}
                            value={dataItem.body}
                            variant={active ? "outlined" : undefined}
                        />
                    </TableCell>

                    {/*change icon item*/}

                    <TableCell style={{width: "40px"}}>
                        <strong>
                            <Fab size="small" color="primary" aria-label="add">
                                <BorderColorIcon onClick={correctPostItem}/>
                            </Fab>
                        </strong>
                    </TableCell>

                    {/*delete icon item*/}

                    <TableCell style={{width: "40px"}}>
                        <strong>
                            <Fab size="small" color="default" aria-label="add">
                                <DeleteIcon onClick={deletePostItem()}/>
                            </Fab>
                        </strong>
                    </TableCell>

                    {/*save icon item*/}

                    <TableCell style={{width: "40px"}}>
                        <strong>
                            <Fab size="small" color="default" aria-label="add" disabled={changePoint}>
                                <SaveIcon onClick={() => putData(defaultData)}/>
                            </Fab>
                        </strong>
                    </TableCell>

                </TableRow>
            </>
        );
    }
;

export default TableRowWrapper;

