import React from "react" 
import './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem"
const navigationItems = () => {
    return(
    <ul className = 'NavigationsItems'>
        <NavigationItem Link = "/">
            BurgerBuilder
        </NavigationItem>
        <NavigationItem Link = "/">
            BurgerBuilder
        </NavigationItem>
    </ul>)
}


export default navigationItems
