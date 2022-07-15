import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from "../screens/Cities";
import Details from "../components/Details";
import Activities from "../components/Activities";

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName='Cities'
            screenOptions={{headerBackTitle:'Back'}}
        >
            <Stack.Screen name="City" component={Cities}
                options={{headerShown:false}}
            />
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Activities" component={Activities}/>

        </Stack.Navigator>
    )
}