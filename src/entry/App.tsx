/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import { Info } from '../screens/Info';
import { NavigationContainer } from '@react-navigation/native';
import { Cases } from '../screens/Cases';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name={Routes.CASES} component={Cases} />
          <Stack.Screen name={Routes.INFO} component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
