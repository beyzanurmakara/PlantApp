import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Linking, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fonts, useTheme } from "../../../theme";

const { width, height } = Dimensions.get("screen");

const Questions = (props: any) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <FlatList
            horizontal
            data={props.questions}
            keyExtractor={(item, index) => `questions_key_${index}`}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        Linking.canOpenURL(item.uri)
                            .then((val) => {
                                if (val) {
                                    Linking.openURL(item.uri)
                                }
                            })
                            .catch((e) => {
                                console.log('ERROR: ', e)
                                Alert.alert("Üzgünüm şu an yönlendiremiyorum 😔")
                            })
                    }} style={[styles.card, index == props.questions.length - 1 && { marginRight: 48 }]}>
                        <Image source={{ uri: item?.image_uri }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text numberOfLines={2} style={styles.text}>{item?.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        height: (width * 0.6) * 0.66 + 60
    },
    card: {
        width: width * 0.6,
        height: (width * 0.6) * 0.66,
        borderRadius: 12,
        backgroundColor: colors.white,
        marginRight: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: '100%',
        height: (width * 0.6) * 0.25,
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingHorizontal: 14,
        justifyContent: 'center'
    },
    text: {
        width: '85%',
        fontFamily: fonts.default,
        fontSize: 16,
        color: colors.white
    }
})

export default Questions;