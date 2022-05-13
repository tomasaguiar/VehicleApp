import React from 'react';
import {View, Text} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#171717'}}>
      <View style={{marginHorizontal: 38}}>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20}}>Settings</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Settings;
