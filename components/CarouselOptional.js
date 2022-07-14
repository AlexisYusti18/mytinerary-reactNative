import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,Platform,ImageBackground}from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import '../IgnoreWarnings'

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel =()=> {
    const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(citiesActions.getAllCities())
      },[])
      const ENTRIES1= useSelector(store=> store.citiesReducer.cities)

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, [])

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.image}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
            <Text style={styles.title} numberOfLines={2}>
                {item.title}
            </Text>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
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

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'red',
  }
});