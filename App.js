import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './src/redux/reducers/mainReducer';

import Home from './src/screens/Home'

const store=configureStore({reducer:mainReducer})

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color:'white',
    justifyContent: 'center',
  }
});
