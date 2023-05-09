import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2,
  },

  coupon_view: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 3,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
  coupon_inner_view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.light_gray,
    paddingHorizontal: SIZES.padding2,
    marginRight: SIZES.padding2,
    width: "74%",
    height: 40,
    borderRadius: SIZES.padding,
  },
  coupon_text: {
    flex: 1,
    marginLeft: SIZES.padding2,
    textAlign: "left",
    ...FONTS.Regular14,
    fontWeight: "600",
    color: COLORS.text_placeholder,
  },
  coupon_btn: {
    flex: 1,
    height: 40,
    marginTop: 0,
  },
  payment_text: {
    textAlign: "left",
    ...FONTS.Bold14,
    marginTop: SIZES.padding * 3,
    fontWeight: "600",
    color: COLORS.primary,
    marginLeft: SIZES.padding,
  },
  text_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
  },
  order_text: {
    ...FONTS.Regular12,
    color: "rgba(9, 15, 71, 0.45)",
  },
  order_price: {
    ...FONTS.Regular12,
  },
  total_text: {
    ...FONTS.Regular14,
    color:COLORS.primary
  },
  text_price: {
    ...FONTS.Bold14,
    color:COLORS.primary

  },
  btn_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  btn: {
    width: "47%",
    height: 50,
    backgroundColor: COLORS.secondary,
  },
  btn_text: {
    ...FONTS.Bold11,
  },
});
