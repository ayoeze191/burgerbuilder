import React, {Component, createRef} from 'react';
import { connect } from 'react-redux';
import Input from './Input/Input';
import './ContactData.css'
import Button from '../../../components/UI/Modal/Button/Button';
import axios from 'axios';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type : 'text',
                    placeholder : 'Your Name'
                },
                value: '',
                validation :{
                    required: true
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type : 'text',
                    placeholder : 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type : 'text',
                    placeholder : 'ZIP CODE'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type : 'text',
                    placeholder : 'Enter Country'
                },
                value: '',
                validation: {
                    required: true,
                    
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type : 'text',
                    placeholder : 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'fastest', disPlayValue: 'Fastest'},
                    {value: 'cheapest', disPlayValue: 'Cheapest'},]
                },
                value: ''
            }    
        },
        loading: false
    }

   
    checkValidatity = (value, rules) => {
        let isValid = true;
        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
       
        if(rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }
        // console.log(isValid)
        // console.log(isValid)
        return isValid;
    }
    // form = createRef(null)
    inputChangeHandler = (event, inputIdentifier) => {
        let newState = {...this.state.orderForm}
        
        const newElement = this.state.orderForm[inputIdentifier]
        newElement.value = event.target.value
        if (newElement.validation){
            newElement.valid = this.checkValidatity(newElement.value, newElement.validation)
        }
        newElement.touched = true;
        // console.log(newElement.valid)
        newState[inputIdentifier] = newElement
        // console.log(newState)
        this.setState({
            newState
        })
    }

    orderHandler = (e) => {
        e.preventDefault()
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        console.log(order)
        axios.post('./orders.json', order)
        .then(response => {
            this.setState( {
                loading:  false
            } );
            this.props.history.push('/')
        })
        .catch( error => {
            this.setState({
                loading : false
            })
        })
    }

   
    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
                formElementArray.push({
                    id: key,
                    ...this.state.orderForm[key]
                })
            }
            const validationArray = []
            for(let isValid in this.state.orderForm){
                validationArray.push(this.state.orderForm[isValid].valid)
            }
            validationArray.pop()
            const disable = validationArray.reduce((init, values)=> {
                return init = values == true && init
            }, true)
           
        return (
            <div className = "ContactData">
                Enter Your Contact Data
                <form onSubmit = {this.orderHandler}> 
                    {formElementArray.map((formElement) => (
                        <Input   key = {formElement.id}
                         validation = {formElement.validation}
                          invalid={!formElement.valid}
                           elementType = {formElement.elementType} 
                            elementConfig = {formElement.elementConfig}
                        value = {formElement.value}
                        shouldValidate = {formElement.validation != ''}
                        changed = {(event) => this.inputChangeHandler(event, formElement.id)}
                        touched = {formElement.touched}/>
                    ))}
                    <Button disabled = {!disable} btnType = "Sucess">Order</Button>
                </form>
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

export default connect(mapStateToProps)(ContactData)