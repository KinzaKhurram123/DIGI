import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: "100%",
    height: "100%",
  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
  main_view: {
    flex: 1,
    paddingTop: 0,
    justifyContent:"space-between"
  },
  search_bar: {
    borderRadius: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    marginTop: SIZES.padding * 2,
    backgroundColor: COLORS.white,
  },
  search_bar_input: {
    ...FONTS.Light14,
    textAlign: "left",
    paddingLeft: SIZES.padding,
  },
  title: {
    ...FONTS.Regular24,
    color: COLORS.Light_black_with_opacity,
    backgroundColor: COLORS.light_gray2,
    textAlign: "left",
    paddingHorizontal: SIZES.padding,
    // marginVertical: SIZES.padding,
  },
});
