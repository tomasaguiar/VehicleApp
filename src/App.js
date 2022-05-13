import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes/routes';
import {AuthProvider} from './routes/provider/AuthProvider';
import RNCalendarEvents from 'react-native-calendar-events';

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
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
