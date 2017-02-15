import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './src/components/header';

// Create a component
export default function App() {
  return <Header />;
}

// Render to device
AppRegistry.registerComponent('reactNativeFirstApp', () => App);
