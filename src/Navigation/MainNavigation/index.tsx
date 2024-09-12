import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Unidetails from '../../Screens/UniDetails';
import {ProgramDetails} from '../../Utils/AppData';
import TabDetails from '../../Screens/TabDetails';

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  Unidetails: {
    programDetails: ProgramDetails;
    universityName: string;
    UniIMG: string;
    Website: string;
    AdmissionPortal: string;
  };

  TabDetails: {
    facilitiesMembers: {
      ProfessorName: string;
      Rank: string;
      profImg?: string;
    }[];
    LastMerit: string;
    ProgramName: string;
    FeesStruure: string;
    profImg: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Unidetails" component={Unidetails} />
        <Stack.Screen name="TabDetails" component={TabDetails} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
