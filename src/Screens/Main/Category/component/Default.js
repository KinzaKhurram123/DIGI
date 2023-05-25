import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../Components/Constant';
import {Icon} from '../../../../Components';
const Default = ({lable, tittle, icon,onPress, iconStyle}) => {
  return (
    <View>
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.main_view}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{lable}</Text>
        <Text style={styles.title}>{tittle}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        {icon && <Icon style={[styles.icon, iconStyle]} name={icon} />}
      </View>
    </TouchableOpacity>
    </View>
  );
};
export default Default;
const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.padding2,
    borderBottomColor: COLORS.white,
  },
  title: {
    ...FONTS.Light13,
    marginTop: SIZES.padding2 * 0.5,
  },
  icon: {
    marginTop: SIZES.padding2 * 0.1,
  },
});
