import React from "react"
import { NavLink } from "react-router-dom"
import './NavigationItem.css'
const navigationItem = (props) => {
    return(
    <li className = 'NavigationItem'>
        <NavLink to = {props.Link}>{props.children}</NavLink>
        </li>)
}


export default navigationItem;