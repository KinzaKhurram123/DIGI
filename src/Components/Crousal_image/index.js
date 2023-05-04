import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {Image} from 'react-native-svg';
import {COLORS, images} from '../Constant';
import {Carousel, Pagination} from 'react-native-reanimated-carousel';

const Carousel_Image = ({array}) => {
  const [index, setIndex] = useState(0);
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item} resizeMode="cover" style={styles.image} />
      </View>
    );
  };
  return (
    <>
      <Carousel
        style={{height: '100%', alignSelf: 'center'}}
        data={array}
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
        dotColor={COLORS.white}
        inactiveDotStyle={styles.inactive_dot}
      />
    </>
  );
};
export default Carousel_Image;
