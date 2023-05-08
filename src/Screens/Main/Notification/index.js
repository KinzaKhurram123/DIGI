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

const Notification = () => {
  return (
    <SafeAreaView>
      <CommonHeader title={'Notification'} isIcon={false} />
      <View style={styles.main_view}>
          <FlatList
            data={notification}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: SIZES.padding}}></View>}
            keyExtractor={item => item?.id}
            renderItem={({item}) => (
              <View style={styles.card_view}>
                <View>
                  <Text style={styles.card_price}>{item.price}</Text>
                  <Text style={styles.card_points}>{item.points}</Text>
                </View>
                <TouchableOpacity style={styles.card_btn}>
                  <Icon name={lock_icon} />
                  <Text style={styles.btn_text}>Locked</Text>
                </TouchableOpacity>
              </View>
            )}
          />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
