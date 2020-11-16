import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import DashboardScreen from '../screens/main/DashboardScreen';
import SubjectListScreen from '../screens/main/SubjectListScreen';
import MyProfile from '../screens/main/profile/MyProfile';

import TabNavigation from '../navigation/TabNavigation';
import MyApplications from '../screens/main/profile/MyApplications';

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerStyle={{paddingTop: 25}}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="My Profile" component={MyProfile} />
      <Drawer.Screen name="My Applications" component={MyApplications} />
    </Drawer.Navigator>
  );
}
