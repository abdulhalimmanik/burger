import * as actionTypes from './actionTypes'
import axios from '../../axios-order'

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-app-7520f.firebaseio.com/ingredients.json')
            .then(response => dispatch(setIngredients(response.data)))
            .catch(error => dispatch(fetchIngredientsFailed()))
    }
}