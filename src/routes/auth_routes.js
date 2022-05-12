import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import LogIn from '../pages/LogIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      initialRouteName: 'Main',
    }}>
    <AuthStack.Screen name="main" component={Main} />
    <AuthStack.Screen name="signin" component={SignIn} />
    <AuthStack.Screen name="login" component={LogIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
