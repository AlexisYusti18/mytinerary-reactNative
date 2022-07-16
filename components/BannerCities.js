import {StyleSheet,ImageBackground, View,Text, SafeAreaView,Image, Dimensions} from "react-native";

export default function BannerCities(){
    return(
        <View>
           <SafeAreaView style={styles.header}>
                <View style={{flex:0.6, paddingTop:20}}>
                    <Text style={styles.headerText}>Find your destination now!</Text>
                </View>
                <View style={{flex:0.3, alignItems:'flex-end', paddingTop:20}}>
                    <Image style={styles.headerImage} source={require('../assets/logoSignup.png')}/>
                </View>
           </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
    },
    headerText:{
        fontSize:43,
        fontWeight:'bold',
        paddingLeft:20
    },
    headerImage:{
        width:60,
        height:60,
        borderRadius:50,
        alignItems:'flex-end'
    }
})