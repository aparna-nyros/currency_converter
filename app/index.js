import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert'
import store from './config/store'

EStyleSheet.build({
  $primaryBlue: '#1F337E',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryLightBlue: '#2E4194',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $lightpurple: '#A999BC',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
   </Provider>
); 
