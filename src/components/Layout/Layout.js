import React, { Component }  from "react";
import Aux from "../../hoc/Auxillary";
import './Layout.css'
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer : false
        });
    }

    ToggleSlideBar = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
            <ToolBar clicked = {this.ToggleSlideBar}/>
            <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
            <main className = 'Content'>
                {this.props.children}
            </main></Aux>
        );
    }
};


export default Layout