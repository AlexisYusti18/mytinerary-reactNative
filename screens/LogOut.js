import { Text,TouchableOpacity,View,StyleSheet, Button, Image, ImageBackground} from "react-native"
import { connect } from 'react-redux';
import userActions from '../redux/actions/usersActions'
import { Ionicons } from '@expo/vector-icons';

function LogOutt(props){
    // console.log(props)
    const logOutClean=async()=>{
        props.logOut(props.user.email)
    //    console.log(props.user.email)
    }

    return(
        <View>
                <ImageBackground style={styles.bg} source={require('../assets/fondo.jpg')}>
                <Text style={styles.title}>Configs <Ionicons name="settings" size={24} color="white" /></Text>
                
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={styles.image} source={{uri:props.user.imageUser}}/>
                    <Text style={{color:'white', margin:10, fontSize:20}}>{props.user.name},{props.user.lastName}</Text>
                    <Text style={{color:'white', margin:10, fontSize:20}}>email: {props.user.email}</Text>
                    <Text style={{color:'white', margin:10, fontSize:20}}>country: {props.user.country}</Text>
                </View>
                <Text style={{color:'white', marginTop:50, fontSize:20}}>Are you sure you want to go out?</Text>
                <TouchableOpacity onPress={logOutClean}>
                    <Text style={styles.button}>LogOut</Text>
                </TouchableOpacity>
                </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    bg:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover'
    },
    button:{
        padding:10,
        paddingHorizontal:50,
        backgroundColor:'#957b41',
        color:'white',
        fontSize:20,
    },
    image:{
        width:80,
        height:80,
        borderRadius:50
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        position:'absolute',
        top:40,
    }
    
})

const mapDispatchToProps={
    logOut:userActions.logOut
  }
  const mapStateToProps=(state)=>{
    return{
      user:state.userReducer.user
}
  }
export default connect (mapStateToProps,mapDispatchToProps)(LogOutt);