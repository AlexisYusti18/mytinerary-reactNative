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
                    <View>
                        <Image style={styles.imageUser} source={{uri:comment.userId.imageUser}}/>
                        <Text>{comment.userId.name}, {comment.userId.lastName}</Text>
                    </View>
                    <View>
                        <TextInput onTextInput={(e)=> setModify(e.currentTarget.textContent)} style={styles.inputCtn}>{comment.comment}</TextInput>
                        <View>
                            <Pressable onPress={()=>modifyComment(comment._id)}>
                                <Entypo name="edit" size={35} color="green" />
                            </Pressable>
                            <Pressable onPress={()=>deleteComment(comment._id)}>
                                <AntDesign name="delete" size={35} color="red" />
                            </Pressable>
                        </View>
                    </View>
                </View>
                :
                <View>
                    <View>
                        <Image style={styles.imageUser} source={{uri:comment.userId.imageUser}}/>
                        <Text>{comment.userId.name}, {comment.userId.lastName}</Text>
                    </View>
                    <View>
                        <Text>hola</Text>
                    </View>
                </View>
                
                }
        </>
    )
}

const styles=StyleSheet.create({
    inputCtn:{
        backgroundColor:'gray',
        margin:20
    },
    imageUser:{
        borderRadius:50,
        height:50,
        width:50
    }
})