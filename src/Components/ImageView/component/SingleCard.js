import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../../Components";
import { COLORS, images, SIZES } from "../../Constant";

const SingleCard = ({image, imageStyle, resizeMode, style }) => {
  return (
    <View style={[styles.cardView, style]}>

    </View>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  cardView: {
    // height: 150,
    // width: 150,
    backgroundColor: COLORS.light_gray,
    borderRadius: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.primary_border,
    overflow: "hidden",
  },
});
