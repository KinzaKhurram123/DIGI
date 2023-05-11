
import {StyleSheet, TouchableOpacity, Text,Image, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../../Components/Constant';

import { Icon } from '../../../../Components';
import { sale_icon, white_add_icon } from '../../../../assets/icons';

const SingleMedicianView = ({
  image,
  title,
  onPress,
  style,
  price,
  description,
  imageResizeMode,
  imageStyle,
  textStyle,
  sale,
  onPressAdd,
  descStyle,
}) => {
  return (
    <TouchableOpacity style={styles.main_view} onPress={onPress}>
      <View style={styles.image_view}>
        <Image
          style={[styles.image, imageStyle]}
          resizeMode={imageResizeMode ? imageResizeMode : 'cover'}
          source={image}
        />
      </View>
      
      {sale &&
      <Icon name={sale_icon} style={styles.icon}/>}
       <View style={{ paddingHorizontal: SIZES.padding * 0.5 }}>
        <Text style={[styles.title, textStyle]} >{title.toUpperCase()} </Text>
        {description && (
          <Text style={[styles.description, descStyle]} >{description}</Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.price}>{price ? `Rs. ${price}` : "Rs"}</Text>
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
    width: '50%',
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
