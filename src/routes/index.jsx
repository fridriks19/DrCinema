import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import cinemaScreen from '../Views/Cinemas';
import cinemaDetailsScreen from '../Views/CinemaDetails';

const StackNavigator = createStackNavigator({
  cinemaScreen,
  cinemaDetailsScreen,
});
export default createAppContainer(StackNavigator);
