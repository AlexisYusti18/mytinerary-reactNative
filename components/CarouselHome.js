import React, { useEffect } from 'react';
import { StyleSheet,Text, View,ImageBackground,Dimensions,Image,FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

//DIMENSIONS=>PARA OBETENER LAS DIMENSAIONES DEL DISPOSITIVO=>APP 100% RESPONSIVE
const width= Dimensions.get('window').width
const height=Dimensions.get('window').height

export default function CarouselHome() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(citiesActions.getAllCities())
  },[])
  const cities= useSelector(store=> store.citiesReducer.cities)
  // console.log(cities)

  return (
    <View style={styles.carouselctn}>
        <FlatList
        data={cities}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop:200}}
        pagingEnabled
        renderItem={()=>{
          return(
            <>
              {cities.map((city,index)=>(
                <ImageBackground style={styles.imgcarousel} key={index} source={{uri:city.image}}>
                    <Text style={styles.titlecity}>{city.name}</Text>
                </ImageBackground>
              ))}
            </>
          )
        }}
        />
    </View> 
  );
}
const styles = StyleSheet.create({
  carouselctn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'

  },
  imgcarousel:{
    width:380,
    height:250,
    resizeMode:'cover',
    borderRadius:8,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover'
  },
  titlecity:{
    fontSize:30,
    color:'white',
    textShadowColor:'red',
  },
})
