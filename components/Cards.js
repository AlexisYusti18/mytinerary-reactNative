import React, {useEffect,useState} from "react"
import {StyleSheet,ImageBackground,View,Text} from "react-native";

import citiesActions from "../redux/actions/citiesActions"

import {useDispatch, useSelector} from 'react-redux';
import { Searchbar } from 'react-native-paper';

export default function Cards(){
    const dispatch=useDispatch()
    const [searchb, setSearchb] = useState("")

    useEffect(()=>{
        dispatch(citiesActions.getAllCities())
    },[])
    // const cities= useSelector(store=> store.citiesReducer.cities)

    const search=(e)=>{
        dispatch(citiesActions.filterCities(e))
        //console.log(e.target.value);
    }
    const filter=useSelector(store=>store.citiesReducer.filterCities)


    return(
        <View>
            <View>
                <Searchbar onChangeText={search} style={styles.search}/>
            </View>
            <View style={styles.citiesCtn}>
            {filter.length > 0 ? filter.map((city,index)=>(
                <View key={index}>
                    <ImageBackground style={styles.cards} source={{uri:city.image}}>
                        <Text style={styles.titleCities}>{city.name}, {city.country}</Text>
                    </ImageBackground>
                </View>
            )) : 
                <View>
                    <Text>THERE ARE NO RESULTS FOR YOUR SEARCH</Text>
                </View>
            }
        </View>
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
    search:{
        padding:10,
        borderColor:'black',
    }
})