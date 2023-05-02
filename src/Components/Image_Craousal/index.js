import {Dimensions, StyleSheet, Text, View,Image} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './index.style';
import {COLORS} from '../Constant';

const ImageCarousel = ({array}) => {
  const [index, setIndex] = useState(0);
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item} resizeMode="cover" style={styles.image} />
      </View>
    );
  };
  const sliderWidth = Dimensions.get('window').width;
  const itemHeight = Dimensions.get('window').height;
  return (
    <>
      {/* <Carousel
        items={array}
        data={array}
        style={{height: '100%', alignSelt: 'center'}}
        renderItem={renderItem}
         
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        itemHeight={itemHeight}
        onSnapToItem={index => setIndex(index)}
        autoplay
        
      /> */}
      <Pagination
        containerStyle={{marginBottom: -50}}
        dotContainerStyle={styles.dot_view}
        dotsLength={array?.lenght}
        activeDotIndex={index}
        dotStyle={styles.active_dot}
        inactiveDotColor={COLORS.white}
        inactiveDotStyle={styles.inactive_dot}
      />
    </>
  );
};

export default ImageCarousel;
