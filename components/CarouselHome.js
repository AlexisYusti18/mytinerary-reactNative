import React, { useEffect,useRef} from 'react';
import { StyleSheet,Text, View,ImageBackground,Dimensions,Animated,FlatList} from 'react-native';
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
        <Text>POPULAR MYTINERARYS</Text>

        <Animated.FlatList
        data={cities}
        horizontal={true}
        //PARA OCULTAR LA BARRITA QUE APARECE ABJO
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop:100}}
        //PARA EVITAR QUE AL DESPLAZAR SE VAYA RAPIDO
        decelerationRate={0}
        //PARA QUE CUANDO PASE DE IMG ESA IMG OCUPE TODO EL ESPACIO
        snapToInterval={SPACE_CTN}
        scrollEventThrottle={16}
        pagingEnabled
        renderItem={()=>{
          return(
            <>
              {cities.map((city,index)=>(
                <View style={{width:SPACE_CTN, margin:10}} key={index}>
                  <Animated.View style={styles.imagectn}>
                    <ImageBackground style={styles.imgcarousel}  source={{uri:city.image}}>
                      <Text style={styles.titlecity}>{city.name}</Text>
                    </ImageBackground>
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
    backgroundColor:'#fff'
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
  imagectn:{
    marginHorizontal:SPACE,
                      padding:SPACE,
                      borderRadius:34,
                      backgroundColor:'#fff',
                      alignItems:'center',
  },
  titlecity:{
    fontSize:30,
    color:'white',
    textShadowColor:'red',
    zIndex:3
  }
})









// import React, { useEffect,useRef} from 'react';
// import { StyleSheet,Text, View,ImageBackground,Dimensions,Animated,FlatList,Image} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import citiesActions from '../redux/actions/citiesActions';

// //DIMENSIONS=>PARA OBETENER LAS DIMENSAIONES DEL DISPOSITIVO=>APP 100% RESPONSIVE
// const width= Dimensions.get('window').width
// const height=Dimensions.get('window').height

// const SPACE_CTN=width*0.7
// const SPACE=10;
// const ALTURA_BACKDROP = height * 0.5;


// export default function CarouselHome() {
//   const BackDrop=({scrollX})=>{
//     return(
//       <View
//       style={[
//         {
//           position: "absolute",
//           height: ALTURA_BACKDROP,
//           top: 0,
//           width: width,
//         },
//         StyleSheet.absoluteFillObject,
//       ]}
//       >
//         {cities.map((city,index)=>{
//           const inputRange=[
//             (index -1) * SPACE_CTN,
//             index * SPACE_CTN,
//             (index + 1) * SPACE_CTN,
//           ];
//         return(
//           <Animated.Image key={index} source={{uri:city.image}}
//           style={[
//             { width: width, height: ALTURA_BACKDROP},
//             StyleSheet.absoluteFillObject,
//           ]}
          
//           />

          
//         )
//         })}


  
//       </View>
//     )
//   }
//   const scrollX= useRef(new Animated.Value(0)).current;
  
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(citiesActions.getAllCities())
//   },[])
//   const cities= useSelector(store=> store.citiesReducer.cities)
//   // console.log(cities)

//   return (
//     <View style={styles.carouselctn}>
//         <Text>POPULAR MYTINERARYS</Text>
//         <BackDrop scrollX={scrollX}/>
//         <Animated.FlatList
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//         data={cities}
//         horizontal={true}
//         //PARA OCULTAR LA BARRITA QUE APARECE ABJO
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{paddingTop:100}}
//         //PARA EVITAR QUE AL DESPLAZAR SE VAYA RAPIDO
//         decelerationRate={0}
//         //PARA QUE CUANDO PASE DE IMG ESA IMG OCUPE TODO EL ESPACIO
//         snapToInterval={SPACE_CTN}
//         scrollEventThrottle={16}
//         pagingEnabled
//         renderItem={({city, index})=>{
//           const inputRange=[
//             (index -1) * SPACE_CTN,
//             index * SPACE_CTN,
//             (index + 1) * SPACE_CTN,
//           ];
//           // const outputRange= [0, -50, 0];
          
//           // const scrollY = scrollX.interpolate({
//           //   inputRange,
//           //   outputRange: [0, -50, 0],
//           // });

//           return(
//             <>
//                 <View style={{width:SPACE_CTN, margin:10}} key={index}>
//                   <Animated.View style={{
//                     SPACE,
//                     padding:SPACE,
//                     borderRadius:34,
//                     backgroundColor:'#fff',
//                     alignItems:'center',
//                     transform:[{translateY:scrollY}],
//                   }}>
//                     <Image style={styles.imgcarousel}  source={{uri:city.image}}>
//                       <Text style={styles.titlecity}>{city.name}</Text>
//                     </Image>
//                   </Animated.View>
//                 </View>
              
//             </>
//           )
//         }}
//         />
//     </View> 
//   );
// }
// const styles = StyleSheet.create({
//   carouselctn:{
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#fff'
//   },
//   imgcarousel:{
//     justifyContent:'center',
//     alignItems:'center',
//     width:'100%',
//     height:SPACE_CTN *1.2,
//     resizeMode:'cover',
//     borderRadius:24,
//     margin:0,
//     marginBottom:10
//   },
//   titlecity:{
//     fontSize:30,
//     color:'white',
//     textShadowColor:'red',
//     zIndex:3
//   }
// })