import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white
  },
  card_view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: SIZES.padding2,
    marginTop: SIZES.padding,
    width: "90%",
    alignSelf: "center",
    shadowColor: 'rgba(170, 33, 33, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  icon_view:{
    backgroundColor:"#F7F4F3",
    padding:SIZES.padding2 * 0.5
  },
  card_content: {
    flex: 1,
    alignItems:"flex-start",
    marginLeft:SIZES.padding2
  },
  name: {
    ...FONTS.Regular13,
  },
  discount: {
    ...FONTS.Regular13,
    color:COLORS.secondary
  },
});
