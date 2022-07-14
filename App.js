import React from 'react';
import {StatusBar, SafeAreaView,StyleSheet,View} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import DrawerNavigation from './navigation/DrawerNavigations';
import { NavigationContainer } from "@react-navigation/native"

const reduxStore= configureStore({reducer: mainReducer})
export default function App() {
  return (
    // <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
      <Provider store={reduxStore}>
          <NavigationContainer>
            <DrawerNavigation/>
          </NavigationContainer>
      </Provider>
    // </SafeAreaView>
  );
}
