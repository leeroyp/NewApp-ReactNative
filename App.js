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
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';

import {DrawerContent} from './src/screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => < DrawerContent { ...props}/>}>
     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
     <Drawer.Screen name="SupportScreen" component={SupportScreen} />
     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
     <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />

 </Drawer.Navigator>
 </NavigationContainer>
     
  );
};

export default App;
