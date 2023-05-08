import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  card_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    shadowColor: "rgba(170, 33, 33, 0.6)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  card_left_view: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  card_image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.padding2,
    marginBottom: -SIZES.padding2,
  },
  card_content: {
    // marginTop: SIZES.padding2 * 0.2,

    alignItems: "flex-start",
  },
  name_text: {
    ...FONTS.Bold14,
  },
  quantity_text: {
    ...FONTS.Medium14,
    color: COLORS.primary,
    marginTop: -SIZES.padding2 * 0.3,
  },
  counter_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number_view: {
    borderColor: "rgba(9, 33, 67, 0.11)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 30,
  },
  total_num_text: {
    ...FONTS.Bold12,
  },
  card_price: {
    color: "#dd3333",
    ...FONTS.Bold18,
  },
  card_price_currency: {
    ...FONTS.Regular10,
  },
  desc: {
    ...FONTS.Regular14,
    textAlign: "left",
    marginTop: SIZES.padding,
  },
  btn: {
    backgroundColor: COLORS.secondary,
  },
  text_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  help_text: {
    color: COLORS.secondary,
    marginTop: SIZES.padding,
    textDecorationLine: "underline",
  },
  price_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.padding2 * 0.4,
  },
});
