import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home, OrderDelivery, Restaurant } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tabs from './navigation/tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={tabs}/>
        <Stack.Screen name="Restaurant" component={tabs}/>
        <Stack.Screen name="OrderDelivery" component={tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
