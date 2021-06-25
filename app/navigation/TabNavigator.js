import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../containers/Search';
import Position from '../containers/Position';
import TabBar from '../components/TabBar';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        initialParams={{ icon: 'home-outline' }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        initialParams={{ icon: 'search' }}
      />
      <Tab.Screen
        name='Position'
        component={Position}
        initialParams={{ icon: 'md-location-outline' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;