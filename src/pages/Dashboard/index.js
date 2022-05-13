import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

import {
  UserCircle,
  CaretRight,
  Wrench,
  Spinner,
  Plus,
} from 'phosphor-react-native';

import {AuthContext} from '../../routes/provider/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const Dashboard = ({navigation}) => {
  const {user, logout} = React.useContext(AuthContext);
  const [userData, setUserData] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [imageExists, setImageExists] = React.useState(false);
  const [CarNotConfigured, setCarNotConfigured] = React.useState(false);

  const getUserData = () => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          console.log('No such document!');
        }
      });

    if (userData.userImg === '') {
      setImageExists(false);
    } else {
      setImageExists(true);
    }
    if (userData.userImg === '') {
      setCarNotConfigured(true);
    } else {
      setCarNotConfigured(false);
    }
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#171717'}}>
      <StatusBar backgroundColor="#171717" barStyle="light-content" />
      <View style={{marginHorizontal: 38}}>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20}}>{userData.name}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            {imageExists ? (
              // <Image
              //   style={{width: 35, height: 35, borderRadius: 25}}
              //   source={{uri: userData.userImg}}
              // />
              <UserCircle size={35} color={'#252525'} weight="fill" />
            ) : (
              <UserCircle size={35} color={'#252525'} weight="fill" />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            height: 250,
            justifyContent: 'center',
          }}>
          {CarNotConfigured ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Plus size={50} weight="bold" color="#999999" />
                  <Text style={{fontSize: 18, marginTop: 20}}>
                    Add a vehicle
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: '100%', height: 220}}
                source={require('../../assets/images/car.png')}
              />
            </View>
          )}
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: '#252525'}}>
          <Text></Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Services');
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
                <Wrench color={'#999999'} weight="fill" />
              </View>
              <View style={{marginRight: 115}}>
                <Text style={{fontSize: 16}}>Adicionar serviço</Text>
              </View>
              <View>
                <CaretRight color={'#404040'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Active');
            }}>
            <View
              style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Spinner color={'#999999'} weight="fill" />
              </View>
              <View style={{marginRight: 135}}>
                <Text style={{fontSize: 16}}>Serviços Ativos</Text>
              </View>
              <View>
                <CaretRight color={'#404040'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
