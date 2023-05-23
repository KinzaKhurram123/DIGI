import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {CommonHeader, IconInputField} from '../../../Components';
import {images, SIZES} from '../../../Components/Constant';
import {search_icon_gray} from '../../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import Signup from '../Signup';
import SingleMedicianView from './Component/SingleMedicianView';
const A_Z = [
  {
    id: 1,
    title: 'A',
    array: [
      {
        id: 11,
        title: 'Acetylcysteine',
        description: 'Pfizer',
        price: '500',
        image: images.medicine,
      },
      {
        id: 12,
        title: 'Acetylcysteine',
        description: 'Pfizer',
        price: '500',
        image: images.blog_image,
      },
    ],
  },
  {
    id: 2,
    title: 'B',
    array: [
      {
        id: 21,
        title: 'Covid 19 Vaccine',
        description: 'Pfizer',
        price: '500',
        image: images.medicine,
      },
      {
        id: 22,
        title: 'Covid 19 Vaccine',
        description: 'Pfizer',
        price: '500',
        image: images.lab_test_image,
      },
    ],
  },
  {
    id: 3,
    title: 'C',
    array: [
      {
        id: 31,
        title: 'Covid 19 Vaccine',
        description: 'Pfizer',
        price: '500',
        image: images.medicine,
      },
      {
        id: 32,
        title: 'Covid 19 Vaccine',
        description: 'Pfizer',
        price: '500',
        image: images.lab_test_image,
      },
    ],
  },
];
export default function MedicianA_Z({navigation}) {
  const ItemSeperatorView = () => <View style={{height: SIZES.padding}} />;
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Medicain A_Z'}
        onpresscart={() => navigation.navigate('MyCart')}
        onPressIcon={() => navigation.navigate('Main')}
        isprofile={false}
        style={styles.view}
      />
      <View style={styles.main_view}>
        <IconInputField
          style={{marginHorizontal: SIZES.padding}}
          icon={search_icon_gray}
          placeholder="Search for Medician"
        />
        <FlatList
          style={{marginTop: SIZES.padding *2}}
          data={A_Z}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{height: SIZES.padding * 1.5}}></View>
          }
          renderItem={({item}) => (
            <>
              <Text style={styles.title} >{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginVertical: SIZES.padding,
                  }}>
                  <View style={{width: SIZES.padding *0.5}}/>
                    <FlatList
                      data={item?.array}
                      numColumns={2}
                      showsVerticalScrollIndicator={false}
                      ItemSeparatorComponent={ItemSeperatorView}
                      renderItem={({item}) => (
                        <SingleMedicianView
                        onPress={() => navigation.navigate('ViewProduct')}
                          style={{
                            width: Dimensions.get('screen').width / 2.5,
                            marginHorizontal: SIZES.padding2,
                            borderRadius: SIZES.padding2,
                            shadowColor: 'rgba(170, 33, 33, 0.6)',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,
                            elevation: 4,
                          }}
                          imageStyle={{
                            borderTopLeftRadius: SIZES.padding2,
                            borderTopRightRadius: SIZES.padding2,
                          }}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                          price={item.price}
                        />
                      )}
                    />
               
                </View>
          
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
