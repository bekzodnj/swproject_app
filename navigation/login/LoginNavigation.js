import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/login/LoginScreen';
import RegisterScreen from '../../screens/login/RegisterScreen';

import DashboardScreen from '../../screens/main/DashboardScreen';
const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
