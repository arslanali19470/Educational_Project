import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Unidetails from '../../Screens/UniDetails';
// import TabDetails from '../../Screens/TabDetails';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Unidetails" component={Unidetails} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
