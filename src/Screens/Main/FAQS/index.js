import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader} from '../../../Components';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import { forward_arrow_icon } from '../../../assets/icons';
import { SIZES } from '../../../Components/Constant';
import LineTittle from '../../../Components/LineTittle';


const faqs = [
    {
      id: 1,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 2,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 3,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 4,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 5,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 6,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 7,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 8,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 9,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 10,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 11,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
    {
      id: 12,
      title: "Lorum Ipsum",
      icon: forward_arrow_icon,
    },
  ];
  
const FAQS = ({navigation}) => {
  const [btnType, setBtnType] = useState('General');
  const [showDesc, setShowDesc] = useState(null);
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader title={'FAQS'} onPressIcon={() => navigation.goBack()} />
      <View style={styles.main_view}>
        <View style={{flex: 1}}>
          <View style={styles.tab_row}>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType('General')}>
              <Text
                style={
                  btnType === 'General'
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }>
                General
              </Text>
              {btnType === 'General' ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType("Delivery")}
            >
              <Text
                style={
                  btnType === "Delivery"
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }
              >Delivery</Text>
              {btnType === "Delivery" ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType("Order")}
            >
              <Text
                style={
                  btnType === "Order"
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }
              
              >Order</Text>
              {btnType === "Order" ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
          </View>
          
          <View style={styles.list_view}>
            <FlatList
              data={faqs}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={
                <View style={{ height: SIZES.padding * 2 }} />
              }
              keyExtractor={(item) => item?.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    showDesc === index ? setShowDesc(null) : setShowDesc(index)
                  }
                >
                  <LineTittle
                    style={styles.list_view_content}
                    iconStyle={
                      showDesc === index
                        ? styles.icon_active
                        : styles.icon_inactive
                    }
                    tittle={item.title}
                    icon={item.icon}
                  />
                  {showDesc === index && (
                    <View style={styles.desc_view}>
                      <Text
                        style={styles.desc_text}
                       
                      > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FAQS;
