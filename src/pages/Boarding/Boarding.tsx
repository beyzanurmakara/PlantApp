import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Image, FlatList, Touchable } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Dots from "react-native-dots-pagination";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MMKV } from "react-native-mmkv";

import Features from "./components/features";
import Plans from "./components/plans";
import Footer from "./components/footer";
import { fonts, useTheme } from "../../theme";
const storage = new MMKV();


const { width, height } = Dimensions.get("screen");
export const show_sale = "SHOW_SALE"

const Boarding = (props: any) => {
    const { navigation } = props;
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [viewPosition, setViewPosition] = React.useState(new Animated.Value(0))
    const [viewPositionSale, setViewPositionSale] = React.useState(new Animated.Value(0))

    return (
        <LinearGradient colors={[colors.white, colors.light]} style={styles.container} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
            <Animated.View style={{
                position: "absolute",
                zIndex: 1,
                height: height,
                width: width,
                transform: [
                    {
                        translateX: viewPosition.interpolate({
                            inputRange: [0, 1], outputRange: [0, -width]
                        })
                    }
                ],
                opacity: viewPosition.interpolate({
                    inputRange: [0, 1], outputRange: [1, 0]
                })
            }}>
                <View style={[styles.innerContainer, { paddingTop: insets.top, height: "10%" }]}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Take a photo to <Text style={{ fontFamily: fonts.medium }}>identify</Text> the plant!</Text>
                    </View>
                    <Image source={require("../../assets/images/boarding_1.png")} style={[styles.image, { height: "85%", marginTop: -height * .15, marginBottom: -height * 0.2 }]} />
                    <View style={[styles.footerContainer, { height: '16%' }]}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setActiveIndex(1)
                            Animated.timing(viewPosition, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: true
                            }).start()

                        }}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={[styles.footer, { color: "transparent" }]}>
                            By tapping next, you are agreeing to <Text style={{ textDecorationLine: 'underline' }}>PlantID Terms of Use & Privacy Policy.</Text>
                        </Text>
                    </View>
                </View>
            </Animated.View>
            <Animated.View style={{
                width: width,
                transform: [
                    {
                        translateX: viewPosition.interpolate({
                            inputRange: [0, 1], outputRange: [width, 0]
                        })
                    }
                ],
                opacity: viewPosition.interpolate({
                    inputRange: [0, 1], outputRange: [0, 1]
                })
            }}>
                <View style={[styles.innerContainer, { paddingTop: insets.top }]}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Get plant <Text style={{ fontFamily: fonts.medium }}>care guides</Text></Text>
                    </View>
                    <Image source={require("../../assets/images/boarding_2.png")} style={styles.image} resizeMode='cover' />
                    <View style={styles.footerContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            Animated.timing(viewPositionSale, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: true
                            }).start()
                        }}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={[styles.footer, { color: "transparent" }]}>
                            By tapping next, you are agreeing to <Text style={{ textDecorationLine: 'underline' }}>PlantID Terms of Use & Privacy Policy.</Text>
                        </Text>
                    </View>
                </View>
            </Animated.View>
            <View style={styles.dots}>
                <Dots length={2} active={activeIndex} activeColor={colors.secondary} passiveColor={colors.secondary + "40"} width={width} activeDotWidth={10} activeDotHeight={10} passiveDotHeight={6} passiveDotWidth={6} />
            </View>
            <Animated.View style={{
                position: 'absolute',
                width: width,
                height: height,
                backgroundColor: '#101e17',
                transform: [
                    {
                        translateY: viewPositionSale.interpolate({
                            inputRange: [0, 1], outputRange: [height, 0]
                        })
                    }
                ],
                opacity: viewPositionSale.interpolate({
                    inputRange: [0, 1], outputRange: [0, 1]
                })

            }}>
                <Image source={require("../../assets/images/boarding_3.png")} style={styles.paymentImage} />
                <View style={{ width: '100%', justifyContent: 'flex-end', height: height - insets.bottom, zIndex: 10 }}>
                    <Text style={[styles.header, { color: colors.white, paddingHorizontal: 24 }]}><Text style={{ fontFamily: fonts.medium }}>PlantApp</Text> Premium</Text>
                    <Text style={styles.featureHeader}>Access All Features</Text>
                    <View style={{ height: 130 }}>
                        <Features />
                    </View>
                    <View style={{ height: 180 }}>
                        <Plans />
                    </View>
                    <Footer navigation={navigation} />
                </View>
                <TouchableOpacity hitSlop={{ bottom: 5, right: 5, top: 5, left: 5 }} style={[styles.close, { top: insets.top + 10, }]} onPress={() => {
                    storage.set(show_sale, true)
                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Main',
                                params: {},
                            },
                        ],
                    })
                }}>
                    <Icon name="close" color={colors.white} size={18} />
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'space-between'
    },
    headerContainer: {
        marginBottom: 24,
        height: '20%',
        paddingHorizontal: 24
    },
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
    image: { width: '100%', height: '60%' },
    dots: {
        width: width,
        position: 'absolute',
        bottom: 45,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    paymentImage: {
        width: width,
        height: height * .65,
        position: 'absolute',
        zIndex: 1
    },
    close: {
        position: 'absolute',
        right: 20,
        backgroundColor: colors.black + "66",
        width: 24,
        height: 24,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 12
    },
    featureHeader: {
        fontFamily: fonts.light,
        letterSpacing: 0.3,
        fontSize: 17,
        color: colors.white + "B2",
        paddingHorizontal: 24,
        marginBottom: 20
    },
})

export default Boarding;