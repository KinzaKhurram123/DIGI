import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View ,StyleSheet} from "react-native";
import {
  back_arrow_icon,
  close_black_icon,
  menu_icon_white,
  notification_icon,
  search_icon_blue,
  top_right_icon,
} from "../../assets/icons";
import { COLORS, FONTS, images, SIZES } from "../Constant";
import { Icons, Text, IconInputField } from "../index";

const MainHeader = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.main_view, style]}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={onPressIcon}>
          {isBackIcon && (
            <Icons name={isDrawer ? menu_icon_white : back_arrow_icon} />
          )}
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, titleStyle]} text={title} />
        </View>

        {isIcon && (
          <>
            <TouchableOpacity onPress={onPressNotification}>
              <Icons name={notification_icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: SIZES.padding }}
              onPress={() => navigation.navigate("MyCart")}
            >
              <Icons name={top_right_icon} />
            </TouchableOpacity>
            {isHome && (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPressUser}
              >
                <Image
                  source={images.profile_image}
                  style={styles.image}
                  resizeMode="contain"
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
            onChangeText={(text) => onChangeText(text)}
            placeholder="What are you looking for?"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    paddingTop: SIZES.padding * 2.5,
    paddingBottom: SIZES.padding * 1.3,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.Regular18,
    color: COLORS.text_white,
    marginLeft: SIZES.padding2,
    textAlign: "left",
  },
  image:{
    width:35,
    height:35,
    borderRadius:SIZES.padding
  }
});

export default MainHeader;
