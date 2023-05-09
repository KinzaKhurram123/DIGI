import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';

export const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  number: {
    textAlign: 'left',
    ...FONTS.Regular16,
  },
  text_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding2,
  },
  order_text: {
    width: '50%',
    ...FONTS.Regular16,
    textAlign: 'left',
  },
  order_title: {
    textAlign: 'left',
    ...FONTS.Bold16,
  },
  order_desc: {
    textAlign: 'left',
    ...FONTS.Medium14,
    marginTop: -5,
  },
  btn: {
    marginTop: SIZES.padding * 3,
    backgroundColor: COLORS.secondary,
  },

  card_image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.padding2,
    marginBottom: -SIZES.padding2,
  },
  card_content: {
    // marginTop: SIZES.padding2 * 0.2,

    alignItems: 'flex-start',
  },
  name_text: {
    ...FONTS.Bold14,
  },
  quantity_text: {
    ...FONTS.Medium14,
    color: COLORS.primary,
    marginTop: -SIZES.padding2 * 0.3,
  },
  counter_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number_view: {
    borderColor: 'rgba(9, 33, 67, 0.11)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 30,
  },
  total_num_text: {
    ...FONTS.Bold12,
  },
});
