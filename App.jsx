import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import { getAllMovies } from './src/actions/movieActions';
import { getAllCinemas } from './src/actions/cinemaActions';
import { getUpcomingMovies } from './src/actions/upcomingMovies';
import reducers from './src/reducers';
import CinemaDetailList from './src/component/CinemaDetailList'
import AppContainer from './src/routes';

class SubApp extends React.Component {
  componentDidMount() {
    this.props.getAllMovies();
    this.props.getAllCinemas();
    this.props.getUpcomingMovies();
  }
  render(){
    return(
      <AppContainer />
    )
  }
}

const ConnectedSubApp = connect(null, { getAllMovies, getAllCinemas, getUpcomingMovies })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk)) }>
      <ConnectedSubApp />
    </Provider>
  );
}
