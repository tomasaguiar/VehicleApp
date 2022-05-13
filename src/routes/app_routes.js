import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      initialRouteName: 'Dashboard',
    }}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Settings" component={Settings} />
  </AppStack.Navigator>
);

export default AppRoutes;
