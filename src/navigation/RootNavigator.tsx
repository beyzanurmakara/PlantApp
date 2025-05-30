/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Started from '../pages/Walkthrough/Started';
import Boarding from '../pages/Boarding/Boarding';
import Main from './TabNavigator';

function MainStack(): React.JSX.Element {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Started" component={Started} />
            <Stack.Screen name="Boarding" component={Boarding} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}

export default MainStack;
