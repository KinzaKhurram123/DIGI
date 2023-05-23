import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../Components/Constant';
import {Icon} from '../../../../Components';
import {white_add_icon} from '../../../../assets/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardView from '../../../../Components/ImageView/CardView';
import Card from './Card';

const SIngleProductView = ({
  image2,
  onPress,
  navigate,
  onPressAdd,
  name,
  price,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.main_views}>
    
      <View style={styles.image_views}>
        <Image style={styles.imagecard} source={image2} />
      </View>
      <View style={{paddingHorizontal: SIZES.padding * 0.2}}>
        <Text style={styles.names}>{name}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.price}>{'Rs' + price}</Text>
        <TouchableOpacity onPress={onPressAdd} style={styles.add_views}>
          <Icon name={white_add_icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default SIngleProductView;

const styles = StyleSheet.create({
  main_views: {
    width: '43%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2,
    marginHorizontal: SIZES.padding2 * 1,
  },
  image_views: {
    height: SIZES.padding * 7,
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.padding2,
    borderTopRightRadius: SIZES.padding2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: SIZES.padding2 * 0.8,
  },
  price: {
    color: COLORS.secondary,
  },
  imagecard: {
    height: '100%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: SIZES.padding2 * 0.8,
  },
  names: {
    textAlign: 'left',
    ...FONTS.Light11,
    marginTop: SIZES.padding2 * 0.5,
    color: COLORS.primary,
  },
  icon_view: {
    alignItems: 'flex-end',
  },
  add_views: {
    backgroundColor: '#DD3333',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding2 * 0,
    marginRight: SIZES.padding,
    borderRadius: SIZES.padding,
    alignSelf: 'flex-end',
  },
  add_text: {
    color: COLORS.white,
    ...FONTS.Regular24,
  },
  main_view: {
    width: '44%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2,
    marginHorizontal: SIZES.padding2 * 0.8,
  },
  image_view: {
    height: SIZES.padding * 8.5,
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.padding2,
    borderTopRightRadius: SIZES.padding2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: SIZES.padding2 * 0.8,
  },
  price: {
    color: COLORS.secondary,
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: SIZES.padding2 * 0.8,
  },
  icon_view: {
    alignItems: 'flex-end',
  },
  add_view: {
    backgroundColor: '#DD3333',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding2 * 0.3,
    marginRight: SIZES.padding2,
    borderRadius: SIZES.padding,
    alignSelf: 'flex-end',
  },
  add_text: {
    color: COLORS.white,
    ...FONTS.Regular22,
  },
});
