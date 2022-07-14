import { View,StyleSheet, ImageBackground,TextInput, Image,Text,TouchableOpacity, Button } from "react-native";



export default function LogIn(props){
    return(
        <View>
            <ImageBackground style={styles.ctn} source={require('../assets/signup.png')}>
                <View style={styles.inputCnt}>
                    <Image style={styles.logo} source={require('../assets/logoSignup.png')}/>
                    <Text>Log In with your account!</Text>
                    <View>
                        <TextInput style={styles.textInput} placeholder="Email"></TextInput>
                        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
                        <Button
                            title="log in"
                            color='#492c36'
                        />
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
        backgroundColor:'#492c36',
        padding:6,
        borderRadius:10,
        color:'white',
        marginBottom:4,
        marginTop:5
    }
})