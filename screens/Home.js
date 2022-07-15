import { ScrollView, StyleSheet} from 'react-native';
import Welcome from '../components/Hero'
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel'

export default function Home(props){
    // console.log(props)
    return(
            <ScrollView style={styles.ctn}>
                <Welcome/>
                <CallToAction navigation={props.navigation}/>
                <Carousel/>
            </ScrollView>
        )
}
const styles=StyleSheet.create({
    ctn:{
        backgroundColor:'#fff', 
    },
})