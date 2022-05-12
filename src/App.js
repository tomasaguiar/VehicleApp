import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes/routes';
import {NavigationContainer} from '@react-navigation/native';

import {
  setCustomTextInput,
  setCustomText,
  setCustomTouchableOpacity,
} from 'react-native-global-props';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Poppins-Regular',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);
  setCustomTouchableOpacity(customTextProps);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
