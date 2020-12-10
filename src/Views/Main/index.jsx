import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';

import styles from './styles';

const Main = ({navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bíó Hjálparinn</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('upcomingMovies')}>
      <Text style={styles.buttonText}>Væntanlegt í bíó</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button} onPress={() => navigate('cinemaScreen')}>
      <Text style={styles.buttonText}>Núna í Bíó</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
