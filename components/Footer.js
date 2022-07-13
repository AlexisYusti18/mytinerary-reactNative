import { StyleSheet,Text, View,ImageBackground,Dimensions,Animated,FlatList,Image} from 'react-native';


export default function Footer(){
    return(
        <View style={styles.footerCtn}>
            <View>
                <Image source={require('../assets/location.png')} style={styles.icons}/>
                <Text>Germany, Berlin</Text>
            </View>
            <View>
                <Image source={require('../assets/mail.png')} style={styles.icons}/>
                <Text>mytinerary@gmail.com</Text>
            </View>
            <View>
                <Image source={require('../assets/instagramIcon.png')} style={styles.icons}/>
            </View>
            <View>
                <Image source={require('../assets/facebookIcon.png')} style={styles.icons}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footerCtn:{
        backgroundColor:'#fff',
        color:'black',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    icons:{
        width:50,
        height:50
    }
})