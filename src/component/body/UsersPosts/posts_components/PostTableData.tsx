// outer
import React, {useMemo} from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// local
import {useAppSelector} from "../../../../store/store";
import TableRowWrapper from './TablePostItem';




function Row({row}: any) {
    const {data} = row;
    const [open, setOpen] = React.useState(false);


    return (
        <>
            <TableRow >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.FirstName}
                </TableCell>
                <TableCell align="right">{row.UserName}</TableCell>
                <TableCell align="right">{row.Company}</TableCell>
                <TableCell align="right">{row.data.length}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Posts
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Post</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((item: any) => <TableRowWrapper key={item.id} item={item}/>)}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}


export default function PostTableData() {

    const filterPosts = useAppSelector(state => state.filterPosts)

    const filterPostsComponents = useMemo(() =>
        filterPosts.map((row,index) => (<Row key={index} row={row}/>)), [filterPosts])


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">

                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>First name</TableCell>
                        <TableCell align="right">User name</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Posts</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {filterPostsComponents}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
