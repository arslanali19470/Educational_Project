import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import Facality from './Facality';
import LastYearMerit from './LastYearMerit';
import FeeStructure from './FeeStructure';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import {ProgramDetails} from '../../Utils/AppData';

const Tab = createMaterialTopTabNavigator();
// type TabDetailsProps = {
//   route: RouteProp<RootStackParamList, 'TabDetails'>;
// };
type TabDetailsProps = {
  programDetails: ProgramDetails;
};

const TabDetails = ({programDetails}: TabDetailsProps) => {
  return (
    <Tab.Navigator
      initialRouteName="Facality"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {backgroundColor: '#E8F1FF'},
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '800',
          letterSpacing: 0.1,
        },
        tabBarIndicatorStyle: styles.Indicator,
      }}>
      <Tab.Screen
        name="Facality"
        component={Facality}
        options={{
          tabBarLabel: 'Facality',
          tabBarIndicatorStyle: [
            styles.Indicator,
            {marginLeft: 10, width: '28%'},
          ], // Apply marginLeft here
        }}
        // initialParams={{facilitiesMembers, ProgramName, profImg}}
        initialParams={{
          facilitiesMembers: programDetails.facilitiesMembers,
          ProgramName: programDetails.name,
          profImg: programDetails.profImg,
        }}
      />

      <Tab.Screen
        name="Last Year Merit"
        component={LastYearMerit}
        options={{
          tabBarLabel: 'Last Merit',
        }}
        // initialParams={{LastMerit}}
        initialParams={{LastMerit: programDetails.LastYearMerit}}
      />

      <Tab.Screen
        name="FeeStructure"
        component={FeeStructure}
        options={{
          tabBarLabel: 'Fees',
          tabBarIndicatorStyle: [
            styles.Indicator,
            {width: '28%', marginLeft: 10},
          ], // Apply marginLeft here
        }}
        initialParams={{feeStructure: programDetails.feeStructure}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  Indicator: {
    backgroundColor: '#F5F9FF',
    // backgroundColor: 'red',
    height: '90%',
    bottom: '5%',
    position: 'absolute',
    zIndex: -1,
    borderRadius: 5,
  },
});

export default TabDetails;
