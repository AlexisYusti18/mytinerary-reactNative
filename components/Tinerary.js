import React, {useState} from "react";
import {Text,View, StyleSheet,Pressable,TouchableOpacity,Image,Button,ScrollView,TextInput, Alert } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from "../redux/actions/citiesActions"
import commentsActions from "../redux/actions/commentsActions";
import { MaterialIcons } from '@expo/vector-icons';
import Activities from "../components/Activities";
import Comments from '../components/Comments'

export default function Tinerary({itinerary,setReload,navigation}){
    // console.log(navigation)
    const dispatch= useDispatch()
    const [text, setText]=useState('')
    const [open, setOpen] = useState(false)
    const user=useSelector(store=>store.userReducer.user)
    
    async function likeOrDislike(idItinerario){
        //console.log(idItinerario)
        await dispatch(citiesActions.likeAndDislike(idItinerario))
        setReload(R=>!R)
    }
    const alert=()=>{
        Alert.alert('YOU MUST LOG IN TO LEAVE YOUR LIKE')
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
                    <Text style={{textAlign:'center', fontSize:30}}>{itinerary.title}</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={{uri:itinerary.userimage}} style={styles.imageUser}/>
                    <Text style={{fontSize:18}}>{itinerary.name}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:18}}>Price:</Text>
                    <View style={{flexDirection:'row'}}>
                        {Array(itinerary.price).fill().map((index,price)=>(
                            <Image key={price} style={styles.dolarImg} source={require('../assets/dolar.png')}/>))}
                    </View>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:18}}>Duration: {itinerary.time}hs</Text>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:18}}>#{itinerary.tag} #{itinerary.tag2} #{itinerary.tag3}</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:'center'}}>
                    {user ?
                        <>
                            <Pressable onPress={()=>likeOrDislike(itinerary._id)}>
                                {itinerary.likes?.includes(user.id) ?(
                                    <View style={{color:'red'}}>
                                        <MaterialIcons id={itinerary._id} name="favorite" size={35} color="red"/>
                                    </View>)
                                        :(
                                            <View style={{color:'red'}}>
                                                <MaterialIcons id={itinerary._id} name="favorite-border" size={35} color="red"/>
                                            </View>
                                        )
                                    }
                                       <Text style={{fontSize:18}}>{itinerary?.likes.length}</Text>
                            </Pressable>
                        </>
                        :
                            <Pressable onPress={alert}>
                                <MaterialIcons name="favorite-border" size={35} color="red"/>
                                <Text style={{fontSize:18}}>{itinerary.likes.length}</Text>
                            </Pressable>
                    }
                </View>
                    <Text style={{textAlign:'center', marginTop:20, fontSize:30}}>Activities !</Text>
                <View style={styles.activitiesCtn}>
                    {itinerary.activities?.length > 0 ? itinerary.activities?.map((activity,index)=>
                        <Activities activity={activity} key={activity._id}/>
                    ): <Text>THIS ITINERARY HAS NO ACTIVITIES YET</Text>}
                </View>

                <View>
                    <Text style={{textAlign:'center', fontSize:20, marginTop:20}}>COMMENTS({itinerary.comments.length})!</Text>
                    {itinerary?.comments.map((comment)=>
                        <Comments comment={comment} key={comment._id} setReload={setReload}/>
                    )}

                    {user ? 
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TextInput style={styles.inputTEXT} onTextInput={(e)=>setText(e.currentTarget.textContent)}></TextInput>
                            <Pressable onPress={()=>addComment(itinerary._id)}>
                                <Text style={styles.buttonComment}>comment</Text>
                            </Pressable>
                        </View>
                    
                    :     
                        <Text style={{textAlign:'center', fontSize:20, marginTop:30, color:'#3a6d66'}}>YOU MUST LOGIN TO COMMENT !</Text>
                    }
                </View>
            </View>
               
        </View>
    </>
    )
}

const styles= StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        position:'relative',
        marginTop:40,
        overflow:'hidden',
        borderRadius:20,
        width:'97%',
        height:1200,
        margin: 10,
        borderColor:'#212121',
        borderWidth:1
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
    accordeon:{
        width:'100%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    viewmore:{
        padding:10,
        margin:4,
        backgroundColor:'white'
    },
    inputTEXT:{
        padding:10,
        backgroundColor:'#c6c6c6',
        width:'80%',
        marginTop:20
    },
    buttonComment:{
        color:'white',
        width:80,
        backgroundColor:'black',
        marginTop:10,
        padding:9,
        textAlign:'center'
    },
    activitiesCtn:{
        flexDirection:"row-reverse",
        justifyContent:'center',
        alignItems:'center'
    }
})