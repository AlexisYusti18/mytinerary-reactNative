import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import commentsActions from '../redux/actions/commentsActions';
import { Text, View,Image } from 'react-native';

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
                        <Image source={{uri:comment.userId.imageUser}}/>
                        <Text>{comment.userId.name}, {comment.userId.lastName}</Text>
                    </View>
                    <View>
                        <Text>{comment.comment}</Text>
                    </View>
                </View>
                :
                <View>
                    <View>
                        <Image source={{uri:comment.userId.imageUser}}/>
                        <Text>{comment.userId.name}, {comment.userId.lastName}</Text>
                    </View>
                    <View>
                        <View>.</View>
                    </View>
                </View>
                
                }
        </>
    )




}