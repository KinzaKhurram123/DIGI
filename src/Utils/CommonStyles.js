import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "../Components/Constant";

export default CommonStyles = {
  fieldTitle: {
    color: COLORS.white,
    ...FONTS.Regular14,
    paddingLeft: SIZES.base,
    paddingBottom: SIZES.base,
  },
  text: {
    color: COLORS.primary,
    ...FONTS.Regular17,
  },
  title: {
    color: COLORS.white,
    ...FONTS.Regular24,
    paddingBottom: hp("3"),
  },
  cardTitle: {
    color: COLORS.primary,
    ...FONTS.Bold15,
  },
};
