import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore} from 'redux';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {Provider} from 'react-redux';
import reducer from './reducers';
import UploadListContainer from './containers/UploadListContainer';

const store = createStore(reducer, offline(offlineConfig));

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <UploadListContainer />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
