import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
    safe_area: {
        flex: 1
    },
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding,
        backgroundColor: COLORS.white
    },
    number: {
        textAlign: "left",
        ...FONTS.Regular14,
        color:COLORS.primary
    },
    text_row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding2 
    },
    order_text: {
        width: "50%",
        ...FONTS.Regular14,
        textAlign: "left",
        color:COLORS.primary
    },
    order_title: {
        textAlign: "left",
        ...FONTS.Bold14, 
        color:COLORS.primary
    },
    order_desc: {
        textAlign: "left",
        ...FONTS.Medium14,
        marginTop:-5,
        color:COLORS.primary
    },
    btn:{
        marginTop:SIZES.padding * 3,
        backgroundColor:COLORS.secondary
    }, view: {
        borderBottomEndRadius: SIZES.padding,
        borderBottomStartRadius: SIZES.padding,
      },
})