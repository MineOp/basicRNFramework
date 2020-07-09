import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Popular from '../pages/popular/Popular';

import TestView from '../pages/test/TestView';
import {useTheme} from '@react-navigation/native';

const icons = {
  Popular: 'all-inclusive',
  // Trending: 'trending-up',
  // Favorite: 'stars',
  // My: 'perm-identity',
  TestView: 'perm-identity',
};

const Tab = createBottomTabNavigator();

const tabRoutes = {
  Popular: Popular,

  TestView: TestView,
};

const HomeNav = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Popular"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = icons[route.name];

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Popular" component={Popular} />

      <Tab.Screen name="TestView" component={TestView} />
    </Tab.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    height: 26,
    width: 26,
  },
});
