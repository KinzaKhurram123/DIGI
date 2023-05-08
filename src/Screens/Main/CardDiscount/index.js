import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon} from '../../../Components';
import { FlatList } from 'react-native-gesture-handler';
import { SIZES } from '../../../Components/Constant';
import { bank_icon, grey_forward_icon } from '../../../assets/icons';


const card_discounts = [
    {
      id: 1,
      name: "ABC Bank",
      discount: "Promotion 10% off",
    },
    {
      id: 2,
      name: "ABC Bank",
      discount: "Promotion 10% off",
    },
    {
      id: 3,
      name: "ABC Bank",
      discount: "Promotion 10% off",
    }
   
  ];
const CardDiscount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.goBack()}
        title={'Card Discounts'}
      />
      <View style={styles.main_view}>
        <View>
            <FlatList
            data={card_discounts}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: SIZES.padding }} />}
            keyExtractor={item => item?.id}
            renderItem={({ item }) => (
                <View style={styles.card_view}>
                  <View style={styles.icon_view} >
                    <Icon name={bank_icon} />
                  </View>
                  <View style={styles.card_content}>
                    <Text style={styles.name}>{item.name} </Text>
                    <Text style={styles.discount} >{item.discount}</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name={grey_forward_icon} />
                  </TouchableOpacity>
                </View>
              )}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardDiscount;
