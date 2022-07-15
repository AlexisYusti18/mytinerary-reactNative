import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Home from "../screens/Home";
import CitiesStack from '../navigation/Stack'
import SignUp from "../screens/SignUp";
import Login from '../screens/LogIn'

const Drawer= createDrawerNavigator()

export default function DrawerNavigation(props){
    return(
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
                drawerActiveBackgroundColor:'#1a2221',
                drawerActiveTintColor:'white',
                headerShown:false,
                drawerStyle:{
                    backgroundColor:'#fff',
                    color:'black'
                },
                }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Cities" component={CitiesStack}/>
            <Drawer.Screen name="SignUp" component={SignUp}/>
            <Drawer.Screen name="LogIn" component={Login}/>
        </Drawer.Navigator>
      
    )
}
