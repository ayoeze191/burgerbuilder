import React from "react";
import './ToolBar.css';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const toolBar = (props) => {
    return (
        <header className = 'Toolbar'>
           <div onClick = {props.clicked}>menu </div>
           <Logo height = "30"/>
            <nav className = "DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    )
}
export default toolBar 