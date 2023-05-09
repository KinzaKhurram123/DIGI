import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";
import { Icons, Text } from "../../../Components";
import { add_round_icon, substract_round_icon } from "../../../assets/icons";
import SingleCardImageView from "../../../Components/ImageView/SingleImageCardView";

const SingleCartView = ({
  image,
  name,
  brand,
  price,
  quantity,
  onPressSubtract,
  onPressAdd,
}) => {
  return (
    <View style={styles.card_view}>
      <SingleCardImageView image={image} style={styles.card_image} />
      <View style={styles.content_view}>
        <View style={styles.card_content}>
          <Text style={styles.name_text} >{name}</Text>
          <Text style={styles.quantity_text}  >{brand}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.padding2 * 0.4,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.card_price_currency} >Rs. </Text>
            <Text style={styles.card_price} >{price} </Text>
          </View>
          <View style={styles.counter_view}>
            <TouchableOpacity onPress={onPressSubtract}>
              <Icons name={substract_round_icon} />
            </TouchableOpacity>
            <View style={styles.number_view}>
              <Text style={styles.total_num_text}>{quantity} </Text>
            </View>
            <TouchableOpacity onPress={onPressAdd}>
              <Icons name={add_round_icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleCartView;

const styles = StyleSheet.create({
  card_view: {
    flexDirection: "row",
    backgroundColor: COLORS.light_gray1,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding2,
    marginTop: SIZES.padding2,
  },
  card_image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.padding2,
  },
  content_view: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: SIZES.padding2 ,
  },

  card_content: {
    alignItems: "flex-start",
  },
  name_text: {
    ...FONTS.Bold14,
    textAlign:"left"
  },
  quantity_text: {
    ...FONTS.Medium12,
    color: COLORS.primary,
  },
  card_right_view: {
    alignSelf: "flex-end",
    marginTop: -SIZES.padding2 * 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counter_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number_view: {
    borderColor: "rgba(9, 33, 67, 0.11)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 30,
  },
  total_num_text: {
    ...FONTS.Bold12,
  },
  card_price: {
    color: COLORS.secondary,
    ...FONTS.Bold18,
  },
  card_price_currency: {
    ...FONTS.Regular10,
  },
  camera_icon_view: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightest_gray,
    width: SIZES.padding * 6,
    height: SIZES.padding * 6,
    marginVertical: SIZES.padding,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    alignSelf: "center",
  },
});
