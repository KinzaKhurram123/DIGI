import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon, SingleImageCardView} from '../../../Components';
import SingleCartView from './SingleCartView';
import SingleCardImageView from '../../../Components/ImageView/SingleImageCardView';
import {COLORS, images, SIZES} from '../../../Components/Constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  add_round_icon,
  coupon_icon,
  substract_round_icon,
} from '../../../assets/icons';
import Buttons from '../../../Components/Buttons/buttons';
import CartView from './Component/CartView';

const MyCart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader onPressIcon={() => navigation.goback()} title={'My Cart'} />
      <View style={styles.main_view}>
        <View style={{flex: 1}}>
          <CartView/>
        </View>
        <View style={styles.coupon_view}>
          <View style={styles.coupon_inner_view}>
            <Icon name={coupon_icon} />
            <Text style={styles.coupon_text}>Enter Code</Text>
          </View>
          <Buttons
            style={styles.coupon_btn}
            buttonText="Apply"
            // onPress={navigation.navigate('DeliverOption')}
          />
        </View>
        <Text style={styles.payment_text}>Payment Summary</Text>
        <View style={styles.text_row}>
          <Text style={styles.order_text}>Order Total</Text>
          <Text style={styles.text_price}>Rs 1560</Text>
        </View>
        <View style={styles.text_row}>
          <Text style={styles.order_text}>Items Discount</Text>
          <Text style={styles.order_price}>Rs 60</Text>
        </View>
      </View>
      <View style={styles.text_row}>
        <Text style={styles.total_text}>Total Bill</Text>
        <Text style={styles.text_price}>Rs 1500</Text>
      </View>
      <View style={styles.btn_row}>
        <Buttons
         style={styles.btn}
         textStyle={styles.btn_text}
         buttonText="Continue Shopping"
         onPress={() =>
           navigation.dispatch(
             CommonActions.reset({
               routes: [{ name: "DrawerNavigation" }],
               index: 1,
             })
           )
         }
        />
           <Buttons
              style={styles.btn}
              buttonText="Check Out"
              textStyle={styles.btn_text}
             onPress={()=> navigation.navigate("SelectLocation")}
           />
      </View>
      <View style={{ height: SIZES.padding*2 }} />
    </SafeAreaView>
  );
};

export default MyCart;
