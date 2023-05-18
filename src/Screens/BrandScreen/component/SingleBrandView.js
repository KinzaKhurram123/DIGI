import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../Components/Constant'
import { add_red_icon, add_round_icon } from '../../../assets/icons'
import { Icon } from '../../../Components'

const SingleBrandView = ({onPress,image2, onPressAdd,price,name}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.main_view}>
        <View style={styles.image_view}>
            <Image source={image2} style={styles.image}/>
        </View>
        <View style={{paddingHorizontal: SIZES.padding * 0.2}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{'Rs' + price}</Text>
      </View>
      <TouchableOpacity onPress={onPressAdd} style={styles.add_view}>
        <Icon name={add_red_icon} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default SingleBrandView

const styles = StyleSheet.create({
    main_view: {
        width: '44%',
        borderRadius: SIZES.padding2,
        marginTop: SIZES.padding2,
        marginHorizontal: SIZES.padding2 * 0.8,
      },
      image_view: {
        height: SIZES.padding * 8.5,
        width: '100%',
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.padding2,
        borderTopRightRadius: SIZES.padding2,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        borderRadius: SIZES.padding2 * 0.8,
      },
      price: {
        color: COLORS.secondary,
      },
      image: {
        height: '70%',
        width: '70%',
        alignSelf: 'center',
        marginTop:SIZES.padding,
        borderRadius: SIZES.padding2 * 0.8,
      },
      name: {
        textAlign: 'left',
        ...FONTS.Regular14,
        marginTop: SIZES.padding2 * 0.5,
        color:COLORS.primary
      },
      icon_view: {
        alignItems: 'flex-end',
      },
      add_view: {
        backgroundColor: '#DD3333',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.padding2 * 0.3,
        marginRight: SIZES.padding2,
        borderRadius: SIZES.padding,
        alignSelf: 'flex-end',
      },
      add_text: {
        color: COLORS.white,
        ...FONTS.Regular24,
      },
})