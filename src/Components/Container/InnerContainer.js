import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../Constant";
// import { SIZES } from "../../Theme/Fonts";

const InnerContainer = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default InnerContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
});