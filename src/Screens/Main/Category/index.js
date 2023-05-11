import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon, SingleCategoryView} from '../../../Components';
import {
  filter_icon_primary,
  small_down_arrow_icon,
} from '../../../assets/icons';
import {COLORS, images, SIZES} from '../../../Components/Constant';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-svg';
import SingleCardImageView from '../../../Components/ImageView/SingleImageCardView';
import SIngleProductView from './component/SIngleProductView';
const categories_type = [
  {
    id: 1,
    image: images.category_skin_care,
    title: 'Skin Care',
  },
  {
    id: 2,
    image: images.category_oral,
    title: 'Oral',
  },
  {
    id: 3,
    image: images.category_hair_care,
    title: 'Hair Care',
  },
];
const product_list = [
  {
    id: 1,
    imagePro: images.product_1,
    name: 'CLEAN & CLEAR CLEANSER 100GM ACTIVE CLEAR',
    price: '500',
  },
  {
    id: 2,
    imagePro: images.product_2,
    name: 'CLEAN&CLEAR FACE WASH 100ML',
    price: '500',
  },
  {
    id: 3,
    imagePro: images.product_3,
    name: 'HASHMI ARQ E GULAB DROPPER',
    price: '500',
  },
  {
    id: 4,
    imagePro: images.product_4,
    name: 'KALONJI MASSAGE OIL 30ML',
    price: '500',
  },
  {
    id: 5,
    imagePro: images.product_5,
    name: 'Paracetamol',
    description: 'Pfizer',
    price: '500',
  },
  {
    id: 7,
    imagePro: images.product_6,
    name: 'Paracetamol',
    description: 'Pfizer',
    price: '500',
  },
];
const Category = ({navigation}) => {
  const listRef = useRef();
  const [btnType, setBtnType] = useState('General');
  const [showDesc, setShowDesc] = useState(null);
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Category'}
        isDrawer={true}
        onPressIcon={() => navigation.openDrawer()}
      />
      <View style={styles.main_view}>
        <View style={styles.filter_view}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Icon name={filter_icon_primary} />
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <Text style={[{marginLeft: SIZES.padding2}, styles.filter_text]}>
                Filter
              </Text>
            </TouchableOpacity>
          </View>
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
        <View style={styles.tab_row}>
          <ScrollView showsHorizontalScrollIndicator={true} horizontal>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType('General')}>
              <Text
                style={
                  btnType === 'General'
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }>
                PERSONAL CARE
              </Text>
              {btnType === 'General' ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType('Delivery')}>
              <Text
                style={
                  btnType === 'Delivery'
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }>
                OTC AND HEALTH NEED
              </Text>
              {btnType === 'Delivery' ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType('Order')}>
              <Text
                style={
                  btnType === 'Order'
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }>
                BABY AND MOTHER CARE
              </Text>
              {btnType === 'Order' ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab_view}
              onPress={() => setBtnType('Order')}>
              <Text
                style={
                  btnType === 'Order'
                    ? styles.tab_view_text
                    : styles.tab_view_text_inactive
                }>
                NUTRATION SUPLEMENTS
              </Text>
              {btnType === 'Order' ? (
                <View style={styles.border_active} />
              ) : (
                <View style={styles.border_inactive} />
              )}
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{padding: SIZES.padding * 0.8}} />
        <FlatList
          horizontal
          data={categories_type}
          ref={listRef}
          getItemLayout={(data, index) => ({
            length: Dimensions.get('screen').width / 3.4,
            offset: (Dimensions.get('screen').width / 3.4) * index,
            index,
          })}
          onScrollToIndexFailed={() => {}}
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: SIZES.padding}}
          ListFooterComponent={<View style={{width: SIZES.padding2}} />}
          renderItem={({item}) => {
            return (
              <SingleCategoryView
                style={styles.margin}
                image={item.image}
                name={item.title}
              />
            );
          }}
        />
        <FlatList
          data={product_list}
          columnWrapperStyle={{justifyContent: 'center'}}
          numColumns={2}
          keyExtractor={item => item?.id}
          ListFooterComponent={<View style={{height: SIZES.padding * 1.5}} />}
          renderItem={({item}) => {
            return (
              <SIngleProductView
                image2={item.imagePro}
                name={item.name}
                // navigate={() => navigation.navigate('ViewProduct')}
                price={item.price}
                keyExtractor={item => item?.id}
                onPress={() => navigation.navigate('ViewProduct')}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
