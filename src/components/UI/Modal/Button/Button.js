import React from "react";

import classes from './Button.css';

const button = (props) => (
    
    <button onClick = {props.click} className = {['Button', props.btnType].join(' ')} 
    disabled = {props.disabled}>{props.children}</button>
);


export default button;