/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react'
import Nav from './nav'

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider>
        <Nav />
      </Provider>
    </View>
  );
}

export default App;
