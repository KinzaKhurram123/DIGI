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
  },
  btn_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.padding * 2,
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    width: "32%",
    height: SIZES.padding * 2.5,
    backgroundColor: COLORS.secondary,
  },
  list_view: {
    flex: 1,
  },
  list_view_content: {
    paddingHorizontal: SIZES.padding * 1.5,
  },
  tab_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.padding,
    width: "100%",
    paddingHorizontal: SIZES.padding,
  },
  tab_view: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  tab_view_text_inactive: {
    color: COLORS.text_placeholder,
    ...FONTS.Light14,
    paddingBottom: SIZES.padding2 * 0.3,
  },
  tab_view_text: {
    color: COLORS.primary,
    ...FONTS.Light14,
    paddingBottom: SIZES.padding2 * 0.3,
  },
  border_inactive: {
    borderColor: COLORS.text_placeholder,
    borderWidth: 1,
    position: "absolute",
    bottom: -1,
    width: "100%",
  },
  border_active: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    position: "absolute",
    bottom: -1,
    width: "100%",
  },
  icon_inactive: { opacity: 0.5 },
  icon_active: { opacity: 0.5, transform: [{ rotate: "90deg" }] },
  desc_view: {
    padding: SIZES.padding,
  },
  desc_text: {
    textAlign: "left",
    ...FONTS.Light15,
  },
});
