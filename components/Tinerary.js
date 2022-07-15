import React, {useState} from "react";
import {Text,View, StyleSheet,Pressable,TouchableOpacity,Image,Button,ScrollView,TextInput } from "react-native";
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
                                       <Text>{itinerary?.likes.length}</Text>
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
                <View>
                    <Text>Activities !</Text>
                    {itinerary.activities?.length > 0 ? itinerary.activities?.map((activity,index)=>
                        <Activities activity={activity} key={activity._id}/>
                    ): <Text>no hay actividades</Text>}
                </View>

                <View>
                    <Text>COMMENTS({itinerary.comments.length})!</Text>
                    {itinerary?.comments.map((comment)=>
                        <Comments comment={comment} key={comment._id} setReload={setReload}/>
                    )}

                    {user ? 
                        <View>
                            <TextInput style={styles.inputTEXT} onTextInput={(e)=>setText(e.currentTarget.textContent)}></TextInput>
                            <Pressable onPress={()=>addComment(itinerary._id)}>
                                <Text style={styles.buttonComment}>comment</Text>
                            </Pressable>
                        </View>
                    
                    :     
                        <Text>INICIA SESION PARA COMENTAR</Text>
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
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        borderRadius:20,
        width:'93%',
        height:1000,
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
    accordeon:{
        width:'100%',
        backgroundColor:'red',
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
        backgroundColor:'red'
    },
    buttonComment:{
        padding:10,
        color:'white',
        width:80,
        backgroundColor:'orange',
        marginTop:10
    }
})