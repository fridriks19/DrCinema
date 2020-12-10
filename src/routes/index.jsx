import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import cinemaScreen from '../Views/Cinemas';
import cinemaDetailsScreen from '../Views/CinemaDetails';
import movieDetailScreen from '../Views/MovieDetails';
import mainScreen from '../Views/Main';
import upcomingMovies from '../Views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  mainScreen,
  upcomingMovies,
  cinemaScreen,
  cinemaDetailsScreen,
  movieDetailScreen,
});
export default createAppContainer(StackNavigator);
