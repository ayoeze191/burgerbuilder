import * as actiontypes from '../action/actiontype'

const initialState = {
    ingredients: {
        'salad': 0,
        'bacon': 0,
        'cheese': 0,
        'meat': 0
    },
    purchaseable: false,
    totalPrice: 0,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actiontypes.ADD_INGREDIENTS:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName]
        };

        case actiontypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1
                }
            };

        default:
            return state;
    }
    
}


export default reducer;