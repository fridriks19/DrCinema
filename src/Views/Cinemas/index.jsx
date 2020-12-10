import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
//import  cinemaData from '../../data/src_resources_cinemas.json'
import { connect } from 'react-redux';
import CinemaList from '../../component/CinemaList';
import styles from './styles';

class Cinemas extends Component {
  state ={
    cinemas: [],
  }

  componentDidMount(){
    this.setState({cinemas: this.props.allCinemas.cinema})
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
function mapStateToProps(cinemas){
    return{
      allCinemas: cinemas
    };
  }
//const mapStateToProps = ({ cinemas }) => ({allCinemas: cinemas })
export default connect(mapStateToProps)(Cinemas);
