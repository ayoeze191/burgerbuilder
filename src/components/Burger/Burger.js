import React from "react";
import {withRouter} from 'react-router-dom';
import './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    // console.log(props)

    let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
        
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient type = {igkey} key = {igkey + i} />;
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding ingredient</p>
    }
 
    return (
        <div className = 'Burger'>
            <BurgerIngredient type = "bread-top" />
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
}
export default withRouter(burger);