import React from 'react';
import { StyleSheet,View} from 'react-native';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers'
import Home from './screens/Home'
import Cities from './screens/Cities';


const reduxStore= configureStore({reducer: mainReducer})
export default function App() {
  return (
    <Provider store={reduxStore}>
        {/* <Home/> */}
        <Cities/>
    </Provider>
  );
}
