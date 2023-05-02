import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../../Components";
import { COLORS, images, SIZES } from "../Constant";

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
    height: 150,
    width: 150,
    backgroundColor: COLORS.light_gray,
    borderRadius: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
