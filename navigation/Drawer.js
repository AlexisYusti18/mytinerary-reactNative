import React,{useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Home from "../screens/Home";
import CitiesStack from '../navigation/Stack'
import SignUp from "../screens/SignUp";
import Login from '../screens/LogIn'
// import {useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usersActions";
import {Image,Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Drawer= createDrawerNavigator()
function DrawerNavigation(props){
    // console.log(props.user)
    
    useEffect(()=>{
        if(AsyncStorage.getItem('token') !== null){
          const token=AsyncStorage.getItem('token')
          props.verifyToken(token)
          //console.log(token)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    // const user=useSelector(store=>store.userReducer.user)
    return(
        <>
        <Drawer.Navigator initialRouteName="Home" 
            // drawerContent={(props)=> <MenuItems {...props}/>}
            screenOptions={{
                drawerActiveBackgroundColor:'#1a2221',
                drawerActiveTintColor:'white',
                // headerShown:false,
                drawerStyle:{
                    backgroundColor:'#fff',
                    color:'black'
                },
                }}>
            {/* <Text>{props.user.name}</Text> */}
            {/* <Image source={{source:props.user.imageUser}}/>*/}
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Cities" component={CitiesStack}/>
            {!props.user && <Drawer.Screen name="SignUp" component={SignUp}/>}
            {!props.user && <Drawer.Screen name="LogIn" component={Login}/>}
        </Drawer.Navigator>
        </>
    )
}
// const MenuItems=({navigation})=>{
//     return(
//         <Vie>
//             <Text>HOLA</Text>
//         </Vie>
//     )
// }


const mapDispatchToProps ={
    verifyToken: usersActions.verifyToken
  }
  const mapStateToProps=(state)=>{
    return {
        user:state.userReducer.user
    }
  }
  export default connect (mapStateToProps, mapDispatchToProps)(DrawerNavigation);

// import { createDrawerNavigator } from "@react-navigation/drawer"
// import 'react-native-gesture-handler';
// import Home from "../screens/Home";
// import CitiesStack from '../navigation/Stack'
// import SignUp from "../screens/SignUp";
// import Login from '../screens/LogIn'

// const Drawer= createDrawerNavigator()

// export default function DrawerNavigation(props){
//     return(
//         <Drawer.Navigator initialRouteName="Home" screenOptions={{
//                 drawerActiveBackgroundColor:'#1a2221',
//                 drawerActiveTintColor:'white',
//                 // headerShown:false,
//                 drawerStyle:{
//                     backgroundColor:'#fff',
//                     color:'black'
//                 },
//                 }}>
//             <Drawer.Screen name="Home" component={Home}/>
//             <Drawer.Screen name="Cities" component={CitiesStack}/>
//             <Drawer.Screen name="SignUp" component={SignUp}/>
//             <Drawer.Screen name="LogIn" component={Login}/>
//         </Drawer.Navigator>
      
//     )
// }