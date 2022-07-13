import React from 'react';
import { StyleSheet,View} from 'react-native';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers'
import Home from './screens/Home'


const reduxStore= configureStore({reducer: mainReducer})
export default function App() {
  return (
    <Provider store={reduxStore}>
        <Home/>
    </Provider>
  );
}
