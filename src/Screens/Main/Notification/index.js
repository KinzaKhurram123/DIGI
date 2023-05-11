import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import CustomDrawer from '../../../Components/CustomDrawer';
import {CommonHeader, Icon} from '../../../Components';
import {styles} from './index.style';
import {images, SIZES} from '../../../Components/Constant';
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

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Notification'}
        isIcon={false}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <ScrollView
        >
        <Text style={styles.tab_text}>Today</Text>
        <View style={styles.card_view}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={images.profile}
              style={{width: 60, height: 60, margin: 20}}
            />
            <View style={{padding: SIZES.padding}}>
              <Text style={styles.card_price}>Elaymani</Text>
              <Text style={styles.card_points}>
                {' '}
                Lorem ipsum dolor sit amet,  consectetur adipiscing elit{' '}
              </Text>
              <Text>53 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.card_view}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={images.profile} style={{width: 60, height: 60}} />
            <View style={{padding: SIZES.padding}}>
              <Text style={styles.card_price}>Elaymani</Text>
              <Text style={styles.card_points}>
                {' '}
                Lorem ipsum dolor sit amet,  consectetur adipiscing elit{' '}
              </Text>
              <Text>53 min ago</Text>
            </View>
          </View>
        </View>
        <Text style={styles.tab_text}>yesterday</Text>
        <View style={styles.card_view}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={images.profile} style={{width: 60, height: 60}} />
            <View style={{padding: SIZES.padding}}>
              <Text style={styles.card_price}>Elaymani</Text>
              <Text style={styles.card_points}>
                {' '}
                Lorem ipsum dolor sit amet,  consectetur adipiscing elit{' '}
              </Text>
              <Text>53 min ago</Text>
            </View>
          </View>
        
        </View>
          <View style={{height: SIZES.padding}}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
