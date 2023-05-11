import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../Components/Constant';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Buttons from '../../Components/Buttons/buttons';
import CustomCheckBox from '../../Components/CustomCheckBox';

const Filter = () => {
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
          <Text style={styles.title}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.title, {paddingRight: 15}]}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.priceRange}>Categories</Text>
      <View style={{paddingHorizontal:SIZES.padding}}>
        <Text style={styles.text}>Medician</Text>
        <Text style={styles.text}>Baby and Mother care</Text>
        <Text style={styles.text}>Personal care</Text>
        <Text style={styles.text}>Otc and Health Need</Text>
        <Text style={styles.text}>Food and bevangers</Text>
        <Text style={styles.text}>Nutrition and Suplements</Text>
        <Text style={styles.text}>Devices and appliences</Text>
      </View>
      <Text style={styles.priceRange}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <TouchableOpacity style={styles.Btn}>
          <Text>Min Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text>Max Price</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: SIZES.padding * 3}} />
      <View style={{justifyContent: 'center', flex: 1, padding: SIZES.padding}}>
        <Buttons
          buttonText={'Apply'}
          textStyle={styles.btn_text}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 16,
  },
  title: {
    color: COLORS.white,
    paddingLeft: 19,
    fontSize: 20,
  },
  priceRange: {
    color: COLORS.primary,
    padding: 15,
    ...FONTS.Bold20,
    
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Btn: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 55,
    borderColor: COLORS.primary,
    marginTop: 25,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.secondary,
  },
  btn_text: {
    ...FONTS.Bold11,
  },
  text:{
    ...FONTS.Medium14,
     color:COLORS.primary
  }
});
