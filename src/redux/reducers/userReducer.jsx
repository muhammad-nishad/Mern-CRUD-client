import { ActionTypes } from '../constants/action'
const initialState = {
    user: []

}
const initalProduct = {
    product: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export const productReducer = (state = initalProduct, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            return {...state,
                product:[...state.product,action.payload]
            }
        default:
            return state
    }
}
