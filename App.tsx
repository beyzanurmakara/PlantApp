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

import Started from './src/pages/Started';
import Boarding from './src/pages/Boarding';
import Home from './src/pages/Home';
import Diagnose from './src/pages/Diagnose';
import QR from './src/pages/QR';
import MyGarden from './src/pages/MyGarden';
import Profile from './src/pages/Profile';


const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="QR" component={QR} />
      <Tab.Screen name="MyGarden" component={MyGarden} />
      <Tab.Screen name="Profile" component={Profile} />
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
