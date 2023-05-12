import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon} from '../../Components';
import MapView, {Marker} from 'react-native-maps';
import {images, SIZES} from '../../Components/Constant';
import {primary_location_icon} from '../../assets/icons';
import Buttons from '../../Components/Buttons/buttons';

const Location = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.goBack()}
        title={'Confirm Deliver Location'}
        style={{paddingTop: SIZES.padding * 1.3}}
        titleStyle={{marginTop: SIZES.padding * 1.3}}
        isprofile={false}
      />
      <View style={styles.main_view}>
        <View style={styles.map_view}>
          <ImageBackground
            style={styles.main_view}
            source={images.map_image}></ImageBackground>
          <Text style={styles.text}>Current latitude: {region.latitude}</Text>
          <Text style={styles.text}>Current longitude: {region.longitude}</Text>
        </View>
        <View style={styles.bottom_view}>
          <Icon name={primary_location_icon} />
          <Text style={styles.desc}>
            Shop # 65 Block 1, Askari V,Malir Cantt, Karachi.
          </Text>
          <Buttons
            style={styles.btn}
            buttonText={'Confirm'}
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;
