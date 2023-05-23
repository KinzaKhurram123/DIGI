import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon, SingleCategoryView} from '../../../Components';
import {COLORS, FONTS, images, SIZES} from '../../../Components/Constant';
import {FlatList} from 'react-native-gesture-handler';
import SIngleProductView from './component/SIngleProductView';
import {down_black_arrow_icon , filter_icon_primary,} from '../../../assets/icons';
import Default from './component/Default';
import RBSheet from 'react-native-raw-bottom-sheet';
import Card from './component/Card';

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
const Array = [
  {id: 1, label: 'Price:', value: 'High to low'},
  {id: 2, label: 'price:', value: 'Low to High'},
  {id: 3, label: 'Alphabatically:', value: '(A-Z)'},
];
const Category = ({navigation}) => {
  const listRef = useRef();
  const [btnType, setBtnType] = useState('General');
  const [showDesc, setShowDesc] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [showarray, setShowarray] = useState(true);
  const sheet_ref = useRef(null);
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        style={styles.view}
        title={'Category'}
        isDrawer={true}
        onPressIcon={() => navigation.openDrawer()}
        isprofile={true}
        onPresRightIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <View style={styles.filter_view}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: SIZES.padding,
            }}>
            <Icon name={filter_icon_primary} />
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <Text style={[{marginLeft: SIZES.padding2}, styles.filter_text]}>
                Filter
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.filter_text}>Sort by</Text>
          <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Default
              textStyle={styles.filter_text}
              tittle="Default Order"
              icon={down_black_arrow_icon}
              iconStyle={{marginLeft: SIZES.padding2}}
              onPress={() => setShowarray(!showarray)}
            />

            {showarray &&
              Array?.map(item => (
                <Default
                  style={styles.filter_view}
                  key={item?.id}
                  textStyle={{
                    ...FONTS.Regular11,
                    alignItems: 'center',
                    color: COLORS.primary,
                  }}
                  lable={item.label}
                  tittle={item.value}
                />
              ))}
          </View>
        </View>
        <View style={styles.tab_row}>
          <ScrollView showsHorizontalScrollIndicator={true} horizontal>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.tab_view,
                {
                  borderBottomColor:
                    btnType === 'Gernal'
                      ? COLORS.secondary
                      : COLORS.border_grey,
                },
              ]}
              onPress={() => setBtnType('Gernal')}>
              <Text
                style={[
                  styles.tab_text,
                  {
                    color:
                      btnType === 'Gernal' ? COLORS.primary : COLORS.primary,
                  },
                ]}>
                PERSONAL CARE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.tab_view,
                {
                  borderBottomColor:
                    btnType === 'OTC' ? COLORS.secondary : COLORS.border_grey,
                },
              ]}
              onPress={() => setBtnType('OTC')}>
              <Text
                style={[
                  styles.tab_text,
                  {
                    color: btnType === 'OTC' ? COLORS.primary : COLORS.primary,
                  },
                ]}>
                OTC & HEALTH NEED
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.tab_view,
                {
                  borderBottomColor:
                    btnType === 'Order' ? COLORS.secondary : COLORS.border_grey,
                },
              ]}
              onPress={() => setBtnType('Order')}>
              <Text
                style={[
                  styles.tab_text,
                  {
                    color:
                      btnType === 'Order' ? COLORS.primary : COLORS.primary,
                  },
                ]}>
                BABY & MOTHER CARE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.tab_view,
                {
                  borderBottomColor:
                    btnType === 'supplements'
                      ? COLORS.secondary
                      : COLORS.border_grey,
                },
              ]}
              onPress={() => setBtnType('supplements')}>
              <Text
                style={[
                  styles.tab_text,
                  {
                    color:
                      btnType === 'supplements'
                        ? COLORS.primary
                        : COLORS.primary,
                  },
                ]}>
                NUTRATION SUPLEMENTS
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{padding: SIZES.padding * 0.7}} />
        <ScrollView>
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
            style={{paddingHorizontal: SIZES.padding * 0.5}}
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
            style={{paddingHorizontal: SIZES.padding * 0.2}}
            keyExtractor={item => item?.id}
            ListFooterComponent={<View style={{height: SIZES.padding * 1.5}} />}
            renderItem={({item}) => {
              return (
                <SIngleProductView
                  image2={item.imagePro}
                  name={item.name}
                  price={item.price}
                  keyExtractor={item => item?.id}
                  onPress={() => sheet_ref.current.open()}
                />
              );
            }}
          />
        </ScrollView>
        <RBSheet
          ref={sheet_ref}
          height={600}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: SIZES.padding,
              borderTopRightRadius: SIZES.padding,
            },
          }}>
          <Card onPress={() => console.log('called')} />
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

export default Category;
