import { StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';


export default function CallToAction(props){
    // console.log(props)
    return(
        <View>
            <View style={styles.ctncall}>
                <Image style={styles.logo}/>
                <Text style={styles.titlecallTo}>Haven't you visited the city of your dreams yet?</Text>
                <TouchableOpacity 
                    onPress={()=> props.navigation.navigate('Cities')}>
                    <View>
                        <Text style={styles.button}>CHOOSE YOUR NEXT DESYINATION NOW</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ctncall:{
        backgroundColor:'white',
        height:230,
        justifyContent:'center',
        alignItems:'center', 
    },
    titlecallTo:{
        color: 'black',
        fontSize:17
    },
    imagecall:{
        width:300,
        height:500,
    },
    button:{
        backgroundColor:'#1a2221',
        padding:10,
        color:'white',
        fontSize:15,
        marginTop:10
    },
})