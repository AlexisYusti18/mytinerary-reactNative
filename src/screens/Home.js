import { StyleSheet,ScrollView} from 'react-native';
import CallToAction from '../components/CallToAction';
import CarouselHome from '../components/CarouselHome';
import Welcome from '../components/Welcome'

export default function Home(){
    return(
        <ScrollView>
            <Welcome/>
            <CallToAction/>
            <CarouselHome/>
        </ScrollView>
    )
}
