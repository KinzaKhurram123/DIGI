import {Image, Modal, SafeAreaView,StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader, Icon} from '../../../Components';
import SingleCardImageView from '../../../Components/ImageView/SingleImageCardView';
import {images, SIZES} from '../../../Components/Constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {add_round_icon, substract_round_icon} from '../../../assets/icons';
import Buttons from '../../../Components/Buttons/buttons';
import ImagePicker from 'react-native-image-crop-picker';
const OTC = ({navigation, props}) => {
  const upload = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader
        title={'OTC and Health needs'}
        onPressIcon={() => navigation.goBack()}
        isDrawer={false}
        isprofile={false}
        style={{
          borderBottomEndRadius: SIZES.padding,
          borderBottomStartRadius: SIZES.padding,
        }}
      />
      <View style={styles.main_view}>
        <View style={styles.card_view}>
          <View style={styles.card_left_view}>
            <SingleCardImageView
              image={images.medicine}
              style={styles.card_image}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginLeft: SIZES.padding2 * 0.7,
              }}>
              <View style={styles.card_content}>
                <Text style={styles.name_text}>ABC Capsules</Text>
                <Text style={styles.quantity_text}>GSK</Text>
              </View>
              <View style={styles.price_container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.card_price_currency}>Rs.</Text>
                  <Text style={styles.card_price}>780</Text>
                </View>
                <View style={styles.counter_view}>
                  <TouchableOpacity>
                    <Icon name={substract_round_icon} />
                  </TouchableOpacity>
                  <View style={styles.number_view}>
                    <Text style={styles.total_num_text}>2</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name={add_round_icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Buttons
          ismodle={true}
          onPress={upload}
          buttonText={'Upload Prescription'}
          style={styles.btn}
        />
        <View style={styles.text_row}>
          <Text style={styles.desc}>Don’t have a prescription,</Text>
          <TouchableOpacity>
            <Text style={styles.help_text}>need help</Text>
          </TouchableOpacity>
          <Text style={styles.desc}>.</Text>
        </View>
      </View>
      
      {/* <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal> */}
    </SafeAreaView>
  );
};

export default OTC;
