import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from './Constant'
import { Icon } from '.'

const LineTittle = ({style,textStyle, tittle, price , icon, iconStyle}) => {
  return (
    <View style={[styles.mainView, style]}>
      <Text style={[styles.title, textStyle]}>{tittle}</Text>
      {price && <Text style={styles.price}>{`Rs ${price}`}</Text>}
      <View>
        {icon && <Icon style={[styles.icon, iconStyle]} name={icon}/>}
      </View>
    </View>
  )
}

export default LineTittle

const styles = StyleSheet.create({ mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1.4,
    paddingVertical: SIZES.padding2 * 1.5,
    borderBottomColor: COLORS.primary_border,
  },
  title: {
    ...FONTS.Regular15,
  },
  price: {
    ...FONTS.Regular15,
  },
  icon: {
    marginTop: SIZES.padding2 * 0.5,
  },})