import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
//import movieData from '../../data/src_resources_movies.json';
import { connect } from 'react-redux';
import CinemaDetailList from '../../component/CinemaDetailList';
import CinemaDetailText from '../../component/CinemaDetailText';
import styles from './styles';

class CinemaDetails extends Component {
  state ={
    cinemaDetails: [],
    movies: []
  }


  componentDidMount(){
    const { navigation } = this.props;
    this.setState({cinemaDetails: navigation.getParam('cinemaDetails', '')})
    this.setState({movies: this.getMovieForCinema()})
  }

  getMovieForCinema(){
    const { navigation } = this.props;
    //console.log(this.props.allMovies)
    const movieData = this.props.allMovies.movie
    var movieList = [];
    const cinemaDetails = navigation.getParam('cinemaDetails', '')
    for (let i=0; i<movieData.length; i++){
      for (let j=0; j<movieData[i].showtimes.length; j++){
        if (movieData[i].showtimes[j].cinema.name == cinemaDetails.name ){
          //console.log(movieData[i].showtimes[j])
          movieList.push(movieData[i])
        }
      }
    }
    return movieList;
  }

  render() {
    const { cinemaDetails, movies } = this.state;
    return (
    <View style={styles.cinemaView}>
      <CinemaDetailText
        cinemaDetails={ cinemaDetails }
      />
      <CinemaDetailList
        movies={ movies }
        cinemaDetails={ cinemaDetails }
      />
    </View>
    )
  };
};

function mapStateToProps(movies){
    return{
      allMovies: movies
    };
  }

export default connect(mapStateToProps)(CinemaDetails);
