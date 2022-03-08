import React from 'react'
import { Component } from 'react';
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Modal/Button/Button';
class OrderSummary extends Component {
    render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((igKey, index) => {
        return <li key = {index}><span>{igKey.toUpperCase()}</span>: {this.props.ingredients[igKey]}</li>
    });
    return (
        <Aux>
            <h3>
                Your Order
            </h3>
            <p>
                A delicious burger with the following ingredients;
            </p>

            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price: {this.props.totalPrice}</strong></p>
            <p>Continue to checkOut</p>
            <Button click = {this.props.purchaseCanceled} btnType = "Danger">CANCEL</Button>
            <Button click = {this.props.purchaseContinued} btnType = "Success">Continue</Button>
        </Aux>
    );
};};


export default OrderSummary