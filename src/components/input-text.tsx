import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

const InputText = (props: any) => {
    return (
        <Box component="form">
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            <Button variant="outlined">
                Add
            </Button>
        </Box>
    );
}

export default InputText;