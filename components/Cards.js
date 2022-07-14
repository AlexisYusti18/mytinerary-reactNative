import React, {useEffect,useState} from "react"
import {StyleSheet,ImageBackground,View,Text,TouchableHighlight} from "react-native";

import citiesActions from "../redux/actions/citiesActions"

import {useDispatch, useSelector} from 'react-redux';
import { Searchbar } from 'react-native-paper';

export default function Cards(props){
    // console.log('props cards')
    // console.log(props)
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
            <View style={styles.ctnSearch}>
                <Searchbar 
                placeholderTextColor={'gray'}
                placeholder={'search cities'}
                onChangeText={search} style={styles.search}/>
            </View>
            <View style={styles.citiesCtn}>
            {filter.length > 0 ? filter.map((city,index)=>(
                <View key={index}>
                    <TouchableHighlight onPress={()=>props.navigation.navigate("itineraries", {id:city._id})}>
                        <ImageBackground style={styles.cards} source={{uri:city.image}}>
                            <Text style={styles.titleCities}>{city.name}, {city.country}</Text>
                        </ImageBackground>
                    </TouchableHighlight>
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
    ctnSearch:{
        justifyContent:'center',
        alignItems:'center',
        height:100
    },
    citiesCtn:{
        backgroundColor:'#1a2221',
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
        width:300,
        padding:2,
        borderColor:'gray',
        borderWidth:2,
        borderStyle:'solid'
    }
})