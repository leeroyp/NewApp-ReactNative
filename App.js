/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';

import {DrawerContent} from './src/screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => < DrawerContent { ...props}/>}>
     <Drawer.Screen name="Home" component={MainTabScreen} />
     {/* <Drawer.Screen name="Detials" component={DetailsStackScreen} /> */}
 </Drawer.Navigator>
 </NavigationContainer>
     
  );
};

export default App;
