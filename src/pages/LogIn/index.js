import React from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../routes/provider/AuthProvider';
import {CaretLeft} from 'phosphor-react-native';

const LogIn = ({navigation}) => {
  const [focused, setFocused] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const {login} = React.useContext(AuthContext);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{marginHorizontal: 38}}>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <CaretLeft size={24} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginRight: 25,
              }}>
              Log In
            </Text>
            <Text />
          </View>
          <View style={{marginTop: 30}}>
            <TextInput
              style={{
                borderRadius: 10,
                width: '100%',
                height: 60,
                backgroundColor: '#222222',
                padding: 15,
                marginBottom: 10,
                borderWidth: 1.5,
                borderColor: focused ? '#535353' : '#000',
                fontSize: 12,
              }}
              placeholder="Email"
              placeholderTextColor="#a8a8a8"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={{
                borderRadius: 10,
                width: '100%',
                height: 60,
                backgroundColor: '#222222',
                padding: 15,
                borderWidth: 1.5,
                borderColor: focused ? '#535353' : '#000',
                fontSize: 12,
              }}
              placeholder="Password"
              placeholderTextColor="#a8a8a8"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={password}
              onChangeText={setPassword}
            />
            <View style={{marginTop: 25}}>
              <TouchableOpacity
                onPress={() => {
                  setLoading(true);
                  login(email, password);
                }}
                style={{
                  borderRadius: 10,
                  width: '100%',
                  height: 55,
                  backgroundColor: '#2B52FF',
                  padding: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#d6d6d6', fontWeight: 'bold'}}>Next</Text>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#a8a8a8', textDecorationLine: 'underline'}}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  position: 'absolute',
                  bottom: -390,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#a8a8a8', fontSize: 12}}>
                  MyVehicle © 2022
                </Text>
                {/* <Text style={{color: '#a8a8a8'}}>Privacy & Legal Contact</Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogIn;
