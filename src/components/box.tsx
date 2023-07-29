import React from 'react';
import "./box.css";
import InputText from "./input-text";

const Box = () => {

    console.log("Box");

    return (
        <div className="box">
            <h1>To-Do List</h1>
            <InputText/>

        </div>
    );
}

export default Box;