import React, {useRef,useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,Platform,ImageBackground}from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const {width: screenWidth} = Dimensions.get('window');

export default function MyCarousel(){
  const dispatch=useDispatch()
  const carouselRef = useRef(null);
      
  useEffect(()=>{
        dispatch(citiesActions.getAllCities())
        // setEntries(cities);
      },[])
  const cities= useSelector(store=> store.citiesReducer.cities)
  // console.log(cities)
  
  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          style={styles.image}
          source={{uri: item.image}}
          containerStyle={styles.imageContainer}
          parallaxFactor={0.4}
          {...parallaxProps}>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
            </TouchableOpacity>
        </ImageBackground>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCtn}>
        <Text style={styles.titleMy}>POPULAR MYTINERARIES !</Text>
      </View>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        layout={'default'}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={cities}
        loop={true}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={3000}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: 400,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop:10
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center',
    height:350,
    marginTop:20
  },
  title:{
    color:'white',
    fontSize:30,
    fontWeight:"900"
  },
  imageButton:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%',
    height:'15%',
    bottom:0,
    left:0,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center'
  },
  titleCtn:{
    marginTop:30,
  },
  titleMy:{
    fontSize:20,
    textAlign:'center',
    color:'black'
  }
});