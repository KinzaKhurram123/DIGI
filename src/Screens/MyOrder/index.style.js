import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Components/Constant";

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
        ...FONTS.Regular16
    },
    text_row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding2 
    },
    order_text: {
        width: "50%",
        ...FONTS.Regular16,
        textAlign: "left",
    },
    order_title: {
        textAlign: "left",
        ...FONTS.Bold16
    },
    order_desc: {
        textAlign: "left",
        ...FONTS.Medium14,
        marginTop:-5
    },
    btn:{
        marginTop:SIZES.padding * 3,
        backgroundColor:COLORS.secondary
    }
})