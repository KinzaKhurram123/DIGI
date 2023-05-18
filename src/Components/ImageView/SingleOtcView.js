import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../Constant';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardView from './CardView';

const SingleOtcView = ({image, onpress, name, price,navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => this.RBSheet.open()}
      style={styles.main_view}>
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={400}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding
          },
        }}
      >
       <CardView onPress={navigate}/>
      </RBSheet>
      <View style={styles.image_view}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{'Rs' + price}</Text>
    </TouchableOpacity>
  );
};

export default SingleOtcView;

const styles = StyleSheet.create({
  main_view: {
    width: 150,
    marginRight: SIZES.padding2,
    alignItems: 'flex-start',
    height: 200,
    backgroundColor: COLORS.white,
  },
  image_view: {
    height: 150,
    width: '120%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    textAlign: 'left',
    marginTop: SIZES.padding2,
  },
  price: {
    color: COLORS.secondary,
  },
});
