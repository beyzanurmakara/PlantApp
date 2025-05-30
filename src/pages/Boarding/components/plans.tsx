import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { fonts, useTheme } from "../../../theme";

const plans = [
    {
        id: 1,
        name: "1 Month",
        description: "$2.99/month, auto renewable"
    },
    {
        id: 2,
        name: "1 Year",
        description: "First 3 days free, then $529,99/year"
    }
]

const Plans = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [selectedPeriod, setSelectedPeriod] = React.useState(1)
    return (
        <FlatList
            data={plans}
            keyExtractor={(item, index) => `KEY_VRT_${index}`}
            renderItem={({ item, index }) => {
                if (selectedPeriod == item.id)
                    return (
                        <TouchableOpacity onPress={() => { setSelectedPeriod(item.id) }} style={styles.selectedPlan}>
                            <LinearGradient colors={[colors.primary, colors.primary + "3D"]}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.planContainer}>
                                <View style={{ paddingVertical: 14, paddingHorizontal: 16, }}>
                                    <View style={styles.radioButton}>
                                        <View style={styles.radioButtonSelected} />
                                    </View>
                                </View>
                                {selectedPeriod == 2 &&
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>Save %50</Text>
                                    </View>
                                }
                                <View>
                                    <Text style={styles.planName}>{item.name}</Text>
                                    <Text style={styles.planDescription}>{item.description}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    )
                else
                    return (
                        <TouchableOpacity onPress={() => { setSelectedPeriod(item.id) }} style={[styles.planContainer, styles.unselectedPlan]}>
                            <View style={[styles.radioButton, { backgroundColor: colors.radio }]} />
                            <View style={{ paddingLeft: 14 }}>
                                <Text style={styles.planName}>{item.name}</Text>
                                <Text style={styles.planDescription}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )
            }}
            style={{ paddingHorizontal: 24, marginTop: 24 }}
        />
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    selectedPlan: {
        width: '100%',
        borderColor: colors.primary,
        borderWidth: 1.5,
        borderRadius: 14,
        marginBottom: 16,
    },
    planContainer: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 14,
        alignItems: 'center'
    },
    unselectedPlan: {
        borderColor: colors.white + "4D",
        borderWidth: 0.5,
        paddingVertical: 7,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    radioButton: {
        height: 24,
        width: 24,
        backgroundColor: colors.primary,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioButtonSelected: {
        width: 10,
        height: 10,
        backgroundColor: colors.white,
        borderRadius: 100
    },
    badge: {
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 20,
        backgroundColor: colors.primary,
        paddingVertical: 4,
        paddingHorizontal: 12,
        right: 0
    },
    badgeText: {
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.white,
        fontWeight: '500'
    },
    planName: {
        fontFamily: fonts.medium,
        color: colors.white,
        fontSize: 16,
        marginBottom: 2
    },
    planDescription: {
        fontFamily: fonts.default,
        color: colors.white + "B2",
        fontSize: 12,
    },
})

export default Plans;