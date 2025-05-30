/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import { ThemeProvider } from './src/theme';
import MainStack from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
