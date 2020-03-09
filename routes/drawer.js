import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from '../screens/about';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

export default Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
      </NavigationContainer>
    )
  }