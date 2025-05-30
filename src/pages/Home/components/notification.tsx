import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MessageIcon from "../../../assets/images/message.svg";

import GradientText from "../../../components/GradientText";
import { fonts, useTheme } from "../../../theme";

const { width, height } = Dimensions.get("screen");

const Notification = (props: any) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <View style={{ padding: 14, paddingHorizontal: 24 }}>
            <TouchableOpacity style={styles.container}>
                <View style={styles.icon}>
                    <MessageIcon width={45} height={45} fillSecondary={colors.gradientStart} fillStroke={colors.gradientEnd} />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', width: '70%' }}>
                    <GradientText style={styles.title}>FREE Premium Available</GradientText>
                    <GradientText style={styles.description}>Tap to upgrade your account!</GradientText>
                </View>
                <Icon name="chevron-right" color={colors.gradientMiddle} size={24} style={styles.chevron} />
            </TouchableOpacity>
        </View>
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        width: '100%',
        padding: 13,
        paddingLeft: 20,
        backgroundColor: colors.notificationCard,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 45,
        height: 45,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    badge: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 2,
        right: 3,
        backgroundColor: colors.red,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        fontFamily: fonts.semibold,
        color: colors.white,
        fontSize: 10
    },
    title: {
        fontFamily: fonts.semibold,
        fontSize: 16,
        lineHeight: 21
    },
    description: {
        fontFamily: fonts.light,
        fontSize: 13,
        lineHeight: 16
    },
    chevron: {
        position: 'absolute',
        right: 24
    }
})

export default Notification;