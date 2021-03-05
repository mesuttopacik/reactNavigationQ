import * as actionsTypes from '../actions/actionTypes'
import initialState from './initialState';


export default function changeTestReducer(state=initialState.currentTest,action){
    switch (action.types) {
        case actionsTypes.CHANGE_TEST:
            
            return action.payload
    
        default:
            return state;
    }
}