import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import City from '../containers/City';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, title: '' }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='City' component={City} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeNavigator;