import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';
import {Icon} from '..';
import {sale_icon, white_add_icon} from '../../assets/icons';
import { COLORS, FONTS, SIZES } from '../Constant';

const SingleMedicianView = ({onPress, image ,
  title,
  style,
  price,
  description,
  imageResizeMode,
  imageStyle,
  textStyle,
  sale,
  onPressAdd,
  descStyle,}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.main_view, style]}>
      <View style={styles.image_view}>
        <Image
          style={[styles.image, imageStyle]}
          resizeMode={imageResizeMode ? imageResizeMode : 'cover'}
          source={image}
        />
        {sale && <Icon name={sale_icon} style={styles.icon} />}
        <View style={{paddingHorizontal: SIZES.padding * 0.2}}>
          <Text style={[styles.title, textStyle]} text={title.toUpperCase()} />
          {description && (
            <Text style={[styles.description, descStyle]} text={description} />
          )}
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.price} text={price ? `Rs. ${price}` : 'Rs'} />
        <TouchableOpacity onPress={onPressAdd} style={styles.add_view}>
          <Icon name={white_add_icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default SingleMedicianView;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.white,
    width: '48%',
    borderRadius: SIZES.padding2,
    justifyContent: 'space-between',
    elevation: 2,
  },
  image_view: {
    height: SIZES.padding * 8,
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.padding2,
    borderTopRightRadius: SIZES.padding2,
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  icon: {
    position: 'absolute',
  },
  title: {
    textAlign: 'left',
    ...FONTS.Regular14,
    marginTop: SIZES.padding2 * 0.5,
  },
  description: {
    textAlign: 'left',
    ...FONTS.Bold13,
    marginTop: SIZES.padding2 * 0.1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -SIZES.padding2 * 0.5,
  },
  price: {
    ...FONTS.Bold15,
    fontWeight: '600',
    marginLeft: SIZES.padding2 * 0.5,
    color: COLORS.secondary,
  },
  add_view: {
    backgroundColor: '#DD3333',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.padding2,
    marginRight: SIZES.padding2,
    borderRadius: SIZES.padding,
  },
  add_text: {
    color: COLORS.white,
    ...FONTS.Regular24,
  },
});
