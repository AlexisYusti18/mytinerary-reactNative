import { useState } from 'react';
import { View,StyleSheet,Picker,ImageBackground,TextInput,Image,Text,TouchableOpacity,Button} from "react-native";
import userActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';


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
          country:selectCountry
        }
        //console.log(event);
        props.signUp(userData)
        console.log(userData);
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
                    <TextInput onChangeText={setName} style={styles.textInput} placeholder='Name'></TextInput>
                    <TextInput onChangeText={setLastName} style={styles.textInput} placeholder='LastName'></TextInput>
                    <TextInput onChangeText={setEmail} style={styles.textInput} placeholder='Email'></TextInput>
                    <TextInput onChangeText={setPassword} style={styles.textInput} placeholder='Password'></TextInput>
                    <TextInput onChangeText={setImageUser} style={styles.textInput} placeholder='Profile Pic'></TextInput>
                    {/* <Picker>
                        {countrys.map((country,index)=>
                            <Picker.Item label={country} value={country}/>
                        )}
                    </Picker> */}
                    <Button
                        onPress={handleSubmit}
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