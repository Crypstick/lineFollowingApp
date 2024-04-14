import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/pages/HomeScreen';
import FirstRun from './src/pages/FirstRun';
import SubsequentRun from './src/pages/SubsequentRun';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstRun"
          component={FirstRun}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubsequentRun"
          component={SubsequentRun}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
