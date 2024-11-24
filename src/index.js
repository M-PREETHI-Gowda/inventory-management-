import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLoginScreen from './modules/auth/emailLogin';

const Stack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="EmailLogin" headerMode="none">
      <Stack.Screen name="EmailLogin" component={EmailLoginScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
