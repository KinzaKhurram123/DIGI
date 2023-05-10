import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import CustomDrawer from '../../../Components/CustomDrawer';
import {CommonHeader, Icon} from '../../../Components';
import {styles} from './index.style';
import {SIZES} from '../../../Components/Constant';
import {lock_icon} from '../../../assets/icons';
const notification = [
  {
    id: 1,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
  {
    id: 2,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
  {
    id: 3,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
  {
    id: 4,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
  {
    id: 5,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
  {
    id: 6,
    price: 'Rs 50',
    points: '1000 more points to go',
  },
];

const Notification = ({naviagation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
       <CommonHeader title={'Notification'} isIcon={false} onPressIcon={() => naviagation.goback()}/>
         <Text>hello</Text>
     
    </SafeAreaView>
  );
};

export default Notification;
