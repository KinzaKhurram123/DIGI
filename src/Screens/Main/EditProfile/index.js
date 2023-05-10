import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CommonHeader, IconInputField} from '../../../Components';
import {COLORS, SIZES} from '../../../Components/Constant';
import {
  edit_icon,
  email_icon,
  location_icon,
  phone_call,
  phone_icon,
  user_icon,
} from '../../../assets/icons';
import Buttons from '../../../Components/Buttons/buttons';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setnumber,] = useState(null);

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Edit Profile'}
        isIcon={false}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <IconInputField
          value={name}
          placeholder={'Name'}
          leftIcon={user_icon}
          onChangeText={text => setName(text)}
        />
        <IconInputField
          value={email}
          placeholder={'ivansmith@gmail.com'}
          leftIcon={email_icon}
          onChangeText={text => setName(text)}
        />
        <IconInputField
          value={number}
          placeholder={'+123 456 7890'}
          leftIcon={phone_icon}
          onChangeText={text => setName(number)}
        />
        <IconInputField
          value={address}
          placeholder={'Suit number 123  san Francisco, CA'}
          leftIcon={location_icon}
          onChangeText={text => setName(text)}
        />
        <View style={{height: '35%'}}/>
        <Buttons style={styles.btn} buttonText={'Edit'} />
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
  btn:{
    marginTop:SIZES.padding * 3,
    backgroundColor:COLORS.secondary
}
});
