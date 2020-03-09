import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='About'>
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: {backgroundColor: '#ccc', height: 80},
          headerTintColor: '#444'}} >
        <Stack.Screen name='About' component={About} options={{ title: 'About GameZone', /*headerStyle: { backgroundColor: '#ccc'}*/ }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}