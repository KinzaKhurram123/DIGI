import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomDrawer from '../Components/CustomDrawer';
import History from '../Screens/Main/History';
import About from '../Screens/Main/About';

import Home from '../Screens/Main/Home';
import News from '../Screens/Main/News';
import OTC from '../Screens/Main/OTC';
import OurStore from '../Screens/Main/OurStore';
import Rewards from '../Screens/Main/Rewards';
const Drawer = createDrawerNavigator();

export const Main = ({focused}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#12376B',
          width: '75%',
        },  
      }}
      drawerContent={(props) => <CustomDrawer {...props} {...focused} />}
      >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Rewards" component={Rewards} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Ourstore" component={OurStore} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="OTC" component={OTC} />
      <Drawer.Screen name="History" component={History} />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Main;
