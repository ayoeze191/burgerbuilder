import React from "react";
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
const controls = [ 
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
const buildControls = (props) => (
    <div className = 'BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
        controls.map((control, index) => {
            return <BuildControl key = {control.label} label = {control.label}
            removed = {(e) => props.ingredientRemoved(control.type, e)} 
            added = {() => props.ingredientAdded( control.type)}
            disabled = {props.disabled[control.type]}/>
        })
        }
        <button className = "OrderButton" onClick = {props.showModal} disabled = {!props.purchaseable}>ORDER NOW</button>
    </div>
);


export default buildControls