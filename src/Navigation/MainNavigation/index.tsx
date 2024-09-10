import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {multiThemeColor} from '../../Utils/AppConstant';
import SplashScreen from '../../Screens/SplashScreen';
import Home from '../../Screens/Home';
import Unidetails from '../../Screens/UniDetails';
import {ProgramDetails} from '../../Utils/AppData';
import TabDetails from '../../Screens/TabDetails';

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  Unidetails: {programDetails: ProgramDetails};
  TabDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const color = multiThemeColor();

  return (
    <>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? color.BLACK : color.WHITE}
      />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Unidetails" component={Unidetails} />
        <Stack.Screen name="TabDetails" component={TabDetails} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
