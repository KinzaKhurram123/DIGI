import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader} from '../../../Components';
import {COLORS, FONTS, SIZES} from '../../../Components/Constant';
import LineTittle from '../../../Components/LineTittle';
import { down_black_arrow_icon } from '../../../assets/icons';
const medicine_by_systemic_class = [
    {
      id: 1,
      title: "item One",
    },
    {
      id: 2,
      title: "item Two",
    },
    {
      id: 3,
      title: "item Three",
    },
    {
      id: 4,
      title: "item Four",
    },
    {
      id: 5,
      title: "item Five",
    },
    {
      id: 6,
      title: "item Six",
    },
  ];
const Medician_systemic = ({navigation}) => {
  const [showOtcOptions, setShowOtcOptions] = useState(true);
  const [showPreMedicineOptions, setShowPreMedicineOptions] = useState(true);

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'Medician By \nSystemic Class'}
        titleStyle={{marginTop: SIZES.padding}}
        style={styles.view}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: SIZES.padding}} />
          <TouchableOpacity onPress={() => setShowOtcOptions(!showOtcOptions)}>
            <LineTittle
              textStyle={styles.otc_view}
              tittle='OTC'
              icon={down_black_arrow_icon}
            />
          </TouchableOpacity>
          {showOtcOptions &&
            medicine_by_systemic_class?.map(item => (
              <LineTittle
                key={item?.id}
                textStyle={{...FONTS.Regular11 , color:COLORS.primary}}
                tittle={item.title}
              />
            ))}
           <TouchableOpacity
            onPress={() => setShowPreMedicineOptions(!showPreMedicineOptions)}
          >
            <LineTittle
              textStyle={styles.prescription_medicine_view}
              tittle="Prescription Medicine"
              icon={down_black_arrow_icon}
            />
          </TouchableOpacity>
          {showPreMedicineOptions &&
            medicine_by_systemic_class?.map((item) => (
              <LineTittle
                key={item?.id}
                textStyle={{ ...FONTS.Regular15 }}
                tittle={item.title}
              />
            ))}
          <View style={{ height: SIZES.padding }} />
            
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Medician_systemic;
