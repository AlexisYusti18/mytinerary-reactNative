import { Text,TouchableOpacity,View,StyleSheet, Button, Image} from "react-native"
import { connect } from 'react-redux';
import userActions from '../redux/actions/usersActions'

function LogOutt(props){
    // console.log(props)
    const logOutClean=async()=>{
        props.logOut(props.user.email)
    //    console.log(props.user.email)
    }

    return(
        <View style={styles.ctn}>
                <View>
                    <Image style={styles.image} source={{uri:props.user.imageUser}}/>
                    <Text>{props.user.name},{props.user.lastName}</Text>
                </View>
                <Text>Are you sure you want to go out?</Text>
                <TouchableOpacity onPress={logOutClean}>
                    <Text style={styles.button}>LogOut</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'#8979',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        padding:20,
        backgroundColor:'red'
    },
    image:{
        width:80,
        height:80,
        borderRadius:50
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