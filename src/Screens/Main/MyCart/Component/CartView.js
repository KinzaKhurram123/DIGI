import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../../Components/Constant';
import SingleCardImageView from '../../../../Components/ImageView/SingleImageCardView';
import {Icon} from '../../../../Components';
import {add_round_icon, substract_round_icon} from '../../../../assets/icons';

const CartView = () => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.main_view}>
        <View style={styles.card_view}>
          <View style={styles.card_left_view}>
            <SingleCardImageView
              image={images.medicine}
              style={styles.card_image}
            />
            <View
              style={{
                flex: 1,
                flexDirection:'row',
                justifyContent: 'space-between',
                marginLeft: SIZES.padding2 * 0.7,
              }}>
              <View style={styles.card_content}>
                <Text style={styles.name_text}>ABC Capsules</Text>
                <Text style={styles.quantity_text}>GSK</Text>
              </View>
              <View style={styles.price_container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.card_price_currency}>Rs.</Text>
                  <Text style={styles.card_price}>780</Text>
                </View>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <View style={styles.counter_view}>
                    <TouchableOpacity>
                      <Icon name={substract_round_icon} />
                    </TouchableOpacity>
                    <View style={styles.number_view}>
                      <Text style={styles.total_num_text}>2</Text>
                    </View>
                    <TouchableOpacity>
                      <Icon name={add_round_icon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card_view}>
          <View style={styles.card_left_view}>
            <SingleCardImageView
              image={images.product_2}
              style={styles.card_image}
            />
            <View
              style={{
                flex: 1,
                flexDirection:'row',
                justifyContent: 'space-between',
                marginLeft: SIZES.padding2 * 0.7,
              }}>
              <View style={styles.card_content}>
                <Text style={styles.name_text}>ABC Capsules</Text>
                <Text style={styles.quantity_text}>GSK</Text>
              </View>
              <View style={styles.price_container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.card_price_currency}>Rs.</Text>
                  <Text style={styles.card_price}>780</Text>
                </View>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <View style={styles.counter_view}>
                    <TouchableOpacity>
                      <Icon name={substract_round_icon} />
                    </TouchableOpacity>
                    <View style={styles.number_view}>
                      <Text style={styles.total_num_text}>2</Text>
                    </View>
                    <TouchableOpacity>
                      <Icon name={add_round_icon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartView;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  card_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    shadowColor: 'rgba(170, 33, 33, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_left_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  card_image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.padding2,
    marginBottom: -SIZES.padding2,
  },
  card_content: {
    marginTop: SIZES.padding2 * 0.2,
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
  card_price: {
    color: '#dd3333',
    ...FONTS.Bold18,
  },
  card_price_currency: {
    ...FONTS.Regular10,
  },
});
