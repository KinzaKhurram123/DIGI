import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
    padding: SIZES.padding,
  },
  field_view: {
    paddingTop: SIZES.padding,
  },
  forgot_view: {
    marginTop: SIZES.padding,
  },
  forgot_text: {
    textAlign: 'left',
    ...FONTS.Regular12,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary,
  },
  btn: {
    backgroundColor: COLORS.secondary,
  },
  phone_input_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phone_code: {width: '25%', borderRadius: 0},
  phone_number: {width: '72%', borderRadius: 0},
  errors: {
    ...FONTS.Medium10,
    color: 'red',
    marginTop: 5,
    left: 110,
  },
});
