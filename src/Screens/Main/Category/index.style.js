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
    alignItems:"center"
},
main_view: {
    flex: 1,
    backgroundColor: COLORS.white,
},
});
