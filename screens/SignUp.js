import { useState } from 'react';
import { View,StyleSheet, ImageBackground,TextInput, Image,Text,TouchableOpacity,Button } from "react-native";
import userActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';


function SignUp(props){
    const roles= ["Select rol", "user"]
    const countrys= ["unselected","Argentina", "Uruguay","Chile","Bolivia","Peru","Brazil","Colombia","Venezuela","Paraguay","Ecuador"]
    const[selectCountry, setSelectCountry]= useState("unselected")

    const selected=(event)=>{
        //console.log(event.target.value)
        setSelectCountry(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const userData ={
          name:event.target[2].value,
          lastName:event.target[3].value,
          email:event.target[4].value,
          password:event.target[5].value,
          imageUser:event.target[6].value,
          role:event.target[7].value,
          from:'signUp',
          country:selectCountry
        }
        event.target.reset()
        //console.log(event);
        props.signUp(userData)
        //console.log(userData);
      }


    return(
        <View>
            <ImageBackground style={styles.ctn} source={require('../assets/signup.png')}>
                <View style={styles.inputCnt}>
                    <Image style={styles.logo} source={require('../assets/logoSignup.png')}/>
                    <Text>Sign up</Text>
                    <Text>Do you already have an account?</Text>
                    <TouchableOpacity
                     onPress={()=>{
                        props.navigation.navigate('LogIn')
                    }}>
                         <Text style={styles.buttonLogin}>LogIn</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput} placeholder='Name'></TextInput>
                    <TextInput style={styles.textInput} placeholder='LastName'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Password'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Profile Pic'></TextInput>
                    <Button
                            title="Create Acount"
                            color='#1a2221'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
const mapDispatchToProps= {
    signUp: userActions.signUp
  }
export default connect(null, mapDispatchToProps)(SignUp)


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
        height:600,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:60,
        height:60
    },
    buttonLogin:{
        backgroundColor:'#1a2221',
        padding:6,
        borderRadius:10,
        color:'white',
        marginBottom:4,
        marginTop:5
    },
    textInput:{
        height:40,
        width:300,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20,
        borderRadius:10,
        padding:10
    }
})