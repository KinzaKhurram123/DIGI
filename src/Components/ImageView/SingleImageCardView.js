import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../../Components";
import { COLORS, images, SIZES } from "../Constant";
import { SocialIcon } from "@rneui/base";

const SingleCardImageView = ({ image, imageStyle, resizeMode, style }) => {
  return (
    <View style={[styles.cardView, style]}>
      <Image
        style={[styles.image, imageStyle]}
        resizeMode={resizeMode || "cover"}
        source={image}
      />
    </View>
  );
};

export default SingleCardImageView;

const styles = StyleSheet.create({
  cardView: {
    height: 130,
    width: 130,
    backgroundColor: COLORS.light_gray,
    borderRadius: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    overflow: "hidden",
    alignContent:"center"
  },
  image: {
    marginTop:SIZES.padding2,
    width: "100%",
    height: "80%",
  },
});
