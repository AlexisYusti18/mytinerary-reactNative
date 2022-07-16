import React, {useEffect,useState} from "react"
import {StyleSheet,TouchableOpacity,View,Text,Image,Dimensions,ScrollView} from "react-native";
import citiesActions from "../redux/actions/citiesActions"
const {width,height}= Dimensions.get('window')
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
        <ScrollView>
            <View style={styles.ctnSearch}>
                <Searchbar 
                placeholderTextColor={'gray'}
                placeholder={'Search'}
                onChangeText={search} style={styles.search}/>
            </View>
            <View style={styles.imageContainer}>
                {filter.length > 0 ? filter.map((city,index)=>(
                <View key={index} style={styles.imageView}>
                        <Image source={{uri:city.image}} style={styles.image}/>
                        <TouchableOpacity style={styles.imageButton} onPress={()=>props.navigation.navigate("Details", {id:city._id})}>
                            <Text style={styles.title}>{city.name}</Text>
                        </TouchableOpacity>
                </View>

                )): <Text>THE CITY YOU ARE LOOKING FOR IS NOT FOUND</Text>}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ctnSearch:{
        justifyContent:'center',
        alignItems:'center',
        height:100,
        marginLeft:15,
    },
    search:{
        width:300,
        padding:2,
        borderColor:'gray',
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset:{
            width:2,
            height:4,
        },
        shadowOpacity:0.5,
        shadowRadius:1.3
    },
    imageContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:30,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    imageView:{
        width:width/2.3,
        height:height/3.1,
        marginHorizontal:10,
        flexDirection:'column',
        margin:10
    },
    image:{
      width:'100%',
      height:'100%',
      borderRadius:20 
    },
    imageButton:{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'30%',
        bottom:0,
        left:0,
        position:'absolute',
        borderRadius:10,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },  
})