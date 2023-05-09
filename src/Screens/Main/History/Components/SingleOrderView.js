import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../Components/Constant';
import {Text} from 'react-native-svg';
import Buttons from '../../../../Components/Buttons/buttons';

const SingleOrderView = ({
  status,
  name1,
  name2,
  price1,
  price2,
  order_id,
  order_date,
  eta,
  name,
  quantity,
  isFirst = false,
  btntext
}) => {
  return (
    <View style={styles.main_view}>
      <View style={styles.top_row}>
        <Text style={styles.status_text}>
          {isFirst ? 'Order naiDetails - Status' : 'Order Details - Status'}{' '}
        </Text>
        <View
          style={[
            styles.status_view,
            {
              backgroundColor: status === 'Completed' ? '#DCFFDF' : '#FFECDC',
            },
          ]}>
          <Text
            style={[
              styles.status,
              {
                color: status === 'Completed' ? '#06AB48' : '#C57E42',
              },
            ]}>
            {status}
          </Text>
        </View>
      </View>
      <View style={{height: SIZES.padding2}} />
      <View style={styles.top_row}>
        <Text style={styles.medicine}>{name1}</Text>
        <Text style={styles.medicine}> {'Rs. ' + price1} </Text>
      </View>
      <View style={styles.top_row}>
        <Text style={styles.medicine}>{name2} </Text>
        <Text style={styles.medicine}>{'Rs. ' + price2} </Text>
      </View>
      <View style={{height: SIZES.padding2}} />
      <View style={styles.top_row}>
        <View>
          <Text style={styles.key}>{'ORDER ID:'} </Text>
          <Text style={styles.value}> {order_id}</Text>
        </View>
        <View>
          <Text style={styles.key}> {'ORDER DATE'} </Text>
          <Text style={styles.value}>{order_date}</Text>
        </View>
        <View>
          <Text style={styles.key}> ETA:</Text>
          <Text style={styles.value}>{eta}</Text>
        </View>
      </View>
      <View style={{height: SIZES.padding2}} />
      <View style={styles.top_row}>
        <View>
          <Text style={styles.key}> {'Distributor Name'} </Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View>
          <Text style={styles.key}> {'qty'} </Text>
          <Text style={styles.value}>{quantity} </Text>
        </View>
        <Buttons
          style={styles.btn}
          buttonText={btntext}
          textStyle={{...FONTS.Medium11}}
        />
      </View>
    </View>
  );
};

export default SingleOrderView;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.light_gray1,
    padding: SIZES.padding2,
    marginTop: SIZES.padding * 1.5,
    shadowColor: 'rgba(170, 33, 33, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  top_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status_text: {
    ...FONTS.Medium14,
    textAlign: 'left',
    color: COLORS.black,
  },
  status_view: {
    paddingHorizontal: SIZES.padding2,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    ...FONTS.Medium11,
  },
  medicine: {
    ...FONTS.Medium12,
    color: '#333333',
  },
  key: {
    color: '#667080',
    textAlign: 'left',
    ...FONTS.Regular11,
  },
  value: {
    color: '#333333',
    textAlign: 'left',
    ...FONTS.Medium11,
  },
  btn: {
    width: '30%',
    height: 33,
    marginTop: 0,
  },
});
