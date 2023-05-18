import {Image, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS, images, SIZES} from '../Constant';
import { styles } from './index.style';
 const sliderArray = [
  images.slider_image_2,
  images.slider_image,
  images.slider_image_2,
];
const renderItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <Image source={item} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const Image_Crousel = ({array}) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={{paddingTop:SIZES.padding}}>
      <Carousel
        style={{height: '100%', alignSelf: 'center'}}
        data={sliderArray}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        onSnapToItem={index => setIndex(index)}
        autoplay
      />
      <Pagination
        containerStyle={{marginBottom: -50}}
        dotContainerStyle={styles.dot_view}
        dotsLength={array?.length}
        activeDotIndex={index}
        dotStyle={styles.active_dot}
        inactiveDotColor={COLORS.white}
        dotColor={COLORS.black}
        inactiveDotStyle={styles.inactive_dot}
      />
    </View>
  );
};

export default Image_Crousel;

