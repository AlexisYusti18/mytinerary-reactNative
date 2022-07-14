import {StyleSheet,ImageBackground, View,Text} from "react-native";

export default function BannerCities(){
    return(
        <View>
           <ImageBackground style={styles.backCities} source={require('../assets/fondo.jpg')}>
                <Text style={styles.title}>Find your destination now!</Text>
           </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    backCities:{
        textAlign:'center',
        height:400,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover',
        resizeMode:'center',
        resizeMode:''
    },
    title:{
        color:'white',
        fontSize:30,
    }
})