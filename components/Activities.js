import {Text,Image,StyleSheet,Dimensions,View,TouchableOpacity} from "react-native";
const {width,height}= Dimensions.get('window')


function Activities({activity}){
    return(
        <View style={styles.imageContainer}>
            <View style={styles.imageView}>
                <Image source={{uri:activity.image}} style={styles.image}/>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.title}>{activity.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    imageContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    imageView:{
        width:width/3.3,
        height:height/3.1,
        marginHorizontal:2,
        resizeMode:'cover'
    },
    image:{
      width:'100%',
      height:'100%',
      borderRadius:20,
      resizeMode:'cover'
    },
    imageButton:{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'30%',
        bottom:0,
        left:0,
        position:'absolute',
        borderRadius:10,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },  
})
export default Activities