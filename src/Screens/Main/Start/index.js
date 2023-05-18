import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {call_icon} from '../../../assets/icons';
import {CommonHeader} from '../../../Components';
import Buttons from '../../../Components/Buttons/buttons';
import {COLORS, SIZES} from '../../../Components/Constant';
import Container from '../../../Components/Container/Container';
import Logo from '../../../Components/ImageView/logo';

export default function Start({navigation}) {
  return (
    <Container>
      <CommonHeader isIcon={false} isBackIcon={false}/>
      <View style={{flex: 1, paddingHorizontal: SIZES.padding*1.5}}>
        <View style={{height: 50}} />
        <Logo />
        <View style={{height: SIZES.padding * 4}} />
        <Buttons
          buttonText="Login"
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}
        />
        <Buttons
          buttonText={'SIgnup'}
          style={styles.btn}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    padding: 60,
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: COLORS.secondary,
  
  },
});
