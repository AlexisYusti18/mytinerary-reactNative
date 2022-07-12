import React from 'react';
import { StyleSheet,Text, View, FlatList,Image,Dimensions,SafeAreaView,Animated} from 'react-native';
import {useSelector} from 'react-redux';

//DIMENSIONS REPONSIVES
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export default function CarouselHome() {
    
    const cities= useSelector(store=> store.citiesReducer.cities)
    
  return (
    <>
     
    </>
  );
}
