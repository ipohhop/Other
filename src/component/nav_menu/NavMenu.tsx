// outer
import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from 'react-router-dom';


// local
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setLocation} from "../../store/reducers/locationReducer";

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: "100%",
    },
    tabs: {
        marginTop: `10px`,
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function NavMenu() {
    const classes = useStyles();
    const locationIndex = useAppSelector(state=>state.location)

    const dispatch = useAppDispatch()

    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {

        dispatch(setLocation(newValue))
        let path
        switch (newValue) {
            case 0:
                path = '/'
                break;
            case  1:
                path = '/itemTwo'
                break;
            case  2:
                path = '/itemThree'
                break;
            case  3:
                path = '/itemFour'
                break;
            case  4:
                path = '/itemFive'
                break;
            case  5:
                path = '/itemSix'
                break;
            case  6:
                path = '/itemSeven'
                break;
            default:
                path = '/'
        }

        history.push(path);
    };


    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={locationIndex}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Users data" {...a11yProps(0)} />
                <Tab label="Page Two" {...a11yProps(1)} />
                <Tab label="Page Three" {...a11yProps(2)} />
                <Tab label="Page Four" {...a11yProps(3)} />
                <Tab label="Page Five" {...a11yProps(4)} />
                <Tab label="Page Six" {...a11yProps(5)} />
                <Tab label="Page Seven" {...a11yProps(6)} />
            </Tabs>

        </div>
    );
}

