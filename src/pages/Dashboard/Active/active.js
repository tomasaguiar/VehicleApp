import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {AuthContext} from '../../../routes/provider/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import {CaretLeft} from 'phosphor-react-native';

import ActiveServiceComponent from '../../../components/activeServiceComponent/activeServiceComponent';

const ActiveServices = ({navigation}) => {
  const [services, setServices] = React.useState([]);
  const {user} = React.useContext(AuthContext);

  const getServices = () => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .collection('activeServices')
      .get()
      .then(snapshot => {
        const services = [];
        snapshot.forEach(doc => {
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
          <Text style={{fontSize: 20, marginLeft: 10}}>Serviços Ativos</Text>
        </View>
        <View>
          <View>
            <FlatList
              data={services}
              showVerticalScrollIndicator={false}
              renderItem={({item}) => <ActiveServiceComponent item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActiveServices;
