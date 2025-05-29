import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Image, FlatList, Touchable } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Dots from "react-native-dots-pagination";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

import shareStyle from "../styles";

const { width, height } = Dimensions.get("screen");
const show = "SHOW_SALE"
const list = [
    {
        id: 1,
        title: () => <Text style={shareStyle.header}>Take a photo to <Text style={{ fontFamily: "Rubik-Medium" }}>identify</Text> the plant!</Text>,
        image: require("../assets/images/boarding_1.png"),
        isFull: false
    },
    {
        id: 2,
        title: () => <Text style={shareStyle.header}>Get plant <Text style={{ fontFamily: "Rubik-Medium" }}>care guides</Text></Text>,
        image: require("../assets/images/boarding_2.png"),
        isFull: false
    }
]

const Boarding = (props: any) => {
    const { navigation } = props;
    const insets = useSafeAreaInsets();
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [selected, setSelected] = useState(1)
    const [selectedPeriod, setSelectedPeriod] = useState(1)
    const [viewPosition, setViewPosition] = React.useState(new Animated.Value(0))
    const [viewPositionSale, setViewPositionSale] = React.useState(new Animated.Value(0))
    const [sales, setSales] = React.useState(new Animated.Value(0))

    return (
        <LinearGradient colors={['#fff', '#def0fe']} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
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
                <View style={[shareStyle.container, { paddingTop: insets.top, height: "10%" }]}>
                    <View style={shareStyle.headerContainer}>
                        {list[0].title()}
                    </View>
                    <Image source={list[0].image} style={[shareStyle.image, { height: "85%", marginTop: -height * .15, marginBottom: -height * 0.2 }]} />
                    <View style={[shareStyle.footerContainer, { height: '16%' }]}>
                        <TouchableOpacity style={shareStyle.button} onPress={() => {
                            setActiveIndex(1)
                            Animated.timing(viewPosition, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: true
                            }).start()

                        }}>
                            <Text style={shareStyle.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={[shareStyle.footer, { color: "transparent" }]}>
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
                <View style={[shareStyle.container, { paddingTop: insets.top }]}>
                    <View style={shareStyle.headerContainer}>
                        {list[1].title()}
                    </View>
                    <Image source={list[1].image} style={[shareStyle.image]} resizeMode='cover' />
                    <View style={shareStyle.footerContainer}>
                        <TouchableOpacity style={shareStyle.button} onPress={() => {
                            if (storage.getBoolean(show)) {
                                navigation.reset({
                                    index: 0,
                                    routes: [
                                        {
                                            name: 'Main',
                                            params: {},
                                        },
                                    ],
                                })
                            } else {
                                Animated.timing(viewPositionSale, {
                                    toValue: 1,
                                    duration: 500,
                                    useNativeDriver: true
                                }).start()
                            }
                        }}>
                            <Text style={shareStyle.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={[shareStyle.footer, { color: "transparent" }]}>
                            By tapping next, you are agreeing to <Text style={{ textDecorationLine: 'underline' }}>PlantID Terms of Use & Privacy Policy.</Text>
                        </Text>
                    </View>
                </View>
            </Animated.View>
            <View style={{
                width: width,
                position: 'absolute',
                bottom: 45,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100
            }}>
                <Dots length={2} active={activeIndex} activeColor="#13231B" passiveColor="#13231B40" width={width} activeDotWidth={10} activeDotHeight={10} passiveDotHeight={6} passiveDotWidth={6} />
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
                <Image source={require("../assets/images/boarding_3.png")} style={{ width: width, height: height * .65, position: 'absolute', zIndex: 1 }} />
                <View style={{ width: '100%', justifyContent: 'flex-end', height: height - insets.bottom, zIndex: 10 }}>
                    <Text style={[shareStyle.header, { color: "#fff", paddingHorizontal: 24 }]}><Text style={{ fontFamily: "Rubik-Medium" }}>PlantApp</Text> Premium</Text>
                    <Text style={{
                        fontFamily: "Rubik-Light",
                        letterSpacing: 0.3,
                        fontSize: 17,
                        color: "#FFFFFFB2",
                        paddingHorizontal: 24,
                        marginBottom: 20
                    }}>Access All Features</Text>
                    <View style={{ height: 130 }}>
                        <FlatList
                            data={[
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
                            ]}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => setSelected(item.id)} style={[{
                                        width: 156,
                                        height: 130,
                                        marginRight: 8,
                                        backgroundColor: '#26322c',
                                        borderRadius: 14,
                                        marginLeft: index == 0 ? 24 : 0,
                                        padding: 16,
                                    }, selected == item.id && {
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity: 0.27,
                                        shadowRadius: 100,

                                        elevation: 6,

                                    }]}>
                                        <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 8, width: 36, height: 36, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                                            <Icon name={item.icon} color="#fff" size={18} />
                                        </View>
                                        <Text style={{
                                            fontFamily: "Rubik-Medium",
                                            color: "#fff",
                                            fontSize: 20,
                                            marginBottom: 4
                                        }}>{item.name}</Text>

                                        <Text style={{
                                            fontFamily: "Rubik-Medium",
                                            color: "#FFFFFFB2",
                                            fontSize: 13,
                                            marginBottom: 4
                                        }}>{item.sub}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            showsHorizontalScrollIndicator={false}
                            style={{ height: 100 }}
                            keyExtractor={(item, index) => `KEY_${index}`}
                        />
                    </View>
                    <View style={{ height: 180 }}>
                        <FlatList
                            data={[
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
                            ]}
                            keyExtractor={(item, index) => `KEY_VRT_${index}`}
                            renderItem={({ item, index }) => {
                                if (selectedPeriod == item.id)
                                    return (
                                        <TouchableOpacity onPress={() => { setSelectedPeriod(item.id) }} style={{
                                            width: '100%',
                                            borderColor: "#28AF6E",
                                            borderWidth: 1.5,
                                            borderRadius: 14,
                                            marginBottom: 16,
                                        }}>
                                            <LinearGradient colors={["#28AF6E00", "#28AF6E3D"]}
                                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    borderRadius: 14,
                                                    alignItems: 'center'
                                                }}>
                                                <View style={{
                                                    paddingVertical: 14,
                                                    paddingHorizontal: 16,
                                                }}>
                                                    <View style={{ height: 24, width: 24, backgroundColor: "#28AF6E", borderRadius: 1000, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ width: 10, height: 10, backgroundColor: '#fff', borderRadius: 100 }} />
                                                    </View>
                                                </View>
                                                {selectedPeriod == 2 &&
                                                    <View style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        borderBottomLeftRadius: 20,
                                                        backgroundColor: "#28AF6E",
                                                        paddingVertical: 4,
                                                        paddingHorizontal: 12,
                                                        right: 0
                                                    }}>
                                                        <Text style={{
                                                            fontFamily: 'Rubik-Medium',
                                                            fontSize: 12,
                                                            color: "#fff",
                                                            fontWeight: '500'
                                                        }}>Save %50</Text>
                                                    </View>
                                                }
                                                <View>
                                                    <Text style={{
                                                        fontFamily: "Rubik-Medium",
                                                        color: "#fff",
                                                        fontSize: 16,
                                                        marginBottom: 2
                                                    }}>{item.name}</Text>
                                                    <Text style={{
                                                        fontFamily: "Rubik-Regular",
                                                        color: "#FFFFFFB2",
                                                        fontSize: 12,
                                                    }}>{item.description}</Text>
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    )
                                else
                                    return (
                                        <TouchableOpacity onPress={() => { setSelectedPeriod(item.id) }} style={{
                                            width: '100%',
                                            borderColor: "#FFFFFF4D",
                                            borderWidth: 0.5,
                                            borderRadius: 14,
                                            paddingVertical: 7,
                                            paddingHorizontal: 8,
                                            marginBottom: 16,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <View style={{ height: 24, width: 24, backgroundColor: '#2f3a35', borderRadius: 1000, justifyContent: 'center', alignItems: 'center' }} />
                                            <View style={{
                                                paddingLeft: 14
                                            }}>
                                                <Text style={{
                                                    fontFamily: "Rubik-Medium",
                                                    color: "#fff",
                                                    fontSize: 16,
                                                    marginBottom: 2
                                                }}>{item.name}</Text>
                                                <Text style={{
                                                    fontFamily: "Rubik-Regular",
                                                    color: "#FFFFFFB2",
                                                    fontSize: 12,
                                                }}>{item.description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                            }}
                            style={{ paddingHorizontal: 24, marginTop: 24 }}
                        />

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <TouchableOpacity style={shareStyle.button} onPress={() => {
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
                            <Text style={shareStyle.buttonText}>Try free for 3 Days</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: "Rubik-Regular",
                            fontSize: 10,
                            color: "#FFFFFF85",
                            marginTop: 8
                        }}>After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontFamily: "Rubik-Regular",
                                fontSize: 12,
                                color: "#FFFFFF80",
                                marginTop: 10,
                                textAlign: 'center'
                            }}>Terms • Privacy • Restore</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity hitSlop={{ bottom: 5, right: 5, top: 5, left: 5 }} style={{
                    position: 'absolute',
                    top: insets.top + 10,
                    right: 20,
                    backgroundColor: "#00000066",
                    width: 24,
                    height: 24,
                    borderRadius: 1000,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 12
                }} onPress={() => {
                    storage.set(show, true)
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
                    <Icon name="close" color="#fff" size={18} />
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Boarding;