import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import ServiceComponent from '../../../components/services-component/ServicesComponent';
import {CaretLeft} from 'phosphor-react-native';

const ServicesDashboard = ({navigation}) => {
  const [services, setServices] = React.useState([]);

  const getServices = () => {
    firestore()
      .collection('services')
      .get()
      .then(querySnapshot => {
        const services = [];
        querySnapshot.forEach(doc => {
          services.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setServices(services);
      });
  };

  React.useEffect(() => {
    getServices();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#171717',
      }}>
      <View style={{marginHorizontal: 38}}>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <CaretLeft color="#999999" />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 10}}>Add a service</Text>
        </View>
        <View>
          <View
            style={{
              width: '100%',
              height: 90,
              backgroundColor: '#303030',
              borderRadius: 5,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>How this work?</Text>
          </View>
          <View>
            <FlatList
              data={services}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => <ServiceComponent item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServicesDashboard;
