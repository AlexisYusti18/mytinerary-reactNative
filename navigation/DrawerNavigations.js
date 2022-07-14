import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Cities from "../screens/Cities";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import Login from '../screens/LogIn'

const Menu= createDrawerNavigator()

export default function DrawerNavigation(props){
    return(
        <Menu.Navigator >
            <Menu.Screen name="Home" component={Home}/>
            <Menu.Screen name="Cities" component={Cities}/>
            <Menu.Screen name="SignUp" component={SignUp}/>
            <Menu.Screen name="LogIn" component={Login}/>
        </Menu.Navigator>
      
    )
}
