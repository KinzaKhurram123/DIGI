import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../Components/Constant';
import {close_black_icon, close_icon, logout_icon} from '../assets/icons';
import {Icon} from '../Components';

const CustomDrawer = ({navigation}) => {
  const arr = [
    {
      title: 'Home',
      goto: () => navigation.navigate('Home'),
    },
    {
      title: 'Rewards',
      goto: () => navigation.navigate('Rewards'),
    },
    {
      title: 'History',
      goto: () => navigation.navigate('History'),
    },
    {
      title: 'About',
      goto: () => navigation.navigate('About'),
    },
    {
      title: 'Our Store',
      goto: () => navigation.navigate('BrandScreen'),
    },
    {
      title: 'Profile',
      goto: () => navigation.navigate('Profile'),
    },
    {
      title: 'Carees',
      goto: () => props.navigation.navigate('cares'),
    },
    {
      title: 'Blog',
      goto: () => navigation.navigate('Blog'),
    },
    {
      title: 'My Order',
      goto: () => navigation.navigate('MyOrder'),
    },
    {
      title: 'Notification',
      goto: () => navigation.navigate('Notification'),
    },
  ];
  const Categories = [
    {
      title: 'Medician',
      goto: () => navigation.navigate('Category'),
    },
    {
      title: 'Baby and Mother Care',
      goto: () => props.navigation.navigate('Category'),
    },
    {
      title: 'Personal Care',
      goto: () => props.navigation.navigate('Category'),
    },
    {
      title: 'OTC and Health Need',
      goto: () => navigation.navigate('OTC'),
    },
    {
      title: 'Food and Beverages',
      goto: () => navigation.navigate('ViewProduct'),
    },
    {
      title: 'Nutrition and Supplements',
      goto: () => props.navigation.navigate('profile'),
    },
    {
      title: 'Devices and appliences',
      goto: () => props.navigation.navigate('Devices'),
    },
    {
      title: 'Persnal Hygeins and Household',
      goto: () => props.navigation.navigate('Household'),
    },
    {
      title: 'Medician A-Z',
      goto: () => navigation.navigate('MedicianA_Z'),
    },
  ];
  const Supports = [
    {
      title: 'FAQS',
      goto: () => navigation.navigate('FAQS'),
    },
    {
      title: 'Card Discounts',
      goto: () => navigation.navigate('CardDiscount'),
    },
    {
      title: 'Privacy Policy',
      goto: () => props.navigation.navigate('Privacypolicy'),
    },
    {
      title: 'Terms of Services',
      goto: () => props.navigation.navigate('services'),
    },
    {
      title: 'Return Policy',
      goto: () => props.navigation.navigate('ReturnPolicy'),
    },
    {
      title: 'Shipping Terms',
      goto: () => props.navigation.navigate('Shippping'),
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.main_view}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              width: '50%',
            }}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{width: '100%'}}
            />
          </View>
          <TouchableOpacity
            style={styles.icon_view}
            onPress={() => navigation.closeDrawer()}>
            <Icon name={close_icon} />
          </TouchableOpacity>
        </View>
        <View style={{height: SIZES.padding2}} />
        <View style={{padding: 15, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Navigate</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>
        <FlatList
          data={arr}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.faltlistitem} onPress={item.goto}>
              <Text style={{color: 'white', fontSize: 15}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{height: SIZES.padding2}} />
        <View style={{padding: 15, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Categories</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>
        <FlatList
          data={Categories}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.faltlistitem} onPress={item.goto}>
              <Text style={{color: 'white', fontSize: 15}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{height: SIZES.padding2}} />
        <View style={{padding: 15, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Support</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>
        <FlatList
          data={Supports}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.faltlistitem} onPress={item.goto}>
              <Text style={{color: 'white', fontSize: 15}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{height: SIZES.padding * 2}}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: SIZES.padding2,
          }}
          // onPress={}
        >
          <Icon name={logout_icon} />
          <Text
            style={{
              color: COLORS.secondary,
              marginLeft: SIZES.padding2,
              ...FONTS.Regular18,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  faltlistitem: {
    padding: 10,
  },
  main_view: {
    flex: 1,
    backgroundColor: COLORS.drawer_background,
    paddingTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 1.5,
  },
});
