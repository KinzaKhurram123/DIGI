import {StyleSheet, Text, View, Image, ImageBase, ViewBase} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../../Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {ScrollView} from 'react-native-gesture-handler';
import {images} from '../../../Components/Constant';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader title={'Profile'} isIcon={false} edit={true} />
      <View style={styles.main_view}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.profile}>
            <Image style={styles.profile_iamge} source={images.profile} />
            <Text style={styles.name}>Ivan Smith</Text>
            <Text style={styles.email}>@ivansmith654</Text>
          </View>
          <View style={styles.view}>
            <Text>Name
            </Text>
            <Text>Ivan Smith</Text>
          </View>
          <View style={styles.view}>
            <Text>Email
            </Text>
            <Text>ivansmith654</Text>
          </View>
          <View style={styles.view}>
            <Text>Phone Number
            </Text>
            <Text>+123 456 7890</Text>
          </View>
          <View style={styles.view}>
            <Text>Adress 
            </Text>
            <Text>Suit No 123, San Francisco, CA </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
