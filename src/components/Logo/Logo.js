import React from "react";
import burgerLogo from '../../assets/images/burger-logo.png'
import './Logo.css'
const logo = (props) => (
    <div className = "Logo">
        {console.log(props.height)}
        <img src = {burgerLogo} alt = "MyBurger" height = {props.height} width = {`${props.width}%`}/>
    </div>
);

export default logo