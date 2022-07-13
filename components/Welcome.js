import { StyleSheet, Text, View, Image,ImageBackground,ScrollView,SafeAreaView} from 'react-native';

export default function Welcome(){

    return(
        <SafeAreaView>
                <ImageBackground style={styles.imgBackground} source={require('../assets/backgroundHome.jpg')}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    <View style={styles.ctntitle}>
                        <Text style={styles.title}>MyTinerary</Text>
                        <Text style={styles.subtitle}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                    </View>
                </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    imgBackground:{
        textAlign:'center',
        height:600,
        width:415,
        marginTop:30,
        justifyContent:'flex-start',
        alignItems:'center'
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
        color:'white',
        fontSize:50,
        fontFamily:'sans-serif',
    },
    subtitle:{
        width:350,
        textAlign:'center',
        color:'white',
        fontSize:15,
        marginTop:20
    }
})