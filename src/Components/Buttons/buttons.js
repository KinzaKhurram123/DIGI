import React from 'react';
import { COLORS, FONTS, SIZES } from '../Constant';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../index';

const Buttons = ({
  style,
  onPress,
  buttonText,
  textStyle,
  icon_view,
  iconStyle,
  isDisabled,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={isDisabled}>
      <View style={[styles.row, icon_view]}>
        <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
        {icon && (
          <Icons name={icon ? icon : null} style={[styles.icon, iconStyle]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding,
    width: '100%',
    borderRadius:SIZES.padding * 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultText: {
    ...FONTS.Bold14,
    color: COLORS.text_white,
  },
  icon: {
    width: '12%',
    paddingRight: 30,
  },
});

export default Buttons;
