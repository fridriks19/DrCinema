import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

const Item = ({ item, onPress, refresh }) => (
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
      ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text >No cinemas Found (Might need to refresh the "Cinemas" View)</Text>
            <Text >(Might need to refresh the "Cinemas" View)</Text>
          </View>
        )}
      data={cinemas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  </SafeAreaView>
);
};

export default withNavigation(CinemaList);
