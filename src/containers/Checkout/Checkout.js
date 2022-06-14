import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
class Checkout extends Component{
    
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data")
        // changing Feature branch
    }
  

    render() {
        return (
            <div>
                
                <CheckoutSummary 
                ingredients ={this.props.ings}
                checkoutCancelled = {this.checkoutCancelledHandler}
                CheckoutContinued = {this.checkoutContinuedHandler} 
                />
                {/* {con} */}
                <Route 
                 path = {this.props.match.url + '/contact-data'} 
                 render = {() => (
                     <ContactData ingredients = {this.props.ings} price = {this.props.price}/>
                 )}/>
                 {/* <ContactData /> */}
                {/* <Route path = '/ezekiel' component = {ContactData}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);