import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from './provider/AuthProvider';
import auth from '@react-native-firebase/auth';

import AuthRoutes from '../routes/auth_routes';
import AppRoutes from '../routes/app_routes';

const Routes = route => {
  const [initializing, setInitializing] = useState(true);
  const [userData, setUserData] = useState(null);
  const {user, setUser} = useContext(AuthContext);

  const onAuthChange = user => {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthChange);
    return () => subscriber();
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
