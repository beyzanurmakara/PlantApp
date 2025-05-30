import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { fonts, useTheme } from "../../../theme";

const { width, height } = Dimensions.get("screen");

const Categories = (props: any) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <FlatList
            data={props.categories}
            keyExtractor={(item, index) => `categories_keys_${index}`}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image?.url }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )
            }}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
            columnWrapperStyle={styles.columnWrapper}
        />
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    card: {
        width: (width - 72) / 2,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 12,
        overflow: "hidden",
        borderColor: colors.categoryCardBorder,
        borderWidth: 0.5,
        backgroundColor: colors.categoryCardColor
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: fonts.semibold,
        color: colors.secondary,
        fontSize: 16,
        position: 'absolute',
        top: 16,
        left: 16,
        width: '60%'
    },
    contentContainer: {
        padding: 24,
        paddingBottom: height * 0.63
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 24,
    }
})

export default Categories;