import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../Constant';
import SingleCardImageView from './SingleImageCardView';
import SingleCard from './component/SingleCard';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '..';
import {
  add_round_icon,
  back_arrow_icon,
  close_icon,
  substract_round_icon,
} from '../../assets/icons';
import Buttons from '../Buttons/buttons';

const CardView = ({onPress}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={{height: SIZES.padding, marginTop: SIZES.padding}} />
      <View style={styles.main_view}>
        <View style={styles.card_view}>
          <View style={styles.card_left_view}>
            {/* <SingleCard /> */}
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginLeft: SIZES.padding2 * 0.7,
                flexDirection: 'row',
              }}>
              <View style={styles.card_content}>
                <Text style={styles.name_text}>Augmentin</Text>
                <Text style={styles.quantity_text}>GSk</Text>
              </View>
              <View style={styles.card_content}>
                <Text
                  style={{
                    color: COLORS.primary,
                    padding: SIZES.padding * 0.4,
                  }}>
                  View Details
                </Text>

                <View style={styles.counter_view}>
                  <TouchableOpacity>
                    <Icon name={substract_round_icon} />
                  </TouchableOpacity>
                  <View style={styles.number_view}>
                    <Text style={styles.total_num_text}>1</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name={add_round_icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginLeft: SIZES.padding,
            flexDirection: 'row',
            margin: SIZES.padding,
          }}>
          <Text style={{color: COLORS.secondary, ...FONTS.Bold15}}>Total</Text>
          <Text style={{color: COLORS.secondary, ...FONTS.Bold15}}>Rs 500</Text>
        </View>
        <Buttons
          style={styles.btn}
          buttonText={'Add to Cart'}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardView;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  btn: {
    backgroundColor: COLORS.secondary,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'flex-end',
    padding: SIZES.padding * 10,
    backgroundColor: COLORS.white,
  },
  card_view: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_left_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  card_content: {
    alignItems: 'flex-start',
  },
  name_text: {
    ...FONTS.Bold17,
    color: COLORS.primary,
  },
  quantity_text: {
    ...FONTS.Medium14,
    color: COLORS.primary,
    marginTop: SIZES.padding2 * 0.3,
  },
  card_left_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  price_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.padding2 * 0.4,
  },
});
