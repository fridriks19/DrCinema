import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Item = ({ item }) => (

  <TouchableOpacity
    style={styles.item}>
    <View style={styles.itemView}>
      <View>
        <Image
          style={styles.poster}
          source={{ uri: item.poster}}
        />
      </View>
      <View style={styles.textt}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.movieText}>Útgáfudagur: {item["release-dateIS"]}</Text>
      </View>

    </View>
  </TouchableOpacity>
);

const UpcomingMoviesList = ({ upcomingMovies }) => {
  const renderItem = ({ item }) => {
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
            <Text >No movies Found</Text>
          </View>
        )}
      data={upcomingMovies}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  </SafeAreaView>
);
};


export default UpcomingMoviesList;
