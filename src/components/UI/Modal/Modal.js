import React from "react";
import './Modal.css'
import { Component } from "react";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "./BackDrop/BackDrop";
class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) {
            return true
        }
    }

    componentDidUpdate() {
        console.log('[Modal] WillUpdate')
    }
    render() {
        return(
            <Aux>
        <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
    <div className = "Modal"
    style = {{transform: this.props.show?'translateY(0)':'translateY(-100vh)', opacity: this.props.show?'1':'0'}}>
        {this.props.children}
    </div>
    </Aux>
        )
    }
}

export default Modal