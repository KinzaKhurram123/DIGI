import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Icons } from "../../Components/Constant/theme";
import { COLORS, FONTS, SIZES } from "../../Components/Constant";

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
  rightIcon,
  iconStyle,
  maxLength,
  onPressRightIcon,
}) => {
  return (
    <View style={[styles.main_view, style]}>
      {icon && (
        <Icons name={icon ? icon : null} style={[styles.icon, iconStyle]} />
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
      {rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icons name={rightIcon} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main_view: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding,
    backgroundColor: COLORS.light_gray2,
    paddingHorizontal: SIZES.padding2 * 1.5,
    borderRadius: SIZES.padding * 2,
  },
  icon: {
    width: "7%",
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
