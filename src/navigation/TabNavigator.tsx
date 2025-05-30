/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

//#region - PAGES
import Home from '../pages/Home/Home';
import Diagnose from '../pages/Details/Diagnose';
import QR from '../pages/Details/QR';
import MyGarden from '../pages/Details/MyGarden';
import Profile from '../pages/Details/Profile';
//#endregion

//#region - ICONS
import HomeIcon from "../assets/images/home.svg";
import DiagnoseIcon from "../assets/images/diagnose.svg";
import ScanIcon from "../assets/images/scan.svg";
import GardenIcon from "../assets/images/garden.svg";
import ProfileIcon from "../assets/images/profile.svg";
//#endregion

import { fonts, useTheme } from '../theme';

const { width } = Dimensions.get("screen");

const Main = () => {
    const Tab = createBottomTabNavigator();
    const { colors } = useTheme()
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}
            tabBar={({ state, descriptors, navigation, insets }) => {
                return (
                    <View style={{ width: width, height: 84, justifyContent: 'flex-end' }}>
                        <View style={{
                            width: '100%', height: 84, backgroundColor: colors.white,
                            shadowColor: colors.black,
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {
                                state.routes.map((route, index) => {
                                    const { options } = descriptors[route.key];
                                    const label: any =
                                        options.tabBarLabel !== undefined
                                            ? options.tabBarLabel
                                            : options.title !== undefined
                                                ? options.title
                                                : route.name;

                                    const isFocused = state.index === index;

                                    const onPress = () => {
                                        const event = navigation.emit({
                                            type: 'tabPress',
                                            target: route.key,
                                            canPreventDefault: true,
                                        });

                                        if (!isFocused && !event.defaultPrevented) {
                                            navigation.navigate(route.name, route.params);
                                        }
                                    };

                                    const onLongPress = () => {
                                        navigation.emit({
                                            type: 'tabLongPress',
                                            target: route.key,
                                        });
                                    };
                                    if (route.name == "QR")
                                        return (
                                            <TouchableOpacity key={`nav_tab_${route.key}`}
                                                accessibilityRole="button"
                                                accessibilityState={isFocused ? { selected: true } : {}}
                                                onPress={onPress}
                                                onLongPress={onLongPress}
                                                style={{ width: 64, height: 64, top: -32, }}>
                                                <LinearGradient colors={[colors.tabGradientStart, colors.tabGradientEnd]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width: '100%', height: '100%', borderRadius: 1000, justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{
                                                        backgroundColor: colors.primary, borderRadius: 100,
                                                        height: 54, width: 54,
                                                        justifyContent: 'center', alignItems: 'center'
                                                    }}>
                                                        {
                                                            options.tabBarIcon({ color: colors.white, focused: isFocused })
                                                        }
                                                    </View>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        )
                                    else return (
                                        <TouchableOpacity
                                            key={`nav_tab_${route.key}`}
                                            accessibilityRole="button"
                                            accessibilityState={isFocused ? { selected: true } : {}}
                                            onPress={onPress}
                                            onLongPress={onLongPress}
                                            style={{ width: (width - 16) / state.routes.length, height: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                                            {
                                                options.tabBarIcon({ color: isFocused ? colors.primary : colors.icon, focused: isFocused })
                                            }
                                            <Text style={{
                                                fontFamily: fonts.light,
                                                color: isFocused ? colors.primary : colors.icon,
                                                fontSize: 10,
                                                marginTop: 4
                                            }}>{label}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                )
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => {
                    return (
                        <HomeIcon fill={color} width={24} height={24} />
                    )
                }
            }} />
            <Tab.Screen name="Diagnose" component={Diagnose} options={{
                title: "Diagnose",
                tabBarIcon: ({ color, focused }) => {
                    return (
                        <DiagnoseIcon fill={color} width={24} height={24} />
                    )
                }
            }} />
            <Tab.Screen name="QR" component={QR} options={{
                tabBarIcon: ({ color, focused }) => {
                    return (
                        <ScanIcon fill={color} width={24} height={24} />
                    )
                }
            }} />
            <Tab.Screen name="MyGarden" component={MyGarden} options={{
                title: "My Garden",
                tabBarIcon: ({ color, focused }) => {
                    return (
                        <GardenIcon fill={color} width={24} height={24} />
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: "Profile",
                tabBarIcon: ({ color, focused }) => {
                    return (
                        <ProfileIcon fill={color} width={24} height={24} />
                    )
                }
            }} />
        </Tab.Navigator>
    )
}
export default Main;
