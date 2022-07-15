import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers'
import DrawerNavigation from './navigation/Drawer';
import { NavigationContainer } from "@react-navigation/native"

const reduxStore= configureStore({reducer: mainReducer})
export default function App() {
  return (
      <Provider store={reduxStore}>
          <NavigationContainer>
            <DrawerNavigation/>
          </NavigationContainer>
      </Provider>
  );
}
