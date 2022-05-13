import React, {createContext} from 'react';
import {Alert} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            Alert.alert(
              'Your password or email is incorrect, please try again',
            );
            console.log(error);
          }
        },

        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    name: '',
                    email: email,
                    userImg: '',
                    accountState: 'newaccount',
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    uniqueID: auth().currentUser.uid,
                  })

                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })

              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },

        passwordReset: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (error) {
            Alert.alert(error.message);
            console.log(error);
          }
        },

        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            Alert.alert(error.message);
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
