import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Container from '../../../Components/Container/Container';
import InputField from '../../../Components/Inputs/InputField';
import InnerContainer from '../../../Components/Container/InnerContainer';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CommonStyles from '../../../Utils/CommonStyles';
import Buttons from '../../../Components/Buttons/buttons';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';
import {Icon, Header, CommonHeader} from '../../../Components';
import {
  back_arrow_icon,
  Card_icon_secondary,
  contact_icon,
  discount_icon,
  facebook_icon,
  google_icon,
} from '../../../assets/icons';
import CustomCheckBox from '../../../Components/CustomCheckBox';

export default function Signup({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Container>
      {/* <View style={styles.blueback}>
        <TouchableOpacity
          style={{alignContent: 'space-between', padding: 12}}
          onPress={() => navigation.navigate('Start')}>
          <Icon name={back_arrow_icon} />
        </TouchableOpacity>

        <Text style={CommonStyles.title}>Signup</Text>
      </View> */}
      <CommonHeader
        onPresRightIcon={() => navigation.goBack()}
        title={'Signup'}
        isIcon={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InnerContainer>
          <View style={styles.row}>
            <View style={styles.item}>
              <View style={styles.circle}>
                <Icon name={discount_icon} />
              </View>
              <View style={styles.text_view}>
                <Text style={styles.text}>Upto</Text>
                <Text style={styles.text_red}>15%</Text>
                <Text style={styles.text}>off</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.circle}>
                <Icon name={contact_icon} />
              </View>
              <View style={styles.text_view}>
                <Text style={styles.text}>No</Text>
                <Text style={styles.text_red}>Contact</Text>
                <Text style={styles.text}>delivery</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.circle}>
                <Icon name={discount_icon} />
              </View>
              <View style={styles.text_view}>
                <Text style={styles.text}>Easy</Text>
                <Text style={styles.text_red}>Return</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 30}}>
            <View style={styles.main_view}>
              <View style={{height: 5}} />
              <InputField
                name="name"
                placeholder="Enter your Name"
                style={{borderRadius: 0}}
                // value={values.name}
                // onChangeText={handleChange("name")}
                maxLength={20}
              />
              <View style={styles.phone_input_view}>
                <InputField
                  style={styles.phone_code}
                  isEdit={false}
                  value={'+92'}
                />
                <InputField
                  style={styles.phone_number}
                  placeholder="Mobile Number"
                  // onChangeText={handleChange("number")}
                  // value={values.number}
                  maxLength={10}
                  keyboardType="numeric"
                />
              </View>
              <View style={{height: 40}} />
                  <CustomCheckBox
                    style={styles.check_box}
                    isChecked={isCheck}
                    setIsChecked={() => setIsCheck(!isCheck)}
                    checkedColor={COLORS.secondary}
                    uncheckedBorderColor={COLORS.secondary}
                    unCheckedColor={'#F3F5F7'}
                    right_text_view={
                      <View style={styles.privacy_view}>
                        <Text style={styles.privacy_text}>
                          By Signing Up you agree to our
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.privacy_link_text}>
                            Privacy Policy
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.privacy_text}>& </Text>
                        <TouchableOpacity>
                          <Text style={styles.privacy_link_text}>
                            Terms & Conditions
                          </Text>
                        </TouchableOpacity>
                      </View>
                    }
                  />
            
              <Buttons
                onPress={() => navigation.navigate('Conformation')}
                buttonText={'Signup'}
                style={[styles.btn, {backgroundColor: COLORS.secondary}]}
              />
              <View style={styles.or_view}>
                <View style={styles.line} />
                <Text style={styles.or_text}>Or</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.main_view}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.sign_up_text}>Sign Up With</Text>
                </View>
                <View style={styles.social_sign_up_row}>
                  <TouchableOpacity style={styles.item}>
                    <View style={styles.social_sign_up_circle}>
                      <Icon name={google_icon} />
                    </View>
                    <Text
                      style={[
                        styles.social_sign_up_text,
                        {color: COLORS.secondary},
                      ]}>
                      Google
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                    <View
                      style={[
                        styles.social_sign_up_circle,
                        {backgroundColor: '#D8DEEB'},
                      ]}>
                      <Icon name={facebook_icon} />
                    </View>
                    <Text
                      style={[styles.social_sign_up_text, {color: '#3B5999'}]}>
                      Facebook
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </InnerContainer>
      </ScrollView>
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
  privacy_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: SIZES.padding,
    marginLeft: SIZES.padding2,
  },
  privacy_text: {...FONTS.Regular13},
  privacy_link_text: {
    ...FONTS.Regular13,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
  privacy_link_text: {
    ...FONTS.Regular13,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: COLORS.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    margin: 8,
    color: COLORS.primary,
  },
  phone_input_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phone_number: {width: '72%', borderRadius: 0},
  main_view: {
    paddingHorizontal: SIZES.padding * 0.25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: COLORS.light_gray3,
    padding: SIZES.padding,
  },
  item: {
    width: '31.5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.secondary_light,
    borderRadius: SIZES.padding2 * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_view: {
    paddingTop: SIZES.padding2,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Regular13,
    color: COLORS.primary,
  },
  text_red: {
    ...FONTS.Bold13,
    color: COLORS.secondary,
  },
  phone_code: {width: '25%', borderRadius: 0},
  or_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 40,
  },
  or_text: {color: COLORS.text_placeholder},
  line: {
    borderColor: COLORS.text_placeholder,
    borderBottomWidth: 1,
    width: '45%',
  },
  sign_up_text: {
    ...FONTS.Regular19,
    color: COLORS.primary,
  },
  social_sign_up_row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: SIZES.padding,
  },
  item: {
    width: '31.5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  social_sign_up_circle: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary_light,
    borderRadius: SIZES.padding2 * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  social_sign_up_text: {
    ...FONTS.Bold12,
    paddingTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding2 / 1.5,
  },
  social_sign_up_circle: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary_light,
    borderRadius: SIZES.padding2 * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check_box: {
    marginTop: SIZES.padding,
    paddingRight: SIZES.padding2,
  },
});
