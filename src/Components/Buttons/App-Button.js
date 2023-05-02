import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { COLORS, FONTS, SIZES } from "../Constant";

export default function AppButton({customStyles, title, onPress, disabled}) {
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.btn,
        customStyles,
        {backgroundColor: disabled ? COLORS.DISABLED : COLORS.PRIMARY},
      ]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
btn: {
backgroundColor:"#FF4445"

}



});
