import {StyleSheet} from 'react-native';
import {sin} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding,
  },
  profile: {
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  profile_iamge: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
    color: COLORS.primary,
    ...FONTS.Bold14,
  },
  text:{
    textAlign: 'center',
    // flex: 1,
    justifyContent:"flex-start",
    color: COLORS.primary,
    ...FONTS.Medium11,
  },
  email: {
    textAlign: 'center',
    color: COLORS.primary,
    ...FONTS.Regular16,
  },
  view: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: SIZES.padding * 1.5,

    //  padding:SIZES.padding2*2.5,
    justifyContent: 'space-between',
    //  paddingEnd:SIZES.padding*2.5,
    //  paddingStart:SIZES.padding*3
  },
  btn: {
    marginTop: SIZES.padding * 3,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.padding,
  },
});
