import { useEffect,useState } from "react";
import {View,Text,ImageBackground,StyleSheet,Image,ScrollView} from "react-native"
import citiesActions from "../redux/actions/citiesActions"
import {useDispatch, useSelector} from 'react-redux';
import Tinerary from "../components/Tinerary";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function Details(props){
    // console.log(props)
    const {id}= props.route.params
    const dispatch= useDispatch()
    const [reload,setReload]=useState(false)
    
    useEffect(()=>{
        dispatch(citiesActions.getOneCity(id))
        //eslint-disable-next-line
    },[reload])
    const city=useSelector(store=> store.citiesReducer.oneCity)
    // console.log(city)
    
    return(
        <ScrollView>
            <View>
                <ImageBackground style={styles.image} source={{uri:city.image}}>
                    <Text style={styles.title}>{city.name}, {city.country}</Text>
                </ImageBackground>
                <View style={styles.dataCtn}>
                    <View>
                        <Image style={styles.banner} source={{uri:city.imagebanner}}/>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="cash-multiple" size={30} color="black"/>
                        <Text>{city.currency}</Text>
                    </View>
                    <View>
                        <FontAwesome name="language" size={30} color="black" />
                        <Text>{city.language}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.itinerariesCtn}>
                {city.itineraries?.length > 0 ?  city.itineraries?.map((itinerary,index)=>
                    <Tinerary itinerary={itinerary} key={itinerary._id} setReload={setReload} />
                ): <Text>THERE ARE NO ITINERARIES</Text>}
            </View>

        </ScrollView>
    )
}

const styles= StyleSheet.create({
    image:{
        width:'100%',
        height:300,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:40,
        color:'#1a2221',
        fontWeight:'600'
    },
    dataCtn:{
        backgroundColor:'#2352',
        width:'100%',
        height:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    banner:{
        width:40,
        height:40
    },
    itinerariesCtn:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:"red"
    },
})