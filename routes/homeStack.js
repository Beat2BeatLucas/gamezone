import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: {backgroundColor: '#ccc', height: 80},
          headerTintColor: '#444'}} >
        <Stack.Screen name='Home' component={Home} options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} />
          }
        }} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details', /*headerStyle: { backgroundColor: '#ccc'}*/ }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}