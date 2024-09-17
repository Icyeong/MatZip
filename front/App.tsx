import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// });

export default App;
