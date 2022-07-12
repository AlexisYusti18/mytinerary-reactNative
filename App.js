import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducer';
// import Home from './src/screens/Home'

const store=configureStore({reducer:mainReducer})
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={require('./src/images/backgroundHome.jpg')}>
          <Image style={styles.logo} source={require('./src/images/logo.png')} />
          <View style={styles.center}>
            <Text style={styles.title}>MyTinerary</Text>
            <Text style={styles.subtitle}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    color:'white',
    justifyContent: 'center',
    textAlign:'center'
  },
  center:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  } ,
  img:{
    textAlign:'center',
    height:500,
    width:500,
    marginTop:30,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  logo:{
    height:120,
    width:120,
    marginTop:40
  },
  title:{
    color:'white',
    fontSize:50,
  },
  subtitle:{
    width:350,
    textAlign:'center',
    color:'white',
    fontSize:15
  }
});
