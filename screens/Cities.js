import React from "react";
import { ScrollView} from 'react-native';
import BannerCities from "../components/BannerCities";
import Cards from "../components/Cards";

export default function Cities(){
    return(
        <ScrollView>
            <BannerCities/>
            <Cards/>
        </ScrollView>
    )
}