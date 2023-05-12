import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon, IconInputField} from '../../Components';
import {
  card_icon_secondary,
  payment_method_icon,
  primary_location_icon,
} from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../Components/Constant';
import Buttons from '../../Components/Buttons/buttons';

const Payment = ({navigation}) => {
  const [paymentOption, setSelectedPaymentOption] = useState('COD');
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader onPressIcon={() => navigation.goBack()} title={'Payment'} isprofile={false}/>
      <ScrollView style={styles.main_view} showsVerticalScrollIndicator={false}>
        <View style={styles.address_parent_view}>
          <Text style={styles.title}>Billing Address</Text>
          <View style={styles.address_view}>
            <Icon name={primary_location_icon} />
            <Text style={styles.address_text}>
              Shop # 65 Block 1, Askari V, Malir Cantt, Karachi.
            </Text>
          </View>
          <Text style={styles.title}>Payment Option</Text>

          <TouchableOpacity
            onPress={() => setSelectedPaymentOption('COD')}
            style={styles.radio_item}>
            <View style={styles.radio_button}>
              <View
                style={paymentOption === 'COD' && styles.radio_button_checked}
              />
            </View>
            <Text style={styles.radio_text}>Cash on Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentOption('Card')}
            style={styles.radio_item}>
            <View style={styles.radio_button}>
              <View
                style={paymentOption === 'Card' && styles.radio_button_checked}
              />
            </View>
            <Text style={styles.radio_text}>Card Payment</Text>
          </TouchableOpacity>
          <View style={styles.payment_icon_view}>
            <View style={styles.payment_icon_sub_view}>
              <Icon name={card_icon_secondary} />
            </View>
          </View>
        </View>
        <Text style={styles.payment_text}>Update Payment method</Text>
        <Text style={styles.payment_details_text}>
          Update your card details
        </Text>
        <View style={styles.row}>
          <View style={styles.input_column_one}>
            <Text style={styles.card_text} text="Name on Card" />
            <IconInputField style={styles.input} placeholder={'Olivia Rhye'} />
          </View>
          <View style={styles.input_column_two}>
            <Text style={styles.card_text}>Expiry</Text>
            <IconInputField
              placeholder={'06 / 2024'}
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.input_column_one}>
            <Text style={styles.card_text}>Card number</Text>
            <IconInputField
              icon={payment_method_icon}
              style={styles.input}
              iconStyle={{marginLeft: SIZES.padding2}}
              inputStyle={{marginLeft: SIZES.padding2}}
              keyboardType="number-pad"
              placeholder="1234 1234 1234 1234"
            />
          </View>
          <View style={styles.input_column_two}>
            <Text style={styles.card_text}>CVV</Text>
            <IconInputField
              placeholder={'...'}
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.input_column_one}>
            <Text style={styles.card_text}>Security Code</Text>
            <IconInputField style={styles.input} placeholder="Olivia Rhye" />
          </View>
          <View style={styles.input_column_two}>
            <Text style={styles.card_text} text="Zip/Postal Code" />
            <IconInputField
              placeholder={'. . .'}
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
        </View>
        <View
          style={[
            styles.row,
            {justifyContent: 'space-between', paddingVertical: 0},
          ]}>
          <Buttons
            style={[styles.button, styles.cancel_button]}
            textStyle={[styles.btn_text, {color: COLORS.primary}]}
            buttonText="Cancel"
            onPress={() => navigation.goBack()}
          />
          <Buttons
            style={[styles.button, styles.confirm_button]}
            textStyle={styles.btn_text}
            buttonText="Confirm Order"
            onPress={() => navigation.navigate('OrderPlaced')}
          />
        </View>
        <View style={{height: SIZES.padding * 2}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
