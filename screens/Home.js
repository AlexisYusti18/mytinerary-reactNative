import { ScrollView, StyleSheet} from 'react-native';
import Welcome from '../components/Welcome'
import CallToAction from '../components/CallToAction';
import CarouselHome from '../components/CarouselHome';
import Footer from '../components/Footer'
import { StatusBar } from 'expo-status-bar';


export default function Home(props){
    // console.log(props);
    return(
            <ScrollView style={styles.ctn}>
                <Welcome/>
                <CallToAction navigation={props.navigation}/>
                <CarouselHome/>
                <Footer/>
            </ScrollView>
        )
}
const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'red'
    },
})