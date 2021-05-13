import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {date: '2020-01-05', customerId: '11091700', amount: 3},
            {date: '2020-01-02', customerId: 'Anonymous', amount: 1},
        ],
    };
}


function Row({row}: any) {
    const {data} = row;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
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
                                    {data.map((item: any) => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                {item.title}
                                            </TableCell>
                                            <TableCell>{item.body}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const post = [
    {
        "FirstName": "Leanne Graham",
        "UserName": "Bret",
        "Email": "Sincere@april.biz",
        "Company": "Romaguera-Crona",
        "id": 1,
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et " +
                    "cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores " +
                    "neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel " +
                    "accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }
        ]
    }
]

function createPostData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {date: '2020-01-05', customerId: '11091700', amount: 3},
            {date: '2020-01-02', customerId: 'Anonymous', amount: 1},
        ],
    };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function PostTableData() {
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
                    {/*{rows.map((row) => (*/}
                    <Row row={post[0]}/>
                    <Row row={post[0]}/>

                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
