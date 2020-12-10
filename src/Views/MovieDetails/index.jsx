import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
//import movieData from '../../data/src_resources_movies.json';
import MovieDetails from '../../component/MovieDetails';
import MovieSchedule from '../../component/MovieSchedule';
import styles from './styles';

class CinemaDetails extends Component {
  state ={
    movieDetails: [],
    cinemaDetails: [],
    movieSchedule: []
  }


  componentDidMount(){
    const { navigation } = this.props;
    this.setState({movieDetails: navigation.getParam('movieDetails', '')})
    this.setState({cinemaDetails: navigation.getParam('cinemaDetails', '')})
    this.setState({movieSchedule: this.ShowTimeGet()})
  }

  //Get the time and purchase link for cinema
  ShowTimeGet = () => {
    const { navigation } = this.props;
    const movieDetails = navigation.getParam('movieDetails', '')
    const cinemaDetails = navigation.getParam('cinemaDetails', '')
    const retList = []
    const movieShowtimes = movieDetails.showtimes
    const cinemaName = cinemaDetails.name
    if (movieShowtimes){
      for (let i=0; i< movieShowtimes.length; i++){
        if(movieShowtimes[i].cinema.name){
          //console.log(movieShowtimes[i].cinema.name)
          if (movieShowtimes[i].cinema.name == cinemaName ) {
            //console.log(movieShowtimes[i].schedule)
            retList.push(movieShowtimes[i].schedule)
          }
        }
      }
    }
    return retList
  }

  render() {
    const { movieDetails, cinemaDetails, movieSchedule } = this.state;
    return (
    <View style={{flex: 1}}>
        <MovieDetails
          movieDetails={movieDetails}
          cinemaDetails={cinemaDetails}
        />
        <MovieSchedule
          movieSchedule={movieSchedule[0]}
        />
    </View>
    )
  };
};


export default CinemaDetails;
