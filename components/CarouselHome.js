import React, { useEffect,useRef} from 'react';
import { StyleSheet,Text, View,ImageBackground,Dimensions,Animated,FlatList,Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

//DIMENSIONS=>PARA OBETENER LAS DIMENSAIONES DEL DISPOSITIVO=>APP 100% RESPONSIVE
const width= Dimensions.get('window').width
const height=Dimensions.get('window').height

const SPACE_CTN=width*0.7
const SPACE=10;

export default function CarouselHome() {  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(citiesActions.getAllCities())
  },[])
  const cities= useSelector(store=> store.citiesReducer.cities)
  // console.log(cities)

  return (
    <View style={styles.carouselctn}>
        <Text style={styles.titleCarousel}>POPULAR MYTINERARYS</Text>
        <Animated.FlatList
        data={cities}
        horizontal={true}
        //PARA OCULTAR LA BARRITA QUE APARECE ABJO
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop:100}}
        //PARA EVITAR QUE AL DESPLAZAR SE VAYA RAPIDO
        decelerationRate={0}
        //PARA QUE CUANDO PASE DE IMG ESA IMG OCUPE TODO EL ESPACIO
        snapToInterval={420}
        scrollEventThrottle={16}
        pagingEnabled
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
        renderItem={()=>{
          return(
            <>
              {cities.map((city,index)=>(
                <View style={{width:460, margin:2}} key={index}>
                  <Animated.View style={styles.sliderCtn}>
                    <Image style={styles.imgcarousel}  source={{uri:city.image}}></Image>
                    <Text style={styles.titlecity}>{city.name}</Text>
                  </Animated.View>
                </View>
              ))}
            </>
          )
        }}
        />
    </View> 
  );
}
const styles = StyleSheet.create({
  carouselctn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1a2221'
  },
  sliderCtn:{
    width:'80%',
    padding:SPACE,
    borderRadius:34,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  imgcarousel:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:SPACE_CTN *1.2,
    resizeMode:'cover',
    borderRadius:24,
    margin:0,
    marginBottom:10
  },
  titlecity:{
    fontSize:25,
    color:'black',
    textShadowColor:'red',
  },
  titleCarousel:{
    color:'white',
    marginTop:20,
    fontSize:30
  },
})


// import { StatusBar } from "expo-status-bar";
// import React, { useEffect,useRef} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import citiesActions from '../redux/actions/citiesActions';


// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   SafeAreaView,
//   Animated,
// } from "react-native";

// import { LinearGradient } from "expo-linear-gradient";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

// const ANCHO_CONTENEDOR = width * 0.7;
// const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
// const ESPACIO = 10;
// const ALTURA_BACKDROP = height * 0.5;

// function Backdrop({ scrollX }) {
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(citiesActions.getAllCities())
//   },[])
//   const imagenes= useSelector(store=> store.citiesReducer.cities)

//   return (
//     <View
//       style={[
//         {
//           position: "absolute",
//           height: ALTURA_BACKDROP,
//           top: 0,
//           width: width,
//         },
//         StyleSheet.absoluteFillObject,
//       ]}
//     >
//       {imagenes.map((imagen, index) => {
//         const inputRange = [
//           (index - 1) * ANCHO_CONTENEDOR,
//           index * ANCHO_CONTENEDOR,
//           (index + 1) * ANCHO_CONTENEDOR,
//         ];

//         const opacity = scrollX.interpolate({
//           inputRange,
//           outputRange: [0, 1, 0],
//         });
//         return (
//           <Animated.Image
//             source={{ uri: imagen }}
//             style={[
//               { width: width, height: ALTURA_BACKDROP, opacity },
//               StyleSheet.absoluteFillObject,
//             ]}
//           />
//         );
//       })}
//       <LinearGradient
//         colors={["transparent", "white"]}
//         style={{
//           width,
//           height: ALTURA_BACKDROP,
//           position: "absolute",
//           bottom: 0,
//         }}
//       />
//     </View>
//   );
// }

// export default function App() {
  
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   const imagenes= useSelector(store=> store.citiesReducer.cities)
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar hidden />
//       <Backdrop scrollX={scrollX} />
//       <Animated.FlatList
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//         showsHorizontalScrollIndicator={false}
//         horizontal={true}
//         snapToAlignment="start"
//         contentContainerStyle={{
//           paddingTop: 200,
//           paddingHorizontal: ESPACIO_CONTENEDOR,
//         }}
//         snapToInterval={ANCHO_CONTENEDOR}
//         decelerationRate={0}
//         scrollEventThrottle={16}
//         data={imagenes}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             (index - 1) * ANCHO_CONTENEDOR,
//             index * ANCHO_CONTENEDOR,
//             (index + 1) * ANCHO_CONTENEDOR,
//           ];

//           const scrollY = scrollX.interpolate({
//             inputRange,
//             outputRange: [0, -50, 0],
//           });
//           return (
//             <View style={{ width: ANCHO_CONTENEDOR }}>
//               <Animated.View
//                 style={{
//                   marginHorizontal: ESPACIO,
//                   padding: ESPACIO,
//                   borderRadius: 34,
//                   backgroundColor: "#fff",
//                   alignItems: "center",
//                   transform: [{ translateY: scrollY }],
//                 }}
//               >
//                 <Image source={{ uri: item }} style={styles.posterImage} />
//                 <Text style={{ fontWeight: "bold", fontSize: 26 }}>
//                   {" "}
//                   Título
//                 </Text>
//               </Animated.View>
//             </View>
//           );
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   posterImage: {
//     width: "100%",
//     height: ANCHO_CONTENEDOR * 1.2,
//     resizeMode: "cover",
//     borderRadius: 24,
//     margin: 0,
//     marginBottom: 10,
//   },
// });