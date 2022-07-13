import { StyleSheet,ScrollView,SafeAreaView} from 'react-native';
import Welcome from '../components/Welcome'
import CallToAction from '../components/CallToAction';
import CarouselHome from '../components/CarouselHome';

export default function Home(){
    return(
            <ScrollView>
                <Welcome/>
                <CallToAction/>
                <CarouselHome/>
            </ScrollView>
        )
}