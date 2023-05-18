import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../Components';
import {styles} from './index.style';
import {images, SIZES} from '../../Components/Constant';
import SingleCardImageView from '../../Components/ImageView/SingleImageCardView';
import Buttons from '../../Components/Buttons/buttons';
import {ScrollView} from 'react-native-gesture-handler';

const ViewProduct = ({navigation}) => {
  return (
    <SafeAreaView image={images.background_image_two} style={styles.safe_area}>
      <CommonHeader
        isIcon={false}
        title={'View Product'}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <ScrollView
          style={styles.main_view}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              paddingTop: SIZES.padding * 4,
              flex: 1,
              justifyContent: 'flex-start',
            }}>
            <SingleCardImageView
              image={images.product_image}
              style={styles.card_image_view}
              resizeMode={'contain'}
            />

            <View style={styles.row}>
              <Text style={styles.capsule_name}>ABC capsule 20mg</Text>
              <Text style={styles.price}>Rs 500</Text>
            </View>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              fermentum vitae, venenatis neque turpis bibendum mattis et.{' '}
            </Text>

            <Text style={styles.tags}>Tags ABC,ACD</Text>
            <Buttons
              onPress={() => navigation.navigate('Mycart')}
              buttonText={'Add to Cart'}
              style={styles.cart_btn}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ViewProduct;
