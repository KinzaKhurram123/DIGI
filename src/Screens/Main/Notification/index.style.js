import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white

  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
  balance_text: {
    ...FONTS.Regular18,
    marginTop: SIZES.padding2,
       alignSelf: "center"

  },
  points_text: {
    ...FONTS.Bold26,
    alignSelf: "center"

  },
  expiring_points_text: {
    ...FONTS.Regular16,
    alignSelf: "center"
  },
  tab_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding,
    width: "100%",
    paddingHorizontal: SIZES.padding
  },
  tab_view: {
    width: "100%",
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: SIZES.padding2 * 0.8,
    borderBottomColor: COLORS.border_grey
  },
  tab_text: {
    ...FONTS.Regular23,
    padding: SIZES.padding,
    color: COLORS.primary

  },
  card_view: {
    marginTop: SIZES.padding,
    width: "90%",
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    shadowColor: 'rgba(170, 33, 33, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card_price: {
    textAlign: 'left',
    ...FONTS.Medium19,
  },
  card_points: {
    textAlign: 'left',
    ...FONTS.Medium12,
    color: COLORS.Light_blue,
    width: "70%"
  },
  card_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding2 * 0.8,
    backgroundColor: COLORS.secondary,
    height: 30,
    borderRadius: SIZES.padding
  },
  btn_text: {
    color: COLORS.white,
    ...FONTS.Regular13,
    marginLeft: SIZES.padding2 * 0.8,
    marginTop:SIZES.padding2 * 0.2
  }
});
