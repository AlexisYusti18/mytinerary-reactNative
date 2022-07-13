import {combineReducers} from 'redux'
import citiesReducer from '../../redux/reducers/citiesReducers'
import userReducer from '../../redux/reducers/userReducers'

const mainReducer= combineReducers({
    citiesReducer, userReducer
})
export default mainReducer