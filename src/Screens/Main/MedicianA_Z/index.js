import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {CommonHeader, IconInputField} from '../../../Components';
import {images, SIZES} from '../../../Components/Constant';
import {search_icon_gray} from '../../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import Signup from '../../Register/Signup';
export default function MedicianA_Z({navigation}) {
  const ItemSeperatorView = () => <View style={{ height: SIZES.padding }} />;

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
          image: images.medicine_augmentin,
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
        {
          id: 23,
          title: 'Covid 19 Vaccine',
          description: 'Pfizer',
          price: '500',
          image: images.medicine,
        },
        {
          id: 24,
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

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        onPressIcon={() => navigation.goback()}
        title={'Medicain A_Z'}
      />
      <View style={styles.main_view}>
        <IconInputField
          style={{marginHorizontal: SIZES.padding}}
          icon={search_icon_gray}
          placeholder="Search for Medician"
        />
        <FlatList
          style={{marginTop: SIZES.padding}}
          data={A_Z}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{height: SIZES.padding * 1.5}}></View>
          }
          renderItem={({item}) => (
            <>
              <Text style={styles.title} text={item.title}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginVertical: SIZES.padding,
                  }}>
                    <View style={{width: SIZES.padding2}}>
                      <FlatList  
                          data={item?.array}
                          numColumns={2}
                          showsVerticalScrollIndicator={false}
                          ItemSeparatorComponent={ItemSeperatorView}
                        //   renderItem={({item}) =>(

                            
                        //   )
                        
                        // }
                      />
                    </View>
                  </View>
              </Text>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
