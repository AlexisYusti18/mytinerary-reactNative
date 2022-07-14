import { ScrollView, StyleSheet} from 'react-native';
import Welcome from '../components/Welcome'
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer'
import CarouselOptional from '../components/CarouselOptional'

export default function Home(props){
    // console.log(props);
    return(
            <ScrollView style={styles.ctn}>
                <Welcome/>
                <CallToAction navigation={props.navigation}/>
                <CarouselOptional/>
                {/* <Footer/> */}
            </ScrollView>
        )
}
const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'#1a2221', 
    },
})