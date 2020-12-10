import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
//import  cinemaData from '../../data/src_resources_cinemas.json'
import { connect } from 'react-redux';
import UpcomingMoviesList from '../../component/UpcomingMoviesList';
import styles from './styles';

class UpcomingMovies extends Component {
  state ={
    upcomingMovies: [],
  }

  componentDidMount(){
    this.setState({upcomingMovies: this.props.upcomingMovies.upcomingMovies})
  }

  render() {
    const { upcomingMovies } = this.state;
    return (
    <View style={{flex:1}}>
      <Text style={styles.title}>Væntanlegt í bíó</Text>
      <UpcomingMoviesList
        upcomingMovies={upcomingMovies}
      />
    </View>
    )
  };
};
function mapStateToProps(upcomingMovies){
    return{
      upcomingMovies: upcomingMovies
    };
  }
//const mapStateToProps = ({ cinemas }) => ({allCinemas: cinemas })
export default connect(mapStateToProps)(UpcomingMovies);
