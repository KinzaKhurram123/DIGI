import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './index.style';
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
const CommonHeader = ({
  navigation,
  title,
  onPressIcon,
  isDrawer = false,
  isIcon = true,
  onPressNotification,
  onPresRightIcon,
  onPressUser,
  isprofile = true,
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
  onpressEdit,
  onpresscart = true,
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
          <TouchableOpacity activeOpacity={1} onpress={onpressEdit}>
            <Icon name={edit_icon} />
          </TouchableOpacity>
        )}
        {isIcon && (
          <>
            <TouchableOpacity activeOpacity={1} onpress={onPressNotification}>
              <Icon name={notification_icon} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{marginLeft: SIZES.padding}}
              onpress={onpresscart}>
              <Icon name={top_right_icon} />
            </TouchableOpacity>
            {isprofile && (
              <TouchableOpacity
                activeOpacity={1}
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
        <TouchableOpacity activeOpacity={1} onPress={onPressSearchBar} disabled={isSearchable}>
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
