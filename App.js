import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers'
import Home from './screens/Home'
import Cities from './screens/Cities';
import Footer from './components/Footer'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const reduxStore= configureStore({reducer: mainReducer})
export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
      <Provider store={reduxStore}>
        {/* <Home/> */}
        <Cities/>
      </Provider>
    </SafeAreaView>
  );
}
