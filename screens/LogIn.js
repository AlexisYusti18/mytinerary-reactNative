import { useState } from "react";
import { View,StyleSheet, ImageBackground,TextInput,Dimensions,Text,TouchableOpacity, Button } from "react-native";
import userActions from "../redux/actions/usersActions";
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';
const {width,height}= Dimensions.get('window')


function LogIn(props){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const user=useSelector(store=>store.userReducer.user)
    
    const handleSubmit=()=>{
        const logInUser= {
            email: email,
            password: password,
        }
        props.logIn(logInUser)
        // console.log(logInUser)
    }

    
    return(
        <View>
            <ImageBackground style={styles.bg} source={require('../assets/fondo.jpg')}>
                <View style={[styles.container, {backgroundColor:'rgba(255,255,255)'}]}>
                    <View style={styles.inputContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.h1}>Welcome!</Text>
                            <Text>Do not you have an account yet?</Text>
                            <TouchableOpacity
                            onPress={()=>{
                                    props.navigation.navigate('SignUp')
                            }}>
                                <Text style={styles.buttonLogin}>create one now!</Text>
                            </TouchableOpacity>
                    </View>
                            <TextInput onChangeText={setEmail} style={styles.textInput} placeholder="Email" placeholderTextColor={'white'} color={'white'}></TextInput>
                            <TextInput onChangeText={setPassword} style={styles.textInput}  placeholder="Password" placeholderTextColor={'white'} color={'white'}></TextInput>
                            <Button
                                onPress={handleSubmit}
                                title="log in"
                                color='#957b41'
                            />
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}
const mapDispatchToProps= {logIn: userActions.logIn}
export default connect(null, mapDispatchToProps)(LogIn)


const styles=StyleSheet.create({
    bg:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover'
    },
    container:{
        paddingHorizontal:20,
        paddingVertical:80,
        height:height/1.05,
    },
    centralHeaderItem:{
        flex:0.7,
        textAlign:'center'
    },
    h1:{
        fontSize:40,
        fontWeight:"500",
    },
    inputContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    textInput:{
        width:width/1.15,
        borderBottomWidth:2,
        borderBottomColorl:'#aaa',
        padding:10,
        marginVertical:20,
    },
    buttonLogin:{
        color:"white",
        fontSize:20,
        textDecorationLine:'underline'
    }
    
})