import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon, Icons} from '../index';
import {COLORS, FONTS, SIZES} from '../Constant';
import { search_icon_blue, top_right_icon } from '../../assets/icons';

const IconInputField = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
  icon,
  inputStyle,
  leftIcon,
  iconStyle,
  maxLength,
  onPressleftIcon,
  rightIcon,
  onPressrightIcon
}) => {
  return (
    <View style={[styles.main_view, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={onPressleftIcon}>
          <Icon name={leftIcon} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={onPressrightIcon}>
          <Icon name={rightIcon} style={[styles.rightIcon, iconStyle]} />
        </TouchableOpacity>
      )}
      <TextInput
        ref={ref}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureText}
        style={[styles.input, inputStyle]}
        placeholderTextColor={COLORS.text_placeholder}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        // onFocus={onFocus}
        onBlur={onBlur}
        editable={isEdit}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main_view: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding,
    backgroundColor: COLORS.light_gray2,
    paddingHorizontal: SIZES.padding2 * 1.5,
    borderRadius: SIZES.padding * 2,
  },
  icon: {
    width: '8%',
    marginLeft:80
  },
  rightIcon:{
    width: '8%',
  },
  input: {
    flex: 1,
    ...FONTS.Regular14,
    color: COLORS.primary_with_opacity,
    marginLeft: SIZES.padding2 * 0.5,
    height: 50,
    marginTop: SIZES.padding2 * 0.5,
  },
});

export default IconInputField;
