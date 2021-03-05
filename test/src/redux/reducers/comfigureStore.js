import {createStore} from "redux"
import rootReducer from "./index"

export default function comfigureStore(){
    return createStore(rootReducer)
}