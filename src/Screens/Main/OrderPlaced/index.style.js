import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Components/Constant";

export const styles = StyleSheet.create({
    safe_area: {
        flex: 1
    },
    main_view: {
        flex: 1,
        paddingTop: SIZES.padding
    },
    title: {
        ...FONTS.Bold24,
        marginTop: SIZES.padding * 2,
        textAlign: "center"
    },
    desc: {
        ...FONTS.Regular16,
    },
    image_row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    left_image: {
        height: 180,
        left: -SIZES.padding * 0.6,
        top: -SIZES.padding * 2.5
    },
    right_image: {
        height: 180,
        right: -SIZES.padding * 0.6,
        top: -SIZES.padding * 2.5
    },
    delivery_text: {
        ...FONTS.Bold16,
        textAlign: "left",
        marginLeft: SIZES.padding,
        marginTop: -SIZES.padding
    },
    address_view: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: SIZES.padding
    },
    address_text: {
        textAlign: "left",
        marginLeft: SIZES.padding2 * 0.5,
        ...FONTS.Regular11,
    },
    summary_text: {
        ...FONTS.Bold14,
        textAlign: "left",
        marginLeft: SIZES.padding,
        marginTop: SIZES.padding
    },
    text_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: SIZES.padding2,
        paddingHorizontal: SIZES.padding
    },
    order_text: {
        ...FONTS.Regular12,
        color: 'rgba(9, 15, 71, 0.45)',
    },
    order_price: {
        ...FONTS.Regular12,
    },
    border: {
        borderBottomWidth: 1,
        borderColor: COLORS.primary_border,
        marginTop: SIZES.padding2,
        width: "90%",
        alignSelf: "center"
    },
    total_text: {
        ...FONTS.Regular14,
    },
    text_price: {
        ...FONTS.Bold14,
    },
    btn: {
        marginTop: SIZES.padding * 2,
        backgroundColor: COLORS.secondary,
        width: "90%",
        alignSelf: "center"
    }
})