import { useState } from "react";
import { View,StyleSheet, ImageBackground,TextInput, Image,Text,TouchableOpacity, Button } from "react-native";
import userActions from "../redux/actions/usersActions";
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';


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
            <ImageBackground style={styles.ctn} source={require('../assets/signup.png')}>
                <View style={styles.inputCnt}>
                    <Image style={styles.logo} source={require('../assets/logoSignup.png')}/>
                    <Text>Log In with your account!</Text>
                    <View>
                        <View>
                            <TextInput onChangeText={setEmail} style={styles.textInput} placeholder="Email"></TextInput>
                            <TextInput onChangeText={setPassword} style={styles.textInput}  placeholder="Password"></TextInput>
                            <Button
                                onPress={handleSubmit}
                                title="log in"
                                color='#1a2221'
                            />
                        </View>
                        <View style={styles.accountCtn}>
                            <Text>Do not you have an account yet?</Text>
                            <TouchableOpacity
                            onPress={()=>{
                                    props.navigation.navigate('SignUp')
                            }}>
                                <Text style={styles.buttonSignup}>create one now!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}
const mapDispatchToProps= {logIn: userActions.logIn}
export default connect(null, mapDispatchToProps)(LogIn)


const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    inputCnt:{
        backgroundColor:'white',
        width:'90%',
        height:400,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:60,
        height:60
    },
    textInput:{
        height:40,
        width:300,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20,
        borderRadius:10,
        padding:10
    },
    accountCtn:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    buttonSignup:{
        backgroundColor:'#1a2221',
        padding:6,
        borderRadius:10,
        color:'white',
        marginBottom:4,
        marginTop:5
    }
})