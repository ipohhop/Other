// outer
import TextField from '@material-ui/core/TextField/TextField';
import React, {FunctionComponent} from 'react';


//local


interface OwnProps {
    // placeholder:(value:string)=>void
    setMultilineValue: React.Dispatch<React.SetStateAction<string>>
}

type Props = OwnProps;

const Multiline: FunctionComponent<Props> = ({setMultilineValue}) => {


    return (
        <>
            <TextField
                style={{width: "100%"}}
                id="outlined-multiline-static"
                label="Multiline"
                defaultValue="<span> abed </span>"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => setMultilineValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.charCode === 32) {
                        console.log("пробел клац клац")
                    }
                }}
            />


            {/*<div*/}


            {/*    onKeyPress={(e) => {*/}
            {/*        console.log(e.target)*/}
            {/*        if (e.charCode === 32) {*/}
            {/*            console.log("пробел клац клац")*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    style={{width: "100%"}}*/}
            {/*    contentEditable={true}>*/}
            {/*    asdasd*/}
            {/*</div>*/}

        </>
    );
};

export default Multiline;
