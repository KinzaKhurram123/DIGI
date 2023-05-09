import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../../Components';
import {styles} from './index.style';

const OrderPlaced = () => {
  return (
    <SafeAreaView>
      <CommonHeader
        title={'Order Placed'}
        onPressIcon={() => navigation.goBack()}
        isBackIcon={false}
      />
      <View style={styles.main_view}>
        <ScrollView
          style={styles.safe_area}
          showsVerticalScrollIndicator={false}>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderPlaced;
