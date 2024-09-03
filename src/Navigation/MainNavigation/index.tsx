import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {multiThemeColor} from '../../Utils/AppConstant';
import SplashScreen from '../../Screens/SplashScreen';
// import DrawerNavigation from '../DrawerNavigation';
import Home from '../../Screens/Home';
import Unidetails from '../../Screens/UniDetails';
import {ProgramDetails} from '../../Utils/AppData';
import TabDetails from '../../Screens/TabDetails';
// import Test_Screen from '../../Screens/Test_Screen';

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  Unidetails: {programDetails: ProgramDetails};
  TabDetails: undefined;
  // DrawerNavigation: undefined;
  // Test_Screen: undefined;

  // SearchHome: {UserID: string | undefined};
  // ProandCons: {selectedItem: TopicDetail | undefined};
  // 'Dilemmas Description': {
  //   selectedItem?: TopicDetail | ProsConsType;
  //   UserID?: string;
  // };
  // Argument: {
  //   selectedItem: TopicDetail | ProsConsType;
  //   mode: 'add' | 'update';
  // };
  // SignUpMember: undefined;
  // LogInMember: undefined;
  // WelcomeScreen: undefined;
  // PhoneNumberScreen: undefined;
  // OTPScreen: {confirm: FirebaseAuthTypes.ConfirmationResult};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const color = multiThemeColor();
  // StatusBar.setHidden(true, 'fade');

  return (
    <>
      <StatusBar
        // hidden={true}
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

        {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
        {/* <Stack.Screen name="Test_Screen" component={Test_Screen} /> */}
        {/* <Stack.Screen
          name="Dilemmas Description"
          component={Add_Dilemmas}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: multiThemeColor().GRAY},
            headerTintColor: color.OnlyWHITE,
          }}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
