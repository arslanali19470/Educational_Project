import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Facality from './Facality';
import LastYearMerit from './LastYearMerit';
import FeeStructure from './FeeStructure';

const Tab = createMaterialTopTabNavigator();

export function TabDetails() {
  return (
    <Tab.Navigator
      initialRouteName="Facality"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarIndicatorStyle: {backgroundColor: 'black'},
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Facality"
        component={Facality}
        options={{tabBarLabel: 'Facality'}}
      />

      <Tab.Screen
        name="Last Year Merit"
        component={LastYearMerit}
        options={{tabBarLabel: 'Last Merit'}}
      />

      <Tab.Screen
        name="FeeStructure"
        component={FeeStructure}
        options={{tabBarLabel: 'Fees'}}
      />
    </Tab.Navigator>
  );
}

export default TabDetails;
