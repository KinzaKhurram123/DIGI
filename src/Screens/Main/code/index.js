import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackButton from '../../../Components/MainHeader/index.js.js';
import Container from '../../../Components/Container/Container';
import InnerContainer from '../../../Components/Container/InnerContainer';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';
import {ScrollView} from 'react-native-gesture-handler';
import {back_arrow_icon, views_icon} from '../../../assets/icons';
import Buttons from '../../../Components/Buttons/buttons';
import { Icon } from '../../../Components';
const CELL_COUNT = 4;

export default function Otp({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="-"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };
  return (
    <Container>
      <View style={styles.blueback}>
        {/* <BackButton navigation={navigation} /> */}
        <TouchableOpacity
          style={{alignContent: 'space-between', padding: 12}}
          onPress={() => navigation.navigate('Start')}>
          <Icon name={back_arrow_icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <InnerContainer>
          <View style={{height: 40}} />
          <View style={styles.mainveiw}>
            <View style={styles.text_view}>
              <Text style={styles.text}>Enter Your Code</Text>
              <View style={{height: 20}} />
              <Text style={styles.Text}>
                We’ve send you a 4-digit code to 0123456789
              </Text>
              <View style={{height: 20}} />
            </View>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              placeholder="1234"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
              underlineColorAndroid={COLORS.transparent}
              placeholderTextColor={COLORS.primary_with_opacity}
              renderCell={renderCell}
            />
          </View>
          <View style={styles.btn_row}>
            <Buttons
              onPress={() => navigation.navigate('Login')}
              buttonText={'Resend Code'}
              isDisabled={true}
              style={styles.btn}
            />
            <Buttons
              onPress={() => navigation.navigate('Main')}
              buttonText={'Submit'}
              style={[styles.btn, {backgroundColor: COLORS.secondary}]}
            />
          </View>
        </InnerContainer>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    padding: 15,
    // marginBottom:120
  },
  cell: {
    width: 50,
    height: 55,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 15,
    padding: 10,
    color: COLORS.TEXT_COLOR,
    backgroundColor: 'white',
    borderColor: '#092143',
  },
  focusCell: {
    borderColor: '#092143',
  },
  blueback: {
    backgroundColor: '#092143',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 4,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
  },
  btn2: {
    backgroundColor: '#FF4445',
    padding: 45,
    alignContent: 'flex-end',
    borderRadius: 100,
    paddingVertical: 20,
    margin: 10,
  },
  btn: {
    width: '48%',
    height: 45,
  },
  text: {
    color: COLORS.primary,
    // ...FONTS.Bold17,
    ...FONTS.Regular30,
  },
  mainveiw: {
    justifyContent: 'center',
    flex: 1,
    padding: SIZES.padding,
  },
  Text: {
    color: COLORS.primary_with_opacity,
    ...FONTS.Regular17,
  },
  text_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_row: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: SIZES.padding,
  },
});
