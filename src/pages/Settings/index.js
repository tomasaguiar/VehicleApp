import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../routes/provider/AuthProvider';

import {
  CaretLeft,
  CaretRight,
  UserSwitch,
  SignOut,
} from 'phosphor-react-native';

const Settings = ({navigation}) => {
  const {user, logout} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: '#171717'}}>
      <View style={{marginHorizontal: 38}}>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <CaretLeft color="#999999" />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 10}}>Definições</Text>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() => {
              logout();
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <SignOut size={30} color={'#252525'} weight="fill" />
              </View>
              <View style={{marginRight: 185}}>
                <Text style={{fontSize: 16}}>Logout</Text>
              </View>
              <View>
                <CaretRight color={'#404040'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <UserSwitch size={35} color={'#252525'} weight="fill" />
              </View>
              <View style={{marginRight: 135}}>
                <Text style={{fontSize: 16}}>Edit account</Text>
              </View>
              <View>
                <CaretRight color={'#404040'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 500,
          }}>
          <Text>UrVehicle v.0.0.1 Pre Alpha</Text>
          <Text style={{fontSize: 12, marginTop: 2, color: '#5a5a5a'}}>
            developed by tomás aguiar
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
