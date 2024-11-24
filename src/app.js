import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store from './redux/store'; // Your Redux store setup
import AppContainer from './index'; // Your main navigation container

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        {/* Main app container is where the navigation logic is */}
        <AppContainer />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
