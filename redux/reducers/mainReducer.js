import {combineReducers} from 'redux'
import citiesReducer from '../reducers/citiesReducer';
import userReducer from '../reducers/userReducer'

const mainReducer= combineReducers({
    citiesReducer, userReducer
})
export default mainReducer