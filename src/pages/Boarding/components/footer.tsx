import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { fonts, useTheme } from "../../../theme";

const Footer = (props: any) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <View style={{ paddingHorizontal: 24 }}>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Main',
                            params: {},
                        },
                    ],
                })
            }}>
                <Text style={styles.buttonText}>Try free for 3 Days</Text>
            </TouchableOpacity>
            <Text style={styles.footerDescription}>After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</Text>
            <TouchableOpacity>
                <Text style={styles.terms}>Terms • Privacy • Restore</Text>
            </TouchableOpacity>
        </View>
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        height: 56,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.white
    },
    footerDescription: {
        fontFamily: fonts.default,
        fontSize: 10,
        color: colors.white + "85",
        marginTop: 8
    },
    terms: {
        fontFamily: fonts.default,
        fontSize: 12,
        color: colors.white + "80",
        marginTop: 10,
        textAlign: 'center'
    }
})

export default Footer;