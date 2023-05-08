import {StyleSheet, Text, View} from 'react-native';
import React , {useState}from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {CommonHeader, Icon} from '../../../Components';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../Components/Constant';
import { lock_icon } from '../../../assets/icons';
const rewards = [
  {
    id: 1,
    price: "Rs 50",
    points: "1000 more points to go",
  },
  {
    id: 2,
    price: "Rs 50",
    points: "1000 more points to go",
  },
  {
    id: 3,
    price: "Rs 50",
    points: "1000 more points to go",
  },
  {
    id: 4,
    price: "Rs 50",
    points: "1000 more points to go",
  },
  {
    id: 5,
    price: "Rs 50",
    points: "1000 more points to go",
  },
  {
    id: 6,
    price: "Rs 50",
    points: "1000 more points to go",
  },
];
const Rewards = ({navigation}) => {
  const [toggleTabs, setToggleTabs] = useState('Reward Wallet');

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader onPressIcon={() => navigation.goBack()} title={'Rewards'} />
      <View style={styles.main_view}>
        
        <Text style={styles.balance_text}>Your Balance</Text>
        <Text style={styles.points_text}>100 Points</Text>
        <Text style={styles.expiring_points_text}>
          50 Points expiring on May 22 2022
        </Text>
        <View style={styles.tab_row}>
          <TouchableOpacity style={[
            styles.tab_view, {
              borderBottomColor: toggleTabs === 'Reward Wallet' ? COLORS.secondary : COLORS.border_grey
            }
          ]} onPress={() => setToggleTabs('Reward Wallet')}>
            <Text
              style={[styles.tab_text , {
                color:toggleTabs === 'Reward Wallet' ? COLORS.primary : COLORS.text_placeholder
              }]}

            >Reward Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.tab_view, {
              borderBottomColor: toggleTabs === 'Transactions' ? COLORS.secondary : COLORS.border_grey
            }
          ]} onPress={() => setToggleTabs('Transactions')}>
            <Text
               style={[styles.tab_text , {
                color:toggleTabs === 'Transactions' ? COLORS.primary : COLORS.text_placeholder
              }]}
           
            >Transactions</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        data={rewards}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: SIZES.padding }}></View>}
        keyExtractor={item => item?.id}
        renderItem={({ item }) => (
          <View style={styles.card_view}>
            <View>
              <Text style={styles.card_price} >{item.price}</Text>
              <Text style={styles.card_points} >{item.points}</Text>
            </View>
            <TouchableOpacity style={styles.card_btn} >
              <Icon name={lock_icon} />
              <Text style={styles.btn_text} >Locked</Text>
            </TouchableOpacity>
          </View>
        )}
        />

      </View>
    </SafeAreaView>
  );
};

export default Rewards;
