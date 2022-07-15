import {Text,ImageBackground,StyleSheet} from "react-native";


function Activities({activity}){
    return(
        <ImageBackground source={{uri:activity.image}} style={styles.imageCtn}>
            <Text style={styles.text}>{activity.name}</Text>
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    imageCtn:{
        width:250,
        height:110,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    text:{
        color:'white',
        fontSize:15
    }
})
export default Activities