import React, {useState} from "react";
import {Text,View, StyleSheet,Pressable,TouchableOpacity,Image} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from "../redux/actions/citiesActions"
import commentsActions from "../redux/actions/commentsActions";
import { MaterialIcons } from '@expo/vector-icons';

export default function Tinerary({itinerary,setReload}){
    const dispatch= useDispatch()
    const [text, setText]=useState('')
    const user=useSelector(store=>store.userReducer.user)
    
    async function likeOrDislike(idItinerario){
        //console.log(idItinerario)
        await dispatch(citiesActions.likeAndDislike(idItinerario))
        setReload(R=>!R)
    }
    
    async function addComment(id){
        const data={
            itineraryId:id,
            comments:text
        }
        await dispatch(commentsActions.addComment(data))
        setReload(R=>!R)
        setText("")
    }



    return(
    <>
        <View style={styles.card}>
            <View>
                <View>
                    <Text>{itinerary.title}</Text>
                </View>
                <View>
                    {user ?
                        <>
                            <Pressable onPress={()=>likeOrDislike(itinerary._id)}>
                                {itinerary.likes?.includes(user.id) ?(
                                    <View style={{color:'red'}}>
                                        <MaterialIcons id={itinerary._id} name="favorite" size={24} color="red"/>
                                    </View>)
                                        :(
                                            <View style={{color:'red'}}>
                                                <MaterialIcons id={itinerary._id} name="favorite-border" size={24} color="red"/>
                                            </View>
                                        )
                                    }
                                        {itinerary?.likes.length}
                            </Pressable>
                        </>
                        :
                            <Pressable>
                                <MaterialIcons name="favorite-border" size={24} color="red"/>
                                <Text>{itinerary.likes.length}</Text>
                            </Pressable>
                    }
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text>{itinerary.name}</Text>
                    <Image source={{uri:itinerary.userimage}} style={styles.imageUser}/>
                </View>
                <Text>Price:</Text>
                    <>
                        {Array(itinerary.price).fill().map((index,price)=>(
                            <Image key={price} style={styles.dolarImg} source={require('../assets/dolar.png')}/>))}
                    </>
                <View>
                    <Text>Duration: {itinerary.time}hs</Text>
                </View>
                <View>
                    <Text>#{itinerary.tag} #{itinerary.tag2} #{itinerary.tag3}</Text>
                </View>
                <TouchableOpacity
                onPress={()=>{}}
                style={styles.accordeonCtn}
                activeOpacity={0.9}
                >
                    <View style={[styles.accordeon]}>
                        <Text style={[styles.heading]}>VER MAS</Text>
                    </View>
                </TouchableOpacity>
            </View>
               
        </View>
    </>
    )
}

const styles= StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        borderRadius:20,
        width:'80%',
        height:340,
        margin: 10,
        borderColor:'#212121',
        borderWidth:2
    },
    imageUser:{
        width:60,
        height:60,
        borderRadius:50,
    },
    dolarImg:{
        width:50,
        height:50
    },
    accordeonCtn:{

    },
})