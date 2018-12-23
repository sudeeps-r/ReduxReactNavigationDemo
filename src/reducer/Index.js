import { combineReducers } from 'redux'
import counterReducer from './CounterReducer'
const AppReducer = combineReducers({counterReducer})
export default AppReducer