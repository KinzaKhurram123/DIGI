import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React ,{useState} from 'react';
import {CommonHeader, IconInputField} from '../../../Components';
import {COLORS, SIZES} from '../../../Components/Constant';
import { edit_icon, email_icon, location_icon } from '../../../assets/icons';

const EditProfile = ({navigation}) => {
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
  
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Edit Profile'}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <IconInputField
          value={name}
          placeholder={'Name'}
          rightIcon={edit_icon}
          onChangeText={text => setName(text)}
        />
            <IconInputField
          value={email}
          placeholder={'email'}
          rightIcon={email_icon}
          onChangeText={text => setName(text)}
        />
            <IconInputField
          value={address}
          placeholder={'Adress'}
          rightIcon={location_icon}
          onChangeText={text => setName(text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.white,
  },

});
