import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {CaretLeft} from 'phosphor-react-native';

const Settings = ({navigation}) => {
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
          <Text style={{fontSize: 20, marginLeft: 10}}>Settings</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text>UrVehicle v.0.0.1 Pre Alpha</Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
