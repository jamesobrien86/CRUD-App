// src/reducers/contact-reducer.js

const defaultState = {
    contacts:[]
}

export default (state=defaultState, action={}) => {
    switch (action.type){
        case 'FETCH_CONTACTS_FULFILLED':{
            return {
                ...state,
                contacts:action.payload.data || action.payload.data
            }
        }
        default:
            return state;
    }
}