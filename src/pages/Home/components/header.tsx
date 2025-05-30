import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

import SearchIcon from "../../../assets/images/search.svg";
import { fonts, useTheme } from "../../../theme";

const Header = (props: any) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/homeBackground.png")} style={styles.headerImage} />
            <View style={[styles.headerContainer, { paddingTop: insets.top + 3 }]}>
                <Text style={styles.text}>Hi, plant lover!</Text>
                <Text style={styles.text2}>Good Afternoon! ⛅</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.search}>
                    <SearchIcon width={20} height={20} style={{ marginRight: 12 }} />
                    <Text style={styles.searchText}>Search for plants</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        width: width,
        minHeight: height * 0.2
    },
    headerImage: {
        width: width,
        height: "100%",
        position: 'absolute',
        top: 0
    },
    headerContainer: {
        paddingHorizontal: 24,
        paddingBottom: 14
    },
    text: {
        fontFamily: fonts.light,
        letterSpacing: 0.07,
        color: colors.secondary,
        fontSize: 16,
        marginBottom: 6
    },
    text2: {
        fontFamily: fonts.medium,
        letterSpacing: 0.35,
        color: colors.secondary,
        fontSize: 24,
        marginBottom: 14
    },
    search: {
        width: '100%',
        borderColor: colors.border,
        borderWidth: 0.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchText: {
        fontFamily: fonts.light,
        color: colors.icon,
        fontSize: 16,
        letterSpacing: 0.07
    }
})

export default Header;