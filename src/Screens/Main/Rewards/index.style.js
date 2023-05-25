import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  balance_text: {
    ...FONTS.Regular12,
    marginTop: SIZES.padding2,
    alignSelf: 'center',
    color: COLORS.primary,
  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
  points_text: {
    ...FONTS.Bold19,
    alignSelf: 'center',
    color: COLORS.primary,
  },
  expiring_points_text: {
    ...FONTS.Regular14,
    alignSelf: 'center',
    color:COLORS.primary
  },
  tab_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding,
    width: '80%',
    paddingHorizontal: SIZES.padding,
  },
  tab_view: {
    width: '100%',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: SIZES.padding2 * 0.8,
    borderBottomColor: COLORS.border_grey,
  },
  tab_text: {
    ...FONTS.Regular13,
    width: '100%',
    color: COLORS.primary,
  },
  card_view: {
    marginTop: SIZES.padding,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    ...FONTS.Medium16,
    color: COLORS.primary,
  },
  card_points: {
    textAlign: 'left',
    ...FONTS.Medium11,
    color: COLORS.Light_blue,
    color: COLORS.primary,
  },
  card_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding2 * 0.8,
    backgroundColor: COLORS.secondary,
    height: 30,
    borderRadius: SIZES.padding,
  },
  btn_text: {
    color: COLORS.white,
    ...FONTS.Regular11,
    marginLeft: SIZES.padding2 * 0.8,
    marginTop: SIZES.padding2 * 0.2,
  },
});
