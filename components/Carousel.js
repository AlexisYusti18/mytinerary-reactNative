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
            <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
        </ImageBackground>

      </View>
    );
  };

  return (
    <View style={styles.container}>
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
        // autoplay={true}
        // autoplayDelay={2000}
        // autoplayInterval={3000}
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
    fontWeight:'900'
  }
});