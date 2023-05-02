import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { CommonHeader } from '../../Components';

const Rewards = () => {
  return (
    <SafeAreaView>
      <CommonHeader 
      title={'Rewards'}
      />
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({});
