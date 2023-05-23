import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon, IconInputField} from '../../Components';
import {COLORS, images, SIZES} from '../../Components/Constant';
import {map_icon} from '../../assets/icons';
import Buttons from '../../Components/Buttons/buttons';
import CustomCheckBox from '../../Components/CustomCheckBox';

const SelectLOcation = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
      style={styles.view}
        onPressIcon={() => navigation.goBack()}
        title={'Select Location'}
        isIcon={false}
      />
      <ImageBackground style={styles.main_view} source={images.map_image}>
        <Icon name={map_icon} style={{marginTop: '20%'}} />
        <View style={styles.bottom_view}>
          <Text style={styles.title}>Enable your Location</Text>
          <Text style={styles.desc}>
            For a better experience, turn on device\n location, which uses
            Google\n location services
          </Text>
          <Buttons
            buttonText={'Allow only while using the app'}
            onPress={() => navigation.navigate('Location')}
            style={styles.btn}
          />
          <View style={{flexDirection:"row"}}>
          <CustomCheckBox
            style={styles.check_box}
            isChecked={isCheck}
            uncheckedBorderColor={COLORS.primary}
            checkedBorderColor={COLORS.primary}
            setIsChecked={() => setIsCheck(!isCheck)}
            checkedColor={COLORS.primary}
            unCheckedColor={'#F3F5F7'}
            right_text_view={
              <Text style={styles.billing_text}>Add Bulling Adress</Text>
            }
          />
           <Text style={styles.billing_text}>Add Bulling Adress</Text>
           </View>
          <IconInputField placeholder={'Enter billing Adress'}/>
          <View style={{ height: SIZES.padding }} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SelectLOcation;
