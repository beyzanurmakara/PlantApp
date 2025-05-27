import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Image, FlatList } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import shareStyle from "../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("screen");

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
    const [viewPosition, setViewPosition] = React.useState(new Animated.Value(0))
    const [selected, setSelected] = useState(1)
    const [sales, setSales] = React.useState(new Animated.Value(0))

    return (
        <LinearGradient colors={['#fff', '#def0fe']} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
            {/* <Animated.View style={{
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
                <View style={[shareStyle.container, { paddingTop: insets.top }]}>
                    <View style={shareStyle.headerContainer}>
                        {list[0].title()}
                    </View>
                    <Image source={list[0].image} style={shareStyle.image} resizeMode='stretch' />
                    <View style={shareStyle.footerContainer}>
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
                            if (activeIndex == 0) {
                                setActiveIndex(1)
                            } else {
                                navigation.reset({
                                    index: 0,
                                    routes: [
                                        {
                                            name: '',
                                            params: {},
                                        },
                                    ],
                                })
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
                alignItems: 'center'
            }}>
                <Dots length={2} active={activeIndex} activeColor="#13231B" passiveColor="#13231B40" width={width} activeDotWidth={10} activeDotHeight={10} passiveDotHeight={6} passiveDotWidth={6} />
            </View> */}
            <View style={{
                position: 'absolute',
                width: width,
                height: height,
                backgroundColor: '#101e17'

            }}>
                <Image source={require("../assets/images/boarding_3.png")} style={{ width: width, height: height * .65, position: 'absolute', zIndex: 1 }} />
                <View style={{ width: '100%', justifyContent: 'flex-end', height: height * 0.8, zIndex: 10 }}>
                    <Text style={[shareStyle.header, { color: "#fff", paddingHorizontal: 24 }]}><Text style={{ fontFamily: "Rubik-Medium" }}>PlantApp</Text> Premium</Text>
                    <Text style={{
                        fontFamily: "Rubik-Light",
                        letterSpacing: 0.3,
                        fontSize: 17,
                        color: "#FFFFFFB2",
                        paddingHorizontal: 24,
                        marginBottom: 20
                    }}>Access All Features</Text>
                    <View style={{ height: 200 }}>
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
                </View>
            </View>
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