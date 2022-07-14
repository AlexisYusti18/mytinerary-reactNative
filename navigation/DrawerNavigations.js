import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Cities from "../screens/Cities";
import Home from "../screens/Home";

const Menu= createDrawerNavigator()

export default function DrawerNavigation(props){
    return(
        <Menu.Navigator >
            <Menu.Screen name="Home" component={Home}/>
            <Menu.Screen name="Cities" component={Cities}/>
        </Menu.Navigator>
      
    )
}
