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
      title: 'Our Store',
      goto: () => navigation.navigate('OurStore'),
    },
    {
      title: 'Profile',
      goto: () => navigation.navigate('profile'),
    },
    {
      title: 'Carees',
      goto: () => navigation.navigate('Carees'),
    },
    {
      title: 'Blog',
      goto: () => navigation.navigate('Blog'),
    },
    {
      title: 'Carees',
      goto: () => navigation.navigate('profile'),
    },
    {
      title: 'Contact Us',
      goto: () => props.navigation.navigate('Contactus'),
    },
  ];
  const Categories = [
    {
      title: 'Medician',
      goto: () => props.navigation.navigate('Medician'),
    },
    {
      title: 'Baby and Mother Care',
      goto: () => props.navigation.navigate('Care'),
    },
    {
      title: 'Personal Care',
      goto: () => props.navigation.navigate('personalcare'),
    },
    {
      title: 'OTC and Health Need',
      goto: () => props.navigation.navigate('Carees'),
    },
    {
      title: 'Food and Beverages',
      goto: () => props.navigation.navigate('Beverages'),
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
      goto: () => props.navigation.navigate('Medician'),
    },
  ];
  const Supports = [
    {
      title: 'FAQS',
      goto: () => props.navigation.navigate('FAQS'),
    },
    {
      title: 'Card Discounts',
      goto: () => props.navigation.navigate('Discounts'),
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
      {/* <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{paddingLeft: 30, marginTop: 50}}>
            <Image
              source={images.logo}
              style={{justifyContent: 'flex-start'}}
            />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <Icon name={close_black_icon} />
            </TouchableOpacity>
          </View>
        </View> */}
      {/* <View style={{padding: 15, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Navigate</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
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
          <View style={{padding: 10, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>Categories</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
            </View>
            <FlatList
              data={Categories}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={styles.faltlistitem}
                  onPress={item.goto}>
                  <Text style={{color: 'white', fontSize: 15}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{padding: 10, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>Supports</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
            </View>
            <FlatList
              data={Supports}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={styles.faltlistitem}
                  onPress={item.goto}>
                  <Text style={{color: 'white', fontSize: 15}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity style={{padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Image
                source={images.blog_image}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                  margin: 4,
                }}
              />
              <Text style={{color: '#FF4445', fontSize: 20}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View> */}
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
