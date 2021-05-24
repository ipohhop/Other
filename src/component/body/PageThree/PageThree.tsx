// outer
import Button from '@material-ui/core/Button/Button';
import Paper from '@material-ui/core/Paper/Paper';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import React, {FunctionComponent, useState} from 'react';


// local
import Multiline from "./components/Multiline";
import "./threeScss.scss"
import {Chip} from "@material-ui/core";

// function creatObjectSort(element:string){
//     return element.split("").reduce((item,))
// }

function creatSortElements(array:String[]) {
    return array.map(item=>1)
}

interface OwnProps {
}

type Props = OwnProps;

const PageThree: FunctionComponent<Props> = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleClick = () => setOpen(true);

    const [saveString, setSaveString] = useState("")

    const goldWords = ["apple", "banana", "lemon", "dirol", "icecream"]



    const [multilineValue, setMultilineValue] = useState("")
    const [currentWord, setCurrentWord] = useState("")


    return (
        <div className="three-page__container">
            <Paper elevation={3} style={{marginBottom: "30px", padding: "10px"}}>
                <div className="multiline__container">

                    <Multiline setMultilineValue={setMultilineValue}/>
                    <div style={{display: "flex"}}>

                        {/*save button*/}

                        <Button
                            onClick={() => setSaveString(multilineValue)}
                            style={{margin: "20px 10px 0 0"}} variant="outlined" color="primary">
                            Save
                        </Button>

                        {/*word placeholder*/}

                        <Snackbar
                            style={{position: "relative", left: "0", top: "5px", right: "0", transform: "none"}}
                            open={open}
                            onClose={handleClose}
                            message="I love snacks"
                            key="TransitionLeft"
                        />
                    </div>

                </div>
            </Paper>


            <Paper elevation={3} style={{padding: "10px", height: "150px"}}>

                {React.createElement(Chip)}
                <Chip color="primary" label="Basic"/>
            </Paper>


        </div>
    )
}

export default PageThree;
