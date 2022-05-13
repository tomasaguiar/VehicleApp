import {Image} from 'react-native';

export function SplashImage() {
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={require('../../assets/splash/splashscreen1.jpg')}
    />
  );
}
