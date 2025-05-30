import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts, useTheme } from "../../../theme";

const features = [
    {
        id: 1,
        icon: "line-scan",
        name: "Unlimeted",
        sub: "Plant Identify"
    },
    {
        id: 2,
        icon: "speedometer",
        name: "Faster",
        sub: "Process"
    },
    {
        id: 3,
        icon: "spa",
        name: "Detailed",
        sub: "Plantcare"
    }
]

const Features = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [selected, setSelected] = React.useState(1)
    return (
        <FlatList
            data={features}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={() => setSelected(item.id)} style={[styles.featureBox, { marginLeft: index == 0 ? 24 : 0, }, selected == item.id && styles.shadow]}>
                        <View style={styles.featureIcon}>
                            <Icon name={item.icon} color={colors.white} size={18} />
                        </View>
                        <Text style={styles.featureName}>{item.name}</Text>
                        <Text style={styles.featureSub}>{item.sub}</Text>
                    </TouchableOpacity>
                )
            }}
            showsHorizontalScrollIndicator={false}
            style={{ height: 100 }}
            keyExtractor={(item, index) => `KEY_${index}`}
        />
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    featureBox: {
        width: 156,
        height: 130,
        marginRight: 8,
        backgroundColor: colors.dark,
        borderRadius: 14,
        padding: 16,
    },
    shadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 100,

        elevation: 6,
    },
    featureIcon: {
        backgroundColor: colors.black + "4D",
        borderRadius: 8,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    featureName: {
        fontFamily: fonts.medium,
        color: colors.white,
        fontSize: 20,
        marginBottom: 4
    },
    featureSub: {
        fontFamily: fonts.medium,
        color: colors.white + "B2",
        fontSize: 13,
        marginBottom: 4
    },
})

export default Features;