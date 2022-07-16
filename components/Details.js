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
    // console.log(city)r
    
    return(
        <ScrollView>
            <View>
                <ImageBackground style={styles.image} source={{uri:city.image}}>
                    <View style={{width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.3)'}}></View>
                    <View style={styles.textView}>
                        <Text style={styles.title}>{city.name}</Text>
                        <Text style={styles.country}>{city.country}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.dataCtn}>
                    <View>
                        <Image style={styles.banner} source={{uri:city.imagebanner}}/>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="cash-multiple" size={30} color="green"/>
                        <Text>{city.currency}</Text>
                    </View>
                    <View>
                        <FontAwesome name="language" size={30} color="blue" />
                        <Text>{city.language}</Text>
                    </View>
                </View>  
            </View>

            <View style={styles.itinerariesCtn}>
                {city.itineraries?.length > 0 ?  city.itineraries?.map((itinerary,index)=>
                    <Tinerary itinerary={itinerary} key={itinerary._id} setReload={setReload} navigation={props.navigation}/>
                ): <Text>THERE ARE NO ITINERARIES</Text>}
            </View>

        </ScrollView>
    )
}

const styles= StyleSheet.create({
    image:{
        width:'100%',
        height:420,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover',
    },
    title:{
        fontSize:40,
        color:'#fff',
    },
    country:{
        fontSize:20,
        color:'#aaa',
        marginLeft:10
    },
    textView:{
        position:'absolute',
        bottom:10,
        left:10
    },
    dataCtn:{
        backgroundColor:'#fff',
        width:'100%',
        height:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    banner:{
        width:70,
        height:40,
        borderWidth:.6,
        borderColor:'black'
    },
    itinerariesCtn:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
})