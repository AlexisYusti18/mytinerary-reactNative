import { ScrollView, StyleSheet} from 'react-native';
import Welcome from '../components/Hero'
import CallToAction from '../components/CallToAction';
// import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home(props){
    // console.log(props)
    return(
            <ScrollView style={styles.ctn}>
                <Welcome/>
                <CallToAction navigation={props.navigation}/>
                <Carousel/>
                {/* <Footer/> */}
            </ScrollView>
        )
}
const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'#1a2221', 
    },
})