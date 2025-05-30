import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

import { fonts, useTheme } from '../../theme';
import { show_sale } from '../Boarding/Boarding';

const GetStarted = (props: any) => {
    const { navigation } = props;
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const styles = getStyles(colors);

    React.useEffect(() => {
        if (storage.getBoolean(show_sale))
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'Main',
                        params: {},
                    },
                ],
            })
    }, [])
    return (
        <LinearGradient colors={[colors.white, colors.light]} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Welcome To <Text style={{ fontFamily: fonts.medium }}>PlantApp</Text></Text>
                    <Text style={styles.description}>Identify more than 3000+ plants and 88% accuracy.</Text>
                </View>
                <Image source={require("../../assets/images/walktrough.png")} style={styles.image} resizeMode='stretch' />
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Boarding',
                                params: {},
                            },
                        ],
                    })}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    <Text style={styles.footer}>
                        By tapping next, you are agreeing to <Text style={{ textDecorationLine: 'underline' }}>PlantID Terms of Use & Privacy Policy.</Text>
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const getStyles = (colors: any) => StyleSheet.create({
    header: {
        fontFamily: fonts.light,
        fontSize: 28,
        color: colors.secondary,
    },
    description: {
        fontFamily: fonts.light,
        fontSize: 16,
        color: colors.secondary + "B2",
        marginTop: 8,
        width: '80%'
    },
    footer: {
        color: colors.footerColor,
        marginTop: 16,
        fontFamily: fonts.light,
        lineHeight: 15,
        fontSize: 12,
        textAlign: 'center',
        width: '60%',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'space-between'
    },
    headerContainer: {
        marginBottom: 24,
        height: '20%',
        paddingHorizontal: 24
    },
    footerContainer: {
        height: '20%',
        paddingHorizontal: 24
    },
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
    image: {
        width: '100%',
        height: '60%'
    }
})

export default GetStarted;
