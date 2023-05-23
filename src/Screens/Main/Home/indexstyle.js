import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';
export const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  safe_area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  // main_view: {
  //   flex: 1,
  // },
  image_card: {
    height: SIZES.padding * 4.5,
    width: SIZES.padding * 4.2,
    marginRight: SIZES.padding2,
    padding: SIZES.padding2,
    backgroundColor: COLORS.white,
  },
  footer: {
    height: SIZES.padding * 2,
  },
  flatlist: {
    margin: SIZES.padding2 - 4,
  },
  heading_view: {
    width: '100%',
    alignItems: 'flex-start',
    padding: SIZES.padding2,
  },
  heading_text: {
    // ...FONTS.Bold20,
    fontFamily: 'Poppins',
    fontWeight:'bold',
    fontSize: 20,
    color: COLORS.primary,
    marginTop: SIZES.padding2,
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  text: {
    color: COLORS.primary,
    ...FONTS.Light10,
  },
  main_view: {
    flex: 1,
    marginTop: SIZES.padding2,
    marginLeft:SIZES.padding2
  },
  btn: {
    backgroundColor: COLORS.light_gray2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,

    borderRadius: SIZES.padding * 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingBottom:SIZES.padding2,
    // paddingTop:SIZES.padding2,
    padding: SIZES.padding2,
    paddingLeft: SIZES.padding,
    marginRight: SIZES.padding,
  },
  view: {
    borderBottomEndRadius: SIZES.padding,
    borderBottomStartRadius: SIZES.padding,
  },
});
