import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';


export default function CallToAction(props){
    // console.log(props)
    return(
        <View>
            <View style={styles.ctncall}>
                <Text style={styles.titlecallTo}>Around the world there are thousands of beautiful places that you could visit! You are still in time to do it, you can look at all the destinations we have for you!</Text>
                <TouchableOpacity 
                        onPress={()=> props.navigation.navigate('Cities')}>
                        <View>
                            <Text style={styles.button}>CLICK HERE!</Text>
                        </View>
                </TouchableOpacity>
                <View style={styles.ctnImage}>
                    <Image style={styles.image} source={require('../assets/chica.png')}/>
                    <Image style={styles.image} source={require('../assets/nene.png')}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ctncall:{
        backgroundColor:'white',
        height:430,
        justifyContent:'center',
        alignItems:'center', 
        shadowColor:'#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titlecallTo:{
        color: 'black',
        fontSize:17,
        width:'90%',
        textAlign:'center',
        fontWeight:"500",
    },
    imagecall:{
        width:300,
        height:500,
    },
    button:{
        backgroundColor:'#07311f',
        padding:10,
        color:'white',
        fontSize:15,
        marginTop:10,
        width:300,
        textAlign:'center'
    },
    ctnImage:{
        width:'100%',
        flexDirection:'row',
        height:200,
        alignItems:'center',
        justifyContent:'space-around'
    },
    image:{
        width:130,
        height:220,
        margin:20,
        marginTop:60
    }
})