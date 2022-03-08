import * as actiontypes from '../action/actiontype'


export const ADD_INGREDIENTS = (ingname) =>{
    
        return {
            type: actiontypes.ADD_INGREDIENTS, 
            ingredientsName: ingname
        }
    
}

export const DELETE_INGREDIENTS = (ingname) => {
    return {
        type: actiontypes.REMOVE_INGREDIENTS,
        ingredientsName: ingname
    }
}