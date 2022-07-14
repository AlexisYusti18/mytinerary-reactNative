import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';

export default function Welcome(){

    return(
        <View>
                <ImageBackground style={styles.imgBackground} source={require('../assets/backgroundHome.jpg')}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    <View style={styles.ctntitle}>
                        <Text style={styles.title}>MyTinerary</Text>
                        <Text style={styles.subtitle}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                    </View>
                </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    imgBackground:{
        textAlign:'center',
        height:600,
        width:'100%',
        marginTop:0,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    logo:{
      height:120,
      width:120,
      marginBottom:60
    },
    ctntitle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    } ,
    title:{
        color:'#1a2221',
        fontSize:50,
        fontFamily:'sans-serif',
        fontWeight: "900"
    },
    subtitle:{
        width:350,
        textAlign:'center',
        color:'white',
        fontSize:22,
        marginTop:20,
        backgroundColor:  '#00000070',
        color:'#FFFFFF'
    }
})