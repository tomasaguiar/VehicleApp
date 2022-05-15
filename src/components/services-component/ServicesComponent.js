import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import RNCalendarEvents from 'react-native-calendar-events';

import {Plus} from 'phosphor-react-native';
import {AuthContext} from '../../routes/provider/AuthProvider';

const ServiceComponent = ({item, navigation}) => {
  const [days, setDays] = React.useState(0);
  const {user} = React.useContext(AuthContext);
  const date = new Date();

  const calculateDays = () => {
    setDays(item.requireChange * 30.4);
  };

  const handleAddService = () => {
    try {
      calculateDays();

      firestore()
        .collection('users')
        .doc(user.uid)
        .collection('activeServices')
        .doc(item.id)
        .set({
          id: item.id,
          name: item.name,
          duration: item.requireChange,
          starts: firestore.Timestamp.fromDate(new Date()),
          ends: firestore.Timestamp.fromDate(
            new Date(date.setDate(date.getDate() + days)),
          ),
        });
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      RNCalendarEvents.saveEvent(item.name, {
        startDate: item.starts,
        endDate: item.ends,
        notes: 'Ur VehicleApp | Car Service',
      });
      Alert.alert('Service added');
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#303030',
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleAddService();
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Plus weight="bold" color="#999999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ServiceComponent;
