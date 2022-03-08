import React from "react"

import Burger from '../../Burger/Burger';
import './CheckOutSummary.css'
import Button from "../../UI/Modal/Button/Button";
const CheckoutSummary = (props) => {

    return (
        <div className = "CheckOutSummary">
            
            <h1>
                We hope it tastes well
            </h1>
            <div style = {{width: '100%', margin: 'auto'}}>
            <Burger ingredients = {props.ingredients}/>
            </div>
            <Button click = {props.checkoutCancelled} btnType = "Danger">CANCEL</Button>
            <Button btnType = "Danger" click = {props.CheckoutContinued}>CONTINUE</Button>
        </div> 
    );


}


export default CheckoutSummary