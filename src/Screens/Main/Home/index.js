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
  SingleCategoryView,
  SingleImageCardView,
  SingleOtcView,
} from '../../../Components';
import {styles} from './indexstyle';
import {CommonActions} from '@react-navigation/native';

export default function Home({navigation}) {
  const Brandes = [images.logos_abbott, images.logos_gsk, images.logos_nestle];
  const categories = [
    images.category_care,
    images.category_embryo,
    images.category_gymnast,
    images.category_hair_care,
    images.category_healthcare,
    images.category_oral,
    images.category_skin_care,
  ];
  const categoriess = [
    {
      id: 1,
      image: images.category_care,
      name: 'OTC & Health Need',
    },
    {
      id: 2,
      image: images.category_embryo,
      name: 'Personal Care',
    },
    {
      id: 3,
      image: images.category_gymnast,
      name: 'Baby and Mother Care',
    },
    {
      id: 4,
      image: images.category_hair_care,
      name: 'Nutirtion ',
    },
    {
      id: 5,
      image: images.category_healthcare,
      name: 'OTC & Health Need',
    },
    {
      id: 6,
      image: images.category_oral,
      name: 'OTC & Health Need',
    },
    {
      id: 7,
      image: images.category_skin_care,
      name: 'OTC & Health Need',
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
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.openDrawer()}
        title={'Pharamacy'}
        onPressNotification={() =>navigation.navigate('Notification')}
        isIcon={true}
        isDrawer={true}
        isHome={true}
        hasSearchBar={true}
        onpresscart={() =>navigation.navigate('MyCart')}
        onPressSearchBar={()=> navigation.navigate('Search')}
      />
      <ScrollView style={styles.main_view} showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('MedicianA_Z')}>
              <Text>Medician A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Medician_systemic')}>
              <Text>Medicine by Systemic Class</Text>
            </TouchableOpacity>
          </View>
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
                  onPress={() =>
                    navigation.navigate('BrandScreen')
                  }>
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
        </View>
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
                onPress={() => {
                  navigation.navigate('Category');
                }}
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
        <View style={{height: SIZES.padding}} />
      </ScrollView>
    </SafeAreaView>
  );
}
