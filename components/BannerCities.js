import {StyleSheet,ImageBackground, View,Text} from "react-native";

export default function BannerCities(){
    return(
        <View>
           <ImageBackground style={styles.backCities} source={require('../assets/backgroundHome.jpg')}>
                <Text style={styles.title}>Find your destination now!</Text>
           </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    backCities:{
        textAlign:'center',
        height:600,
        width:415,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:30
    }
})