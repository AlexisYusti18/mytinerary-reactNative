import { useState } from 'react';
import { View,StyleSheet,Picker,ImageBackground,TextInput,Image,Text,TouchableOpacity,Button, Dimensions} from "react-native";
import userActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
const {width,height}= Dimensions.get('window')


function SignUp(props){
    const roles= ["Select rol", "user"]
    const countrys= ["unselected","Argentina", "Uruguay","Chile","Bolivia","Peru","Brazil","Colombia","Venezuela","Paraguay","Ecuador"]
    const[selectCountry, setSelectCountry]= useState("unselected")
    
    const [name,setName]=useState()
    const [lastName,setLastName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [imageUser,setImageUser]=useState()

    const selected=(event)=>{
        //console.log(event.target.value)
        setSelectCountry(event.target.value)
    }
    const handleSubmit=()=>{
        const userData ={
          name:name,
          lastName:lastName,
          email:email,
          password:password,
          imageUser:imageUser,
          country:'argentina',
          role:'user',
          from:'signUp'
        }
        //console.log(event);
        props.signUp(userData)
        console.log(userData);
      }


    return(
        <View>
            <ImageBackground style={styles.bg} source={require('../assets/fondo.jpg')}>
                <View style={[styles.container, {backgroundColor:'rgba(255,255,255)'}]}>
                    <View style={styles.inputContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.h1}>Sign up</Text>
                            <Text>Do you already have an account?</Text>
                        </View>
                    <TouchableOpacity
                     onPress={()=>{
                        props.navigation.navigate('LogIn')
                    }}>
                         <Text style={styles.buttonLogin}>LogIn</Text>
                    </TouchableOpacity>
                    </View>
                    <TextInput onChangeText={setName} style={styles.textInput} placeholder={'Name'} placeholderTextColor={'white'} color={'white'}></TextInput>
                    <TextInput onChangeText={setLastName} style={styles.textInput} placeholder={'LastName'} placeholderTextColor={'white'} color={'white'}></TextInput>
                    <TextInput onChangeText={setEmail} style={styles.textInput} placeholder={'Email'} placeholderTextColor={'white'} color={'white'}></TextInput>
                    <TextInput onChangeText={setPassword} style={styles.textInput} placeholder={'Password'} placeholderTextColor={'white'} color={'white'}></TextInput>
                    <TextInput onChangeText={setImageUser} style={styles.textInput} placeholder={'Profile Pic'} placeholderTextColor={'white'} color={'white'}></TextInput>
                    <Button
                        onPress={handleSubmit}
                        title="Create Acount"
                        color='#957b41'
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