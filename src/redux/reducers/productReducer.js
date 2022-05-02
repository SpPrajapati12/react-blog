import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [{
        id: 1,
        title: "Sp",
        category: 'Prpgrammer'
    }]
}


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }

}