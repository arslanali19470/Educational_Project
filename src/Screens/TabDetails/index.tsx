import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import Facality from './Facality';
import LastYearMerit from './LastYearMerit';
import FeeStructure from './FeeStructure';

const Tab = createMaterialTopTabNavigator();

export function TabDetails({
  facilitiesMembers,
  LastMerit,
  ProgramName,
  FeesStruure,
}) {
  return (
    <Tab.Navigator
      initialRouteName="Facality"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {backgroundColor: '#ddd'},
        tabBarLabelStyle: {fontSize: 14, fontWeight: '800'},
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
        initialParams={{facilitiesMembers, ProgramName}}
      />

      <Tab.Screen
        name="Last Year Merit"
        component={LastYearMerit}
        options={{
          tabBarLabel: 'Last Merit',
        }}
        initialParams={{LastMerit}}
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
        initialParams={{FeesStruure}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Indicator: {
    backgroundColor: 'white',
    height: '80%',
    bottom: '8%',
    position: 'absolute',
    zIndex: -1,
    borderRadius: 5,
  },
});

export default TabDetails;
