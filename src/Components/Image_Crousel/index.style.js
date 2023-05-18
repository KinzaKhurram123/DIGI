import { StyleSheet } from "react-native";
import { SIZES } from "../Constant";

export const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    height: 180,
    width: "100%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dot_view: {
    marginRight: -SIZES.padding2 * 0.5,
    marginTop: -SIZES.padding2 * 8,
    height:10,
  },
  active_dot: {
    width: 20,
    height: 10,
    borderRadius: 5,
    margin: 0,
  },
  inactive_dot: {
    width: 10,
    height: 10,
    margin: 0,
    borderRadius: 5,
  },
});
