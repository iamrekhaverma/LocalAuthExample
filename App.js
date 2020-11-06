/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Alert, Button} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const App = () => {
  const getAuthSupport = async () => {
    // const result = LocalAuthentication.hasHardwareAsync();
    Alert.alert(
      JSON.stringify(LocalAuthentication),
      'My Alert Msg',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Click me" onPress={getAuthSupport} />
      </SafeAreaView>
    </>
  );
};

export default App;
