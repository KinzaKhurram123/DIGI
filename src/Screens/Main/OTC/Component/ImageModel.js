import {Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { COLORS, FONTS, SIZES } from '../../../../Components/Constant';
import { Icon } from '../../../../Components';
import { add_image_icon, close_black_icon } from '../../../../assets/icons';
import Buttons from '../../../../Components/Buttons/buttons';

const ImageModel = ({onpressclose,visible,onPressClose}) => {
    let options ={
        tittle : 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },

        ],
        storageOption: { 
        skipBackup: true,
        path: 'images',
        }
    };
    const showImagePicker =() =>{
        launchImageLibrary(options , (response)=>{
            console.log('Responce =' , response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
            }
        } );
    }
  return (
<Modal onRequestClose={onpressclose} transparent  visible={visible}> 
<View style={styles.main_view}>
<View style={styles.sub_view}>
<View style={styles.close_btn_view}>
    <TouchableOpacity onPress={onPressClose}>
        <Icon name={close_black_icon}/>
    </TouchableOpacity>
</View>
<Text style={styles.login_error}>Add Image</Text>
<TouchableOpacity onPress={showImagePicker}>
    <Icon name={add_image_icon}/>
</TouchableOpacity>
<Buttons onPress={onpressSubmit}
style={styles.btn} buttonText={"Submit"}/>
</View>
</View>

</Modal>
  )
}

export default ImageModel

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        backgroundColor: COLORS.black_with_opacity,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    sub_view: {
        backgroundColor: "white",
        width: "100%",
        padding: 15,
        borderRadius: SIZES.padding
    },
    close_btn_view: {
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    login_error: {
        ...FONTS.Regular18,
        marginBottom: SIZES.padding,
    },
    error_msg: { ...FONTS.Light16 },
    btn: { backgroundColor: COLORS.secondary, marginVertical: 5 },
    desc: {
        ...FONTS.Regular18,
        marginVertical: SIZES.padding * 2
    }
})