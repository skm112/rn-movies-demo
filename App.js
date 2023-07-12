import 'react-native-gesture-handler';
import React from 'react';
import { store, persistor } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootStack from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'
import { Loading, Portal } from './src/components';

import { NetworkIndicator } from './src/components'


const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    bg: '#0e171e',
    textOne: "#fcfcfd",
    textTwo: "#c7cacc",
    textThree: "#cc5432",
    icon: "#fcfcfd",
    focusedIcon: "#ad4329",
    tabBg: "#040b11",
    statusBarBg: "#050d13",
    line: "#1c242c"
  },
};



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading isLoading={true} />} persistor={persistor}>
        <SafeAreaProvider >
          <Portal.Host >
            <NavigationContainer theme={CustomLightTheme}>
              <RootStack />
            </NavigationContainer>
          </Portal.Host >
        </SafeAreaProvider>
        <NetworkIndicator/>
      </PersistGate>
    </Provider>
  );
};



export default App;
