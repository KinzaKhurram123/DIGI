import {SafeAreaView, StyleSheet,ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, IconInputField} from '../../../Components';
import {edit_icon} from '../../../assets/icons';
import {SIZES} from '../../../Components/Constant';
import SingleOrderView from './Components/SingleOrderView';
import Buttons from '../../../Components/Buttons/buttons';

const History = ({navigation}) => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'History'}
        isDrawer={false}
        style={styles.view}
        onpresscart={() => navigation.navigate('MyCart')}
        onPressIcon={() => navigation.goBack()}
        isprofile={false}
      />
      <View style={styles.main_view}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <IconInputField
            value={name}
            placeholder="Name"
            rightIcon={edit_icon}
            onChangeText={text => setName(text)}
          />
          <IconInputField
            rightIcon={edit_icon}
            value={address}
            onChangeText={text => setAddress(text)}
            placeholder="Address"
          />
          <View style={{height: SIZES.padding * 1.5}} />
          <Text style={styles.number}>Mobile Number</Text>
          <Text style={styles.number}>+92 315 773 2534</Text>
          <View style={styles.text_row}>
            <Text style={styles.order_text}>{'Order History'}</Text>
            <View>
              <Text style={styles.order_title}>Morning & Energy</Text>
              <Text style={styles.order_desc}>Clean & Clear</Text>
            </View>
          </View>
          <SingleOrderView
            status={'completed'}
            isFirst={true}
            name={'Daniel Jaen'}
            name1={'Augmentin - GSK'}
            name2={'Morning Energy - Clean & Clear'}
            price1={'315'}
            price2={'315'}
            order_id={'12345678900000'}
            order_date={'28th Mar 22'}
            eta={'03rd Apr 22'}
            btntext={'Re order'}

            quantity={'100'}
          />
          <SingleOrderView
            status={'Pending'}
            name={'Daniel Jaen'}
            name1={'Augmentin - GSK'}
            name2={'Morning Energy - Clean & Clear'}
            price1={'315'}
            price2={'315'}
            btntext={'Cancle Order'}
            order_id={'12345678900000'}
            order_date={'28th Mar 22'}
            eta={'03rd Apr 22'}
            quantity={'100'}
          />

          <Buttons buttonText={'New Order'} style={styles.btn} />
          <View style={{height: SIZES.padding}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;
