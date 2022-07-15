import React,{useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Home from "../screens/Home";
import CitiesStack from '../navigation/Stack'
import SignUp from "../screens/SignUp";
import Login from '../screens/LogIn'
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usersActions";
import {StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import LogOut from "../screens/LogOut";

const Drawer= createDrawerNavigator()
function DrawerNavigation(props){
    
    useEffect(()=>{
        if(AsyncStorage.getItem('token') !== null){
          const token=AsyncStorage.getItem('token')
          props.verifyToken(token)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    return(
        <>
        <Drawer.Navigator initialRouteName="Home" 
            screenOptions={{
                drawerActiveBackgroundColor:'#1a2221',
                drawerActiveTintColor:'white',
                // headerShown:false,
                drawerStyle:{
                    backgroundColor:'#fff',
                    color:'black'
                },
                }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Cities" component={CitiesStack}/>
            {!props.user && <Drawer.Screen name="SignUp" component={SignUp}/>}
            {!props.user && <Drawer.Screen name="LogIn" component={Login}/>}
            {props.user && <Drawer.Screen name="LogOut" component={LogOut}/>}
        </Drawer.Navigator>
        </>
    )
}
const styles=StyleSheet.create({
  ctn:{
    padding:15,
    marginTop:30,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  }
})

const mapDispatchToProps ={
    verifyToken: usersActions.verifyToken
  }
  const mapStateToProps=(state)=>{
    return {
        user:state.userReducer.user
    }
  }
export default connect (mapStateToProps, mapDispatchToProps)(DrawerNavigation);