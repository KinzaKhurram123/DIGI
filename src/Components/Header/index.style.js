import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../Constant";

export const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    paddingTop: SIZES.padding * 2.5,
    paddingBottom: SIZES.padding * 1.3,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.Regular18,
    color: COLORS.text_white,
    marginLeft: SIZES.padding2,
    textAlign: "left",
  },
  image:{
    width:35,
    height:35,
    borderRadius:SIZES.padding
  }
});
