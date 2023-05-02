import {View, Text, TouchableOpacity ,ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {Icon} from '../../../Components';
import {
  back_arrow_icon,
  card_icon,
  coupon_icon,
  filter_icon,
  menu_icon_white,
  notification_icon,
  sale_icon,
  top_right_icon,
  small_down_arrow_icon,
  filter_icon_primary
} from '../../../assets/icons';
import {SIZES} from '../../../Components/Constant';
export default function Category({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.blueback}>
        <TouchableOpacity
          style={{padding: SIZES.padding, justifyContent: 'center'}}
          onPress={() => navigation.navigate('Start')}>
          <Icon name={back_arrow_icon} />
        </TouchableOpacity>
        <Text style={CommonStyles.title}>Category</Text>
        <View style={{justifyContent: 'flex-end', padding: 2}}>
          <Icon name={notification_icon} />
          <Icon name={top_right_icon} />
        </View>
        <View style={styles.main_view}>
          <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.filter_view}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Icon name={filter_icon_primary} />
              <Text
                style={[{ marginLeft: SIZES.padding2 }, styles.filter_text]}
                text={"Filter"}
              />
            </View>
            <Text style={styles.filter_text} text={"Sort by"} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.light_gray2,
                padding: SIZES.padding2,
                borderRadius: SIZES.padding * 2,
              }}
            >
              <Text style={styles.filter_text} text={"Default Order"} />
              <Icon
                style={{
                  marginLeft: SIZES.padding2,
                }}
                name={small_down_arrow_icon}
              />
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
