import { ActionTypes } from "../constants/action";

export const userLogin=(data)=>{
    return {
        type:ActionTypes.LOGIN,
        payload:data
    }
}

export const addProduct=(data)=>{
    return{
        type:ActionTypes.ADD_PRODUCT,
        payload:data
    }
}