import React, { useEffect,useLayoutEffect, useState } from "react";
import './BuildControl.css'

const BuildControl = (props) => {
    const[clas, setClas] = useState(null)
    useEffect(() => {
        const a = "ezekiel"
            // setClas((prev) => prev + 1)
            setClas(a)
        
        console.log("done")
    })

   

    return(
    <div className = 'BuildControl'>
        <div className = 'Label'>
            {props.label}
            
            {/* { clas.map((a) => {
        console.log("hello")
    })} */}
            {clas}
        </div>
        <button className = "Less" onClick = {props.removed} disabled = {props.disabled}>Less</button>
        <button className = "More" onClick = {props.added}>More</button>
    </div>)
}
export default BuildControl