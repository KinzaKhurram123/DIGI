import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Components/Constant";

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.Medium15,
    marginTop: SIZES.padding2,
  },
  radio_item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.padding2,
  },
  radio_text: {
    ...FONTS.Regular12,
    marginBottom: -3
  },
  radio_button: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radio_button_checked: {
    borderRadius: 50,
    margin: 2,
    width: 10,
    height: 10,
    backgroundColor: COLORS.primary,
  },
  address_parent_view: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: SIZES.padding,
  },
  address_view: {
    flexDirection: "row",
    marginVertical: SIZES.padding2,
    alignItems: "flex-start",
  },
  address_text: {
    textAlign: "left",
    marginLeft: SIZES.padding2 * 0.5,
    ...FONTS.Regular11,
  },
  payment_icon_view: {
    padding: SIZES.padding2,
    marginTop: SIZES.padding,
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff6f6",
  },
  payment_icon_sub_view: {
    backgroundColor: "#ffebec",
    borderRadius: 50,
    height: 50,
    width: 50,
    padding: SIZES.padding2,
    alignItems: "center",
    justifyContent: "center",
  },
  payment_text: {
    textAlign: "left",
    marginTop: SIZES.padding,
    ...FONTS.Medium16,
  },
  payment_details_text: {
    ...FONTS.Regular12,
    textAlign: "left",
    color: COLORS.primary_with_opacity,
    marginTop: SIZES.padding2 * 0.5
  },
  cardDetailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.padding,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.padding2
  },
  input_column_one: {
    width: "65%"
  },
  input_column_two: {
    width: "30%"
  },
  card_text: {
    ...FONTS.Medium10,
    textAlign: "left"
  },
  input: {
    marginTop: SIZES.padding2 * 0.2,
    ...FONTS.Regular14,
    color: COLORS.primary_with_opacity,
    width: "100%",
    // height: 40,
  },
  button: {
    width: "48%"
  },
  confirm_button: {
    backgroundColor: COLORS.secondary,
  },
  cancel_button: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.text_placeholder,
  },
  btn_text: {
    ...FONTS.Regular13,
  },
});
