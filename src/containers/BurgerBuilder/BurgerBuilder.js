import {React, Component } from "react";
import * as actionTypes from '../../Store/action/actiontype'
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import Modal from '../../components/UI/Modal/Modal';
import { connect } from "react-redux";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import axios from 'axios'

class BurgerBuilder extends Component{
    state = {
        // totalPrice: 0,
        purchaseable: false,
        showModal: false,
        error: false,
        loading: false
    }

    show = () => {
        const Currentmodal = this.state.showModal
        this.setState({
            showModal: !Currentmodal
        })
    }
    updatePurchaseState(ingredients) {
        const sum = Object.values(ingredients)
        .reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum > 0;
    }


    componentDidUpdate() {
        // this.updatePurchaseState()
        console.log(this.props.ings)
    }
    // INGREDIENT_PRICES = {
    //     salad: 0.5,
    //     cheese : 0.4,
    //     meat : 1.3,
    //     bacon : 0.7
    // }
    addIngredientHandler = (type) => {

        const oldCount = this.props.ings[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredient = {...this.props.ings}
        updatedIngredient[type] = updatedCounted
        console.log(updatedIngredient)
        const priceAddition = this.INGREDIENT_PRICES[type];
        const oldPrice = this.props.price;
        const newPrice = oldPrice + priceAddition
        this.setState ({
            ingredients: updatedIngredient,
            totalPrice: newPrice
        })
        
        this.updatePurchaseState(updatedIngredient);
        // console.log(this.state)
    }

    removerIngredientHandler = (type, e) => {
       const oldCount = this.props.ings[type];
        const updatedCounted = oldCount - 1
        const updatedIngredient = {...this.props.ings}
        updatedIngredient[type] = updatedCounted
        const goodsPrice = this.INGREDIENT_PRICES[type]
        const oldTotalPrice = this.state.totalPrice
        const updatedPrice = oldTotalPrice - goodsPrice
        this.setState({
            ingredients: updatedIngredient,
            totalPrice: updatedPrice
        })
        this.updatePurchaseState(updatedIngredient);
        }
        
        purchaseCancelHandler = () => {
            this.setState({
            showModal : false
            })
        }
      
       
        purchaseCountinueHandler = () => {
            this.props.history.push({
                pathname: '/checkout'})
        }

      
        
render() {

    const disabledInfo = {
        ...this.props.ings
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
        <Aux>
           
            <Modal show = {this.state.showModal} modalClosed = {this.purchaseCancelHandler}> 
            <OrderSummary ingredients = {this.props.ings} purchaseCanceled = {this.purchaseCancelHandler} purchaseContinued = {this.purchaseCountinueHandler} totalPrice = {this.props.price}/>
            </Modal>
           <Burger ingredients = {this.props.ings} />
            <BuildControls ingredientAdded = {this.props.onIngredientAdded} ingredientRemoved = {this.props.onIngredientRemoved}
            disabled = {disabledInfo}
            purchaseable = {this.updatePurchaseState(this.props.ings)}
            price = {this.props.price} 
            showModal = {this.show}/>
        </Aux>
    );
}
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingname) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientsName: ingname}),
        onIngredientRemoved: (ingname) => dispatch({type: actionTypes.REMOVE_INGREDIENTS, ingredientsName: ingname})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);