import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './src/screen/ProfileScreen';
import PhotoComponent from './src/screen/PhotoComponent';
class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Photo" component={PhotoComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  }
}
export default App;