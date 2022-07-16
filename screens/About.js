import { Text, View,StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function About(){
    return(
        <View style={styles.ctn}>
            <Text style={styles.title}>Find us on our Social Networks!</Text>
            <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <View>
                    <Entypo style={{margin:40}} name="instagram-with-circle" size={90} color="violet" />
                    <Entypo style={{margin:40}} name="facebook-with-circle" size={90} color="blue" />
                </View>
                <View>
                    <AntDesign style={{margin:40}} name="github" size={90} color="black" />
                    <Entypo style={{margin:40}} name="twitter-with-circle" size={90} color="#1d9bf0" />
                </View>
            </View>
            <Text style={styles.title}>Contact</Text>
            <View>
                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <MaterialIcons name="email" size={34} color="blue" />
                    <Text style={{fontSize:30, margin:5}}>mytinerary@gmail.com</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Ionicons name="location-sharp" size={34} color="red" />
                    <Text style={{fontSize:30, margin:5}}>Germany, Berlin</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{textAlign:'center', color:'white'}}>Copyright © 2022 All Rights Reserved by Alexis Yusti.</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet .create({
    ctn:{
        height:'100%',
        backgroundColor:'#c6c6c6'
    },
    title:{
        color:'black',
        textAlign:'center',
        fontSize:30
    },
    footer:{
        backgroundColor:'#1a2221',
        position:'absolute',
        bottom:0,
        height:40,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        color:"white"
    }
})