import React from "react";
import  './Input.css'
const Input = (props) => {
    let inputElement = null;
    const inputClasses = ['inputElement'];


    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid')
    }
    switch ( props.elementType ){
        case('input'):
            inputElement = <input 
            className = 'InputElement' 
            {...props.elementConfig} 
            value = {props.value} className={inputClasses.join(' ')} onChange = {props.changed} required = {props.validation}/>
        break;
        case('textarea'):
            inputElement = <textarea  
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value = {props.value} onChange = {props.changed} />
        break;
        case('select'):
        inputElement = (
            <select className= "inputElement"
            value={props.value} onChange = {props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key = {option.value} value = {option.value}>
                        {option.disPlayValue}
                    </option>
                ))}
            </select>
        );
        break
        default:
            inputElement = <input 
            className = 'InputElement' 
            {...props.elementConfig} 
            value = {props.value} onChange = {props.changed}/>
    }


    return (
        <div className = 'Input'>
            <label className = "Label">{props.label}</label>
            {inputElement}
        </div>
    )

}

export default Input