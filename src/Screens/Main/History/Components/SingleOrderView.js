import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../../Components/Constant'

const SingleOrderView = ({ status, name1, name2, price1, price2, order_id, order_date, eta, name, quantity, isFirst = false }) => {
    return (
        <View style={styles.main_view} >
            <View style={styles.top_row} >
                <Text text={isFirst ? 'Order naiDetails - Status' : 'Order Details - Status'} style={styles.status_text} />
                <View style={[styles.status_view, {
                    backgroundColor: status === 'Completed' ? "#DCFFDF" : "#FFECDC"
                }]} >
                    <Text text={status} style={[styles.status, {
                        color: status === 'Completed' ? "#06AB48" : "#C57E42"
                    }]} />
                </View>
            </View>
            <View style={{ height: SIZES.padding2 }} />
            <View style={styles.top_row} >
                <Text text={name1} style={styles.medicine} />
                <Text text={"Rs. " + price1} style={styles.medicine} />
            </View>
            <View style={styles.top_row} >
                <Text text={name2} style={styles.medicine} />
                <Text text={"Rs. " + price2} style={styles.medicine} />
            </View>
            <View style={{ height: SIZES.padding2 }} />
            <View style={styles.top_row} >

                <View>
                    <Text text={"ORDER ID:"} style={styles.key} />
                    <Text text={order_id} style={styles.value} />
                </View>
                <View>
                    <Text text={"ORDER DATE"} style={styles.key} />
                    <Text text={order_date} style={styles.value} />
                </View>
                <View>
                    <Text text={"ETA:"} style={styles.key} />
                    <Text text={eta} style={styles.value} />
                </View>
            </View>
            <View style={{ height: SIZES.padding2 }} />
            <View style={styles.top_row} >

                <View>
                    <Text text={"Distributor Name"} style={styles.key} />
                    <Text text={name} style={styles.value} />
                </View>
                <View>
                    <Text text={"qty"} style={styles.key} />
                    <Text text={quantity} style={styles.value} />
                </View>
                <Button style={styles.btn}
                    buttonText='Re-Order'
                    textStyle={{ ...FONTS.Medium11 }}
                />
            </View>
        </View>
    )
}

export default SingleOrderView

const styles = StyleSheet.create({
    main_view: {
        backgroundColor: COLORS.light_gray1,
        padding: SIZES.padding2,
        marginTop: SIZES.padding * 1.5,
        shadowColor: 'rgba(170, 33, 33, 0.6)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    top_row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    status_text: {
        ...FONTS.Medium14,
        textAlign: "left",
        color: COLORS.black
    },
    status_view: {
        paddingHorizontal: SIZES.padding2,
        height: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    status: {
        ...FONTS.Medium11
    },
    medicine: {
        ...FONTS.Medium12,
        color: "#333333"
    },
    key: {
        color: "#667080",
        textAlign: "left",
        ...FONTS.Regular11
    },
    value: {
        color: "#333333",
        textAlign: "left",
        ...FONTS.Medium11
    },
    btn: {
        width: "30%",
        height: 33,
        marginTop: 0
    }
})