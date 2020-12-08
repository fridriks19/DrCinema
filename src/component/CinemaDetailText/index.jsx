import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';


const CinemaDetailText = ({ cinemaDetails }) => (
  <View>
    <View style={styles.cinemaContainer} >
      <Text style={styles.name}>{cinemaDetails.name}</Text>
      <Text style={styles.text}>{cinemaDetails.description}</Text>
      <Text style={styles.text}>Staðsetning: {cinemaDetails['address\t']}, {cinemaDetails.city}</Text>
      <Text style={styles.text}>Sími: {cinemaDetails.phone}</Text>
      <Text style={styles.websiteLink}>{cinemaDetails.website}</Text>
    </View>
  </View>
);

export default CinemaDetailText;
