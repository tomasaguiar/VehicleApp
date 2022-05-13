import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import ServicesDashboard from '../pages/Dashboard/Services/services';
import ActiveServices from '../pages/Dashboard/Active/active';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      initialRouteName: 'Dashboard',
    }}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Settings" component={Settings} />
    <AppStack.Screen name="Services" component={ServicesDashboard} />
    <AppStack.Screen name="Active" component={ActiveServices} />
  </AppStack.Navigator>
);

export default AppRoutes;
