import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Main = ({navigation}) => {
  const SplashImage = {
    source: require('../../assets/splash/splashscreen1.jpg'),
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <ImageBackground
        source={require('../../assets/splash/splashscreen1.jpg')}
        style={{height: '100%'}}>
        <View style={{marginHorizontal: 38}}>
          <View style={{marginTop: 40}}>
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 30, fontFamily: 'TESLA'}}>
                  UR VEHICLE
                </Text>
              </View>
              <View style={{marginTop: 570}}>
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    style={{
                      width: '100%',
                      height: 40,
                      backgroundColor: '#2B52FF',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                      }}>
                      Log In
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signin')}
                    style={{
                      width: '100%',
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                      }}>
                      Create an account
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Main;
