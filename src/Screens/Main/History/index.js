import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {ScrollView} from 'react-native-gesture-handler';
import {CommonHeader, IconInputField} from '../../../Components';
import {edit_icon} from '../../../assets/icons';
import {SIZES} from '../../../Components/Constant';

const History = () => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <SafeAreaView style={styles.safe_area}> 
      <CommonHeader title={'History'} onPressIcon={() => navigation.goBack()} />
      <View style={styles.main_view}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <IconInputField
        value={name}
        placeholder={"Name"}
        rightIcon={edit_icon}
        onChangeText={text =>setName(text)}
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
            <Text style={styles.order_text}>Order History</Text>
            <View>
              <Text style={styles.order_title}>Morning Energy</Text>
              <Text style={styles.order_desc}>Clean & Clear</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;
