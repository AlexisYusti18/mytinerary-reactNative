import { StyleSheet, Text, View,Button,Image,ScrollView} from 'react-native';


export default function CallToAction(){
    return(
        <View>
            <View style={styles.ctncall}>
                <Image  styles={styles.logo}/>
                <Text style={styles.titlecallTo}>Haven't you visited the city of your dreams yet?</Text>
                <Button
                title="CHOOSE YOUR NEXT DESTINATION NOW"
                color='#07311f'
                
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ctncall:{
        backgroundColor:'white',
        height:200,
        justifyContent:'center',
        alignItems:'center', 
    },
    titlecallTo:{
        color: 'black'
    },
    imagecall:{
        width:300,
        height:500,
    }
})