import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/main/DashboardScreen';
import SubjectListScreen from '../screens/main/SubjectListScreen';
import ApplicationsScreen from '../screens/main/ApplicationsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
          fontSize: 15,
        },
        style: {
          height: 80,
        },
        activeBackgroundColor: '#edfafc',
        tabStyle: {borderTopWidth: 1, borderTopColor: 'lightgrey'},
      }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Subjects" component={SubjectListScreen} />
      <Tab.Screen name="Calendar" component={ApplicationsScreen} />
    </Tab.Navigator>
  );
}
