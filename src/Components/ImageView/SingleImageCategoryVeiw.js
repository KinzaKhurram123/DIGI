import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, images, SIZES} from '../Constant';

const SingleImageCategoryVeiw = ({onPress,name, style, image}) => {
  return (
    <TouchableOpacity activeOpacity={1}  onPress={onPress} style={[styles.main_view, style]}>
      <View style={styles.image_view}>
        <Image source={image} style={{width:"80%" , height: "80%", borderRadius:20}} />
      </View>
      <View style={styles.text_view}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleImageCategoryVeiw;

const styles = StyleSheet.create({
  main_view: {
    width: 100,
    padding: SIZES.padding2 * 0.1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding2 * 1.4,
    // marginRight: SIZES.padding2,
    marginLeft:SIZES.padding2
  },
  image_view: {
    backgroundColor: COLORS.light_gray,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: SIZES.padding2,
  },
  text_view: {
    marginTop: SIZES.padding2 * 0.4,
  },
  title: {
    ...FONTS.Regular12,
    alignSelf: 'center',
    textAlign:'center',
    color: COLORS.primary
  },
});
