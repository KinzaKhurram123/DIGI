import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../Components';
import {styles} from './index.style';
import {images, SIZES} from '../../Components/Constant';
import SingleCardImageView from '../../Components/ImageView/SingleImageCardView';
import Buttons from '../../Components/Buttons/buttons';

const ViewProduct = ({navigation}) => {
  return (
    <SafeAreaView>
      <CommonHeader
        title={'View Product'}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
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
          onPress={() => navigation.navigate('My Cart')}
          buttonText={'Add to Cart'}
          style={styles.cart_btn}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewProduct;
