import React from "react";
import { ScrollView} from 'react-native';
import BannerCities from "../components/BannerCities";
import Cards from "../components/Cards";

export default function Cities(props){
    // console.log(props)
    return(
        <ScrollView>
            <BannerCities/>
            <Cards navigation={props.navigation}/>
        </ScrollView>
    )
}