import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Anotherbackground from '../../../Components/Header-Bar/background';
import {COLORS, FONTS, images, SIZES} from '../../../Components/Constant';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Start');
  }, 5000);
  return (
    <ImageBackground source={images.splash_background} style={styles.main_view}>
      <View style={styles.image_view}>
        <Image source={images.logo} resizeMode="contain" style={styles.image} />
      </View>
      <Text style={styles.text}>Doorstep Pharmacy & Community Services</Text>
    </ImageBackground>
  );
};
export default Splash;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: -SIZES.padding,
  },
  image_view: {
    width: '80%',
    height: 75,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    ...FONTS.Regular23,
    color: COLORS.text_white,
    textAlign: 'center',
    marginTop: SIZES.padding * 1.3,
  },
});
