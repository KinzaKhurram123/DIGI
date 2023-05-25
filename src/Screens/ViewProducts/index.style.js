import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../Components/Constant';
import Signup from '../Main/Signup';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
  },
  tab_view: {
    minHeight: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2.5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
    marginRight: SIZES.padding2 * 0.5,
  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
  tab_view_inactive: {
    minHeight: 90,
    width: Dimensions.get('screen').width / 2.5,
    marginRight: SIZES.padding2 * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.border_grey,
    paddingBottom: SIZES.padding2 * 0.5,
    marginRight: SIZES.padding2 * 0.5,
  },
  tab_view_text: {
    color: COLORS.primary,
    ...FONTS.Regular12,
  },
  card_image_view: {
    width: '100%',
    height: 200,
    // marginTop: SIZES.padding * 2,
    borderRadius: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    padding: SIZES.padding,
  },
  capsule_name: {
    ...FONTS.Medium13,
    flex: 1,
    textAlign: 'left',
  },
  cart_btn: {
    height: 50,
    marginTop: 0,
    backgroundColor: COLORS.secondary,
  },
  price: {
    ...FONTS.Bold17,
    fontWeight: '600',
  },
  desc: {
    textAlign: 'left',
    marginTop: -SIZES.padding*1.2,
    ...FONTS.Regular12,
    padding:SIZES.padding
  },
  tags: {
    textAlign: 'left',
    marginVertical: SIZES.padding,
    ...FONTS.Medium12,
  },
});
