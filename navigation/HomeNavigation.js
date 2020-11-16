import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native';

// import DashboardScreen from '../../screens/main/DashboardScreen';
import TabNavigation from '../navigation/TabNavigation';
import DrawerNavigation from '../navigation/DrawerNavigation';
import SubjectDetailsScreen from '../screens/main/SubjectDetailsScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubjectDetails"
        component={SubjectDetailsScreen}
        options={{
          headerTitle: (props) => (
            <Text style={{fontSize: 18}}>Subject details</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
