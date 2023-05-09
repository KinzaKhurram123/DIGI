import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CommonHeader, Icon} from '../../../Components';
import {styles} from './index.style';
import {images, SIZES} from '../../../Components/Constant';
import {primary_location_icon} from '../../../assets/icons';
import Buttons from '../../../Components/Buttons/buttons';

const OrderPlaced = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Order Placed'}
        onPressIcon={() => navigation.goBack()}
        isBackIcon={false}
      />
      <View style={styles.main_view}>
        <ScrollView
          style={styles.safe_area}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Thank you!</Text>
          <Text style={styles.desc}>Your order has been placed</Text>
          <View style={styles.image_row}>
            <Image
              style={styles.left_image}
              source={images.order_left_image}
              resizeMode="contain"
            />
            <Image
              style={styles.right_image}
              source={images.order_right_image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.delivery_text}>Delivering To</Text>
          <View style={styles.address_view}>
            <Icon name={primary_location_icon} />
            <Text style={styles.address_text}>
              Shop # 65 Block 1, Askari V, Malir Cantt, Karachi.
            </Text>
          </View>
          <Text style={styles.summary_text}>Order Summary</Text>
          <View style={styles.text_row}>
            <Text style={styles.order_text}>Order Total</Text>
            <Text style={styles.order_price}>Rs 1560</Text>
          </View>
          <View style={styles.text_row}>
            <Text style={styles.order_text}>Items Discount</Text>
            <Text style={styles.order_price}>Rs 60</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.text_row}>
            <Text style={styles.total_text}>Total Bill</Text>
            <Text style={styles.total_price}>Rs 1500</Text>
          </View>
          <Buttons style={styles.btn} buttonText={'Return to Home Page'} onPress={() => navigation.navigate('Main')}/>
          <View style={{height: SIZES.padding}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderPlaced;
