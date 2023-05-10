import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon} from '../../Components';
import {filter_icon_primary, small_down_arrow_icon} from '../../assets/icons';
import {COLORS, images, SIZES} from '../../Components/Constant';
import SingleBrandView from './component/SingleBrandView';

const brand = [
  {
    id: 1,
    imagePro: images.Amonxil,
    name: 'Amoxil',
    price: '500',
  },
  {
    id: 2,
    image: images.Anrod,
    name: 'Anoro Ellipta',
    price: '500',
  },
  {
    id: 3,
    image: images.Ambirix,
    name: 'Ambirix',
    price: '500',
  },
  {
    id: 4,
    image: images.Apretude,
    name: 'Apretude',
    price: '500',
  },
  {
    id: 5,
    image: images.product_5,
    name: 'Augmentin',
    price: '500',
  },
  {
    id: 7,
    image: images.Avamys,
    name: 'Avamys/Veramyst',
    price: '500',
  },
];
const BrandScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.openDrawer()}
        title={'GSk'}
        isIcon={true}
        isDrawer={true}
        isprofile={true}
        hasSearchBar={true}
        onPressUser={() => navigation.navigate('Profile')}
        onPressSearchBar={() => navigation.navigate('Search')}
      />
      <ScrollView
        style={styles.scroll_view}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View style={styles.filter_view}>
            <TouchableOpacity onPress={() =>navigation.navigate('Filter')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name={filter_icon_primary} />
                <Text
                  style={[{marginLeft: SIZES.padding2}, styles.filter_text]}>
                  Filter
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.filter_text}>Sort by</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.light_gray2,
                padding: SIZES.padding2,
                borderRadius: SIZES.padding * 2,
              }}>
              <Text style={styles.filter_text}>Default Order</Text>
              <Icon
                style={{
                  marginLeft: SIZES.padding2,
                }}
                name={small_down_arrow_icon}
              />
            </View>
          </View>
          <View style={{padding: SIZES.padding * 0.8}} />
          <FlatList
            data={brand}
            columnWrapperStyle={{justifyContent: 'center'}}
            numColumns={2}
            keyExtractor={item => item?.id}
            ListFooterComponent={<View style={{height: SIZES.padding * 1.5}} />}
            renderItem={({item}) => {
              return (
                <SingleBrandView
                  image2={item.image}
                  name={item.name}
                  price={item.price}
                  keyExtractor={item => item?.id}
                  //   onPress
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandScreen;
