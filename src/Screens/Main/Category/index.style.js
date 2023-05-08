import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll_view: {
    paddingTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding2 * 0.5,
  },
  sub_head: {
    flexDirection: "row",
    marginTop: SIZES.padding,
  },
  deliever_text: {
    ...FONTS.Regular16,
    marginLeft: SIZES.padding2,
  },
  card: {
    backgroundColor: COLORS.white_with_opacity,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    borderRadius: 10,
    marginTop: SIZES.padding * 1.5,
    padding: SIZES.padding2,
  },
  card_title: {
    ...FONTS.Regular16,
    textAlign: "left",
  },
  card_des: {
    ...FONTS.Regular10,
    textAlign: "left",
    width: "80%",
    marginTop: SIZES.padding2 * 0.2,
  },
  card_btn: {
    height: SIZES.padding * 1.5,
    backgroundColor: COLORS.secondary,
    marginTop: SIZES.padding * 0.5,
    justifyContent: "center",
    alignItems: "center",
    width: 135,
    borderRadius: SIZES.padding2 * 0.8,
  },
  card_btn_text: {
    ...FONTS.Regular13,
  },
  filter_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.padding,
  },
  filter_text: {
    ...FONTS.Regular12,
  },
  tab_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.padding2,
  },
  tab: {
    width: "48%",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2 * 0.8,
    paddingHorizontal: SIZES.padding2 * 0.2,
    height: SIZES.padding * 2.5,
  },
  tab_text: {
    ...FONTS.Regular14,
    color: COLORS.text_white,
  },
  heading: {
    ...FONTS.Regular17,
    textAlign: "left",
    marginTop: SIZES.padding,
  },
  view_text: {
    textAlign: "right",
    marginTop: SIZES.padding,
    ...FONTS.Regular15,
  },
  tab_view: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width / 3.4,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
    paddingBottom: SIZES.padding2 * 0.5,
    marginRight: SIZES.padding2 * 0.3,
  },
  tab_view_inactive: {
    width: Dimensions.get("screen").width / 3.4,
    marginRight: SIZES.padding2 * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.border_grey,
    paddingBottom: SIZES.padding2 * 0.5,
  },
  tab_view_text_inactive: {
    color: COLORS.border_grey,
    ...FONTS.Regular12,
  },
  tab_view_text: {
    color: COLORS.primary,
    ...FONTS.Regular12,
  },
  manage_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white_with_opacity,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
    padding: SIZES.padding2,
    alignItems: "center",
  },
  manage_text: {
    width: "50%",
    textAlign: "left",
    marginRight: SIZES.padding * 0.5,
    ...FONTS.Regular13,
  },
  btn: {
    height: SIZES.padding * 1.5,
    width: "40%",
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding2 * 1.5,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: SIZES.padding2 * 0.6,
  },
  btn_text: {
    ...FONTS.Regular13,
    color: COLORS.white,
  },

});
