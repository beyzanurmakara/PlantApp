/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//#region - PAGES
import Started from './src/pages/Started';
import Boarding from './src/pages/Boarding';
import Home from './src/pages/Home';
import Diagnose from './src/pages/Diagnose';
import QR from './src/pages/QR';
import MyGarden from './src/pages/MyGarden';
import Profile from './src/pages/Profile';
//#endregion

//#region - ICONS
import HomeIcon from "./src/assets/images/home.svg";
import DiagnoseIcon from "./src/assets/images/diagnose.svg";
import ScanIcon from "./src/assets/images/scan.svg";
import GardenIcon from "./src/assets/images/garden.svg";
import ProfileIcon from "./src/assets/images/profile.svg";
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//#endregion

const { width } = Dimensions.get("screen");

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation, insets }) => {
        return (
          <View style={{ width: width, height: 107, justifyContent: 'flex-end' }}>
            <View style={{
              width: '100%', height: 84, backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center'
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
                      <TouchableOpacity key={`nav_tab_${route.key}`} style={{ width: 64, height: 64, top: -32, }}>
                        <LinearGradient colors={["#5CC191", "#58C28F"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width: '100%', height: '100%', borderRadius: 1000, justifyContent: 'center', alignItems: 'center' }}>
                          <View style={{
                            backgroundColor: "#28AF6E", borderRadius: 100,
                            height: 54, width: 54,
                            justifyContent: 'center', alignItems: 'center'
                          }}>
                            {
                              options.tabBarIcon({ color:  "#fff", focused: isFocused })
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
                      style={{ width: (Dimensions.get("screen").width - 16) / state.routes.length, height: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                      {
                        options.tabBarIcon({ color: isFocused ? "#28AF6E" : "#BDBDBD", focused: isFocused })
                      }
                      <Text style={{
                        fontFamily: 'Rubik-Light',
                        color: isFocused ? "#28AF6E" : "#979798",
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

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
