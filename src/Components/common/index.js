import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, IconInputField} from '../index';
import {
  back_arrow_icon,
  close_black_icon,
  edit_icon,
  menu_icon_white,
  notification_icon,
  search_icon,
  search_icon_blue,
  top_right_icon,
} from '../../assets/icons';
import {images, SIZES} from '../Constant';
import {Image} from 'react-native-svg';
const CommonHeader = ({
  navigation,
  title,
  onPressIcon,
  isDrawer = false,
  isIcon = true,
  onPressNotification,
  onPresRightIcon,
  onPressUser,
  isHome = false,
  hasSearchBar = false,
  onChangeText,
  titleStyle,
  style,
  isBackIcon = true,
  onPressSearchBar,
  isSearchable = false,
  onPressCross,
  searchValue,
  edit,
  onpressEdit
}) => {
  return (
    <View style={[styles.main_view, style]}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={onPressIcon}>
          {isBackIcon && (
            <Icon name={isDrawer ? menu_icon_white : back_arrow_icon} />
          )}
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
        {edit && (
          <TouchableOpacity onpress={onpressEdit}>
            <Icon name={edit_icon} />
          </TouchableOpacity>
        )}
        {isIcon && (
          <>
            <TouchableOpacity onpress={onPressNotification}>
              <Icon name={notification_icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
              onpress={() => navigation.navigate('MyCart')}>
              <Icon name={top_right_icon} />
            </TouchableOpacity>
            {isHome && (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPressUser}>
                <Image
                  source={images.profile_image}
                  style={styles.image}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      {hasSearchBar && (
        <TouchableOpacity onPress={onPressSearchBar} disabled={isSearchable}>
          <IconInputField
            rightIcon={close_black_icon}
            icon={search_icon_blue}
            isEdit={isSearchable}
            value={searchValue}
            onPressRightIcon={onPressCross}
            onChangeText={text => onChangeText(text)}
            placeholder="what are you looking for?"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommonHeader;
