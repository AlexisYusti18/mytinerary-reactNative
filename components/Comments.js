import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import commentsActions from '../redux/actions/commentsActions';
import { Text, View,Image,TextInput,StyleSheet,Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Comments({comment, setReload}){
    const dispatch= useDispatch()
    const [modify,setModify]=useState()
    const user=useSelector(store=>store.userReducer.user)

    async function modifyComment(id){
        const commentModify={
            commentId:id,
            comment:modify
        }
        await dispatch(commentsActions.modifyComment(commentModify))
        setReload(R=>!R)
    }

    async function deleteComment(id){
        await dispatch(commentsActions.deleteComment(id))
        setReload(R=>!R)
    }

    return(
        <>
            {comment.userId?._id !== user?.id ?
                <View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Image style={styles.imageUser} source={{uri:comment.userId.imageUser}}/>
                        <Text style={{fontSize:20}}>{comment.userId.name}, {comment.userId.lastName}</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.commentText}>{comment.comment}</Text>
                    </View>
                </View>:
                        <View>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image style={styles.imageUser} source={{uri:comment.userId.imageUser}}/>
                                <Text style={{fontSize:20, textAlign:'center', margin:5}}>{comment.userId.name}, {comment.userId.lastName}</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <TextInput style={styles.campText} onTextInput={(e)=>setModify(e.currentTarget.textContent)}>{comment.comment}</TextInput>
                                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', margin:15}}>
                                    <Pressable onPress={()=>modifyComment(comment._id)}>
                                        <Entypo style={{margin:10}} name="edit" size={24} color="green" />
                                    </Pressable>
                                    <Pressable onPress={()=>deleteComment(comment._id)}>
                                        <AntDesign style={{margin:10}} name="delete" size={24} color="red"/>
                                    </Pressable>
                                </View>
                            </View>
                           
                        </View>
                
                }
        </>
    )
}

const styles=StyleSheet.create({
    inputCtn:{
        backgroundColor:'#fff',
        margin:20,
        borderColor:'black',
        borderWidth:1,
        padding:15,
        color:'black',
    },
    imageUser:{
        borderRadius:50,
        height:50,
        width:50
    },
    commentText:{
        backgroundColor:'#848484',
        width:'95%',
        height:40,
        padding:10,
        marginTop:10,
        marginBottom:10
    },
    campText:{
        backgroundColor:'#c6c6c6',
        padding:10,
        width:'90%'
    }
})