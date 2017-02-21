import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
export default function App() {
  return (<View>
    <Header headerText="Albums" />
    <AlbumList />
  </View>);
}

// Render to device
AppRegistry.registerComponent('reactNativeFirstApp', () => App);
