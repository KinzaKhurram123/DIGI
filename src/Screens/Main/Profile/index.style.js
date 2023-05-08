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
  name:{
    textAlign:"center",
    color:COLORS.primary,
    ...FONTS.Bold27,
  },

  email:{
    textAlign:"center",
    color:COLORS.primary,
    ...FONTS.Regular16,
  },
  view:{
   flexDirection:"row",
   padding:SIZES.padding2*2.5,
   justifyContent:"space-between",
   paddingEnd:SIZES.padding*2.5,
   paddingStart:SIZES.padding*3
  }
});
