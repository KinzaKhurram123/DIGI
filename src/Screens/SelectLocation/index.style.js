import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../Components/Constant";

export const styles = StyleSheet.create({
    safe_area: {
        flex: 1,
    },
    main_view: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    bottom_view: {
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: 0,
        padding: SIZES.padding,
        width: "100%", 
        alignContent:"center"
    },
    title: {
        marginTop: SIZES.padding,
        ...FONTS.Regular18,
        textAlign:"center",
        color:COLORS.primary
    },
    desc: {
        ...FONTS.Regular14,
        marginTop: SIZES.padding,
        textAlign:"center",
        color:COLORS.primary
    },
    check_box: {
        marginTop: SIZES.padding,
        paddingRight: SIZES.padding2,
    },
    btn: {
        backgroundColor: COLORS.secondary,
    },
    billing_text:{
        ...FONTS.Regular14,
        marginLeft:SIZES.padding2,
        marginTop:SIZES.padding2 * 0.2
    }
});
