import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { images } from '../Constant';

const Logo = ({style}) => {
  return (
    <View style={[styles.logo, style]}>
      <Image
        source={images.black_logo}
        style={{height: 120}}
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
  },
});
