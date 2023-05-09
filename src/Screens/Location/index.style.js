import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map_view: {
    flex: 1,
    borderTopLeftRadius: SIZES.padding * 1,
    borderTopRightRadius: SIZES.padding * 1,
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottom_view: {
    position: "absolute",
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    bottom: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent:"space-between"
  },
  desc: {
    textAlign: "left",
    ...FONTS.Regular12,
    marginLeft: SIZES.padding2 * 0.5,
    flex:1,
  },
  btn: {
    width: "30%",
    backgroundColor: COLORS.secondary,
    marginLeft:SIZES.padding,
    marginTop:0
  }
});
