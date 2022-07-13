import React, {useEffect} from "react"
import {StyleSheet,ImageBackground, View,Text} from "react-native";
import citiesActions from "../redux/actions/citiesActions"
import {useDispatch, useSelector} from 'react-redux';

export default function Cards(){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(citiesActions.getAllCities())
    },[])
    const cities= useSelector(store=> store.citiesReducer.cities)

    return(
        <View style={styles.citiesCtn}>
            {cities?.map((city,index)=>(
                <View key={index}>
                    <ImageBackground style={styles.cards} source={{uri:city.image}}>
                        <Text style={styles.titleCities}>{city.name}</Text>
                    </ImageBackground>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    citiesCtn:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    cards:{
        height:300,
        width:350,
        justifyContent:'center',
        alignItems:'center',
        margin:20,
    },
    titleCities:{
        color:'white',
        fontSize:40,
    },
})