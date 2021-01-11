/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen'



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Overview',
              headerLeft:() => (
                <Icon.Button 
                  name="menu" size={25} 
                  backgroundColor= "#009387" 
                  onPress={() =>navigation.openDrawer()}
                  >
                  </Icon.Button>
                
              )
             
            }}
          />
        </HomeStack.Navigator>
     );
  
   const DetailsStackScreen =({navigation}) => (
    <DetailsStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <DetailsStack.Screen
              name="Details"
              component={DetailsScreen}
            />
          </DetailsStack.Navigator>
     );
    

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
     <Drawer.Screen name="Home" component={HomeStackScreen} />
     <Drawer.Screen name="Detials" component={DetailsStackScreen} />
 </Drawer.Navigator>
 </NavigationContainer>
     
  );
};

export default App;
