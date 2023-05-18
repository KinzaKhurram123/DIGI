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
  main_view: {
    flex: 1,
  },
  image_card: {
    height: SIZES.padding * 4.5,
    width: SIZES.padding * 4.5,
    marginRight: SIZES.padding2,
    padding: SIZES.padding2,
    backgroundColor: COLORS.white,
  },
  footer: {
    height: SIZES.padding * 2,
  },
  flatlist: {
    margin: SIZES.padding2-3,
  },
  heading_view: {
    width: '100%',
    alignItems: 'flex-start',
    padding: SIZES.padding,
  },
  heading_text: {
    ...FONTS.Bold22,
    color:COLORS.primary
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  main_view: {
    flex: 1,
    padding: SIZES.padding2,
  },
  btn: {
    backgroundColor: COLORS.light_gray2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.padding * 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:SIZES.padding
  },
});
