import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  otc_view: {
    ...FONTS.Bold16,
    color:COLORS.primary
  },
  prescription_medicine_view: {
    ...FONTS.Bold16,
    color:COLORS.primary
  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
});
