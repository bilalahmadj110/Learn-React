import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {addNewTodo} from "../redux/actions";

const InputText = (props: any) => {

    const [inputText, setInputText] = useState<string>("");
    // dispatch
    const dispatch = useDispatch();

    console.log("InputText");

    return (
        <Box component="form">

            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                       onChange={(e) => {
                           setInputText(e.target.value);
                       }} value={inputText}/>

            <Button variant="outlined" onClick={() => {
                dispatch(addNewTodo(inputText));
                setInputText("");
            }}>
                Add
            </Button>
        </Box>
    );
}

export default InputText;