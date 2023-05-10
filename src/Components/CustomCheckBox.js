import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';
import {COLORS, FONTS, SIZES} from './Constant';

const CustomCheckBox = ({
  unCheckedColor,
  checkedColor,
  right_text,
  right_text_view,
  isChecked,
  setIsChecked,
  roundStyle,
  style,
  textStyle,
  uncheckedBorderColor,
  checkedBorderColor,
}) => {
  return (
    <CheckBox
      style={styles.checkbox}
      rightTextView={
        right_text_view ? (
          right_text_view
        ) : (
          <Text style={[styles.text, textStyle]}>{right_text}</Text>
        )
      }
      unCheckedImage={
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: unCheckedColor,
              borderColor: uncheckedBorderColor,
            },
          ]}>
          <View></View>
        </View>
      }
      checkedImage={
        <View
          style={[
            styles.checkbox,
            {backgroundColor: checkedColor, borderColor: checkedBorderColor},
            roundStyle,
          ]}>
          {/* <View style={[styles.checked, dotStyle]}></View> */}
        </View>
      }
      onClick={setIsChecked}
      isChecked={isChecked}
    />
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  text: {
    ...FONTS.Regular14,
    marginLeft: SIZES.padding,
    color: COLORS.primary_with_opacity,
    textAlign: 'left',
  },
});
