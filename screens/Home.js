import { ScrollView} from 'react-native';
import Welcome from '../components/Welcome'
import CallToAction from '../components/CallToAction';
import CarouselHome from '../components/CarouselHome';
import Footer from '../components/Footer'


export default function Home(){
    return(
            <ScrollView>
                <Welcome/>
                <CallToAction/>
                <CarouselHome/>
                <Footer/>
            </ScrollView>
        )
}