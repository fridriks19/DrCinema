import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={onPress}>
    <View style={styles.itemView}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.websiteText}>{item.website}</Text>
    </View>
  </TouchableOpacity>
);

const CinemaList = ({ cinemas, navigation: { navigate } }) => {
  const renderItem = ({ item }) => {
    //console.log(cinemas)
  return(
    <Item
      item={item}
      onPress={() => navigate('cinemaDetailsScreen', {cinemaDetails: item})}
    />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={cinemas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  </SafeAreaView>
);
};

export default withNavigation(CinemaList);
