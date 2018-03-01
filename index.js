import 'react-native/Libraries/Core/InitializeCore';
import React from 'react';
import { AppRegistry, StyleSheet, View, Web, Platform } from 'react-native';
import Router from './app/config/router';

const styles = function () {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: '#FFFFFF',
    },
  });
};

// wrapper for a component to add top padding on iOS
function AppContainer(App) {
  return () => (
    <View style={styles().container}>
      <App />
    </View>
  );
}

AppRegistry.registerComponent('CliqzS', () => AppContainer(Router));
