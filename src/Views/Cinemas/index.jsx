import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import  cinemaData from '../../data/src_resources_cinemas.json'
import CinemaList from '../../component/CinemaList';
import styles from './styles';

class Cinemas extends Component {
  state ={
    cinemas: []
  }

  componentDidMount(){
    this.setState({cinemas: cinemaData})
  }

  render() {
    const { cinemas } = this.state;
    return (
    <View style={styles.cinemaView}>
      <CinemaList
        cinemas={ cinemas }
      />
    </View>
    )
  };
};



export default Cinemas;
