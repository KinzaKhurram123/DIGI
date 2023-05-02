import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';
import { COLORS, SIZES } from '../Constant';

const SingleOtcView = ({image, onpress , name , price}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.main_view}>
      <View style={styles.image_view}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.name} text={name}/>
      <Text style={styles.price} text={"Rs" + price}/>
    </TouchableOpacity>
  );
};

export default SingleOtcView;

const styles = StyleSheet.create({
  main_view: {
    width: 150,
    marginRight: SIZES.padding2,
    alignItems: 'flex-start',
    height: 200,
    backgroundColor: COLORS.white,
  },
  image_view: {
    height: 120,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    textAlign: 'left',
    marginTop: SIZES.padding2,
  },
  price: {
    color: COLORS.secondary,
  },
});
