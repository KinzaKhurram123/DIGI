import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Container from '../../../Components/Container/Container';
import InnerContainer from '../../../Components/Container/InnerContainer';
import Buttons from '../../../Components/Buttons/buttons';
import CommonStyles from '../../../Utils/CommonStyles';
import {back_arrow_icon, mobile_icon, phone_icon} from '../../../assets/icons';
import {Icon, IconInputField} from '../../../Components';
import {COLORS, SIZES} from '../../../Components/Constant';

ButtonAlert = navigation =>
  // Alert.alert('Login Error', 'Not Registered', [
  //   {
  //     text: 'Signup',
  //     onPress: () => navigation.navigate('Signup'),
  //     style: 'cancel',
  //   },
  // ]);
  44;
export default function Login({navigation}) {
  return (
    <Container>
      <View style={styles.blueback}>
        <TouchableOpacity
          style={{alignContent: 'space-between', padding: 12}}
          onPress={() => navigation.navigate('Start')}>
          <Icon name={back_arrow_icon} />
        </TouchableOpacity>
        <Text style={CommonStyles.title}>Login</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView>
          <InnerContainer>
            <View style={styles.main_view}>
              <View style={{height: 25}} />
              <View style={styles.phone_input_view}>
                <IconInputField
                  style={styles.phone_number}
                  // onChangeText={handleChange("number")}
                  placeholder="Mobile Number"
                  // value={values.number}
                  maxLength={10}
                  keyboardType="numeric"
                  icon={phone_icon}
                />
              </View>
              <View style={{height: 50}} />
              <Buttons
                buttonText="Login"
                style={styles.btn}
                onPress={() => navigation.navigate('Main')}
              />
            </View>
          </InnerContainer>
        </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    paddingVertical: 40,
    flexDirection: 'row',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  main_view: {
    flex: 1,
    padding: SIZES.padding,
  },
  btn: {
    backgroundColor: COLORS.secondary,
  },
});
