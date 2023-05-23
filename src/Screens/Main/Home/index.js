import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../Components/Constant';
import {
  CommonHeader,
  Image_Craousal,
  SingleCategoryView,
  SingleImageCardView,
  SingleOtcView,
} from '../../../Components';
import {styles} from './indexstyle';
import {CommonActions} from '@react-navigation/native';
import {search_icon_blue} from '../../../assets/icons';
const Brandes = [
  images.logos_gsk,
  images.logos_abbott,
  images.logos_nestle,
  images.logo_fine,
];
const categoriess = [
  {
    id: 1,
    image: images.category_healthcare,
    name: 'OTC & Health Need',
  },
  {
    id: 2,
    image: images.category_care,
    name: 'Personal Care',
  },
  {
    id: 3,
    image: images.category_embryo,
    name: 'Baby and Mother Care',
  },
  {
    id: 4,
    image: images.category_hair_care,
    name: 'Nutirtion Supplements',
  },
  {
    id: 6,
    image: images.category_oral,
    name: 'Devices and appliences',
  },
  {
    id: 7,
    image: images.category_skin_care,
    name: 'Skin care',
  },
];
const OTC = [
  {
    id: 1,
    image: images.medicine_paracetamol,
    name: 'Paracetamol',
    price: '500',
    price: '500',
  },
  {
    id: 2,
    image: images.medicine_augmentin,
    name: 'Augmentin',
    price: '500',
  },
];

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.openDrawer()}
        title={'Pharamacy'}
        onPressNotification={() => navigation.navigate('Notification')}
        isIcon={true}
        isDrawer={true}
        isHome={true}
        search={search_icon_blue}
        isprofile={true}
        style={styles.view}
        hasSearchBar={true}
        onPressCross={() => navigation.goBack()}
        onpresscart={() => navigation.navigate('MyCart')}
        onPressSearchBar={() => navigation.navigate('Search')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn}
              onPress={() => navigation.navigate('MedicianA_Z')}>
              <Text style={styles.text}>Medician A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn}
              onPress={() => navigation.navigate('Medician_systemic')}>
              <Text style={styles.text}>Medicine by Systemic Class</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image_Craousal />
        <View style={styles.main_view}>
          <View>
            <View style={styles.heading_view}>
              <Text style={styles.heading_text}>Brandes</Text>
            </View>
          </View>
          <FlatList
            style={styles.flatlist}
            horizontal
            data={Brandes}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate('BrandScreen')}>
                  <SingleImageCardView
                    key={item.id}
                    style={styles.image_card}
                    resizeMode="contain"
                    image={item}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.heading_view}>
            <Text style={styles.heading_text}>Categories</Text>
          </View>
          <FlatList
            style={styles.flatlist}
            horizontal
            data={categoriess}
            keyExtractor={item => item?.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <SingleCategoryView
                  image={item.image}
                  name={item.name}
                  onPress={() => navigation.navigate('Category')}
                />
              );
            }}
          />
          <View style={styles.heading_view}>
            <Text style={styles.heading_text}>OTC</Text>
          </View>
          <FlatList
            style={styles.flatlist}
            horizontal
            data={OTC}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <SingleOtcView
                  name={item.name}
                  price={item.price}
                  navigate={() => navigation.navigate('OTC')}
                  image={item.image}
                  keyExtractor={item => item?.id}
                  onPress={() => {
                    dispatch({type: 'SET_PRESCRIPTION', payload: true});
                    navigation.navigate('ViewProduct', {data: item});
                  }}
                />
              );
            }}
          />
        </View>
        <View style={{height: SIZES.padding * 1.2}} />
      </ScrollView>
    </SafeAreaView>
  );
}
