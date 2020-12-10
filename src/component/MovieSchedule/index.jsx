import React, {useState} from 'react';
import { View, Button, Image, FlatList, Text, SafeAreaView, TouchableOpacity, TouchableHighlight, Linking } from 'react-native';
import styles from './styles';

const Item = ({ item }) => (
  <TouchableOpacity
    style={styles.item}>
    <View style={styles.itemView}>
      <Text style={styles.timeText}>Kl: {item.time}</Text>
      <Text style={{color: 'blue', fontSize: 16}} onPress={() => Linking.openURL(item.purchase_url)}>Kaupa miða/Buy ticket</Text>
    </View>
  </TouchableOpacity>
);

const MovieSchedule = ({ movieSchedule }) => {
  const renderItem = ({ item }) => {
    //console.log(item)
  return(
    <Item
      item={item}
    />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text >No scheduale for this movie</Text>

          </View>
        )}
      data={movieSchedule}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
);
};
export default MovieSchedule;
