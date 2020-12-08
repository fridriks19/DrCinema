import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const GenreGetter = ({item}) => {
  var genres = ""
  for (let i=0; i<item.length;i++){
    console.log(item[i])
    genres = genres.concat(item[i].Name+ "   ")
    console.log(genres)
  }
  return genres
};

const Item = ({ item }) => (

  <TouchableOpacity
    style={styles.item}>
    <View style={styles.imageView}>
      <Image
        style={styles.poster}
        source={{ uri: item.poster}}
      />
    </View>
    <View style={styles.itemView}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.movieText}>Útgáfudagur: {item.year}</Text>
      <Text style={styles.movieText}><GenreGetter item={item.genres}/></Text>
    </View>
  </TouchableOpacity>
);

const CinemaDetailList = ({ movies }) => {
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
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  </SafeAreaView>
);
};

export default CinemaDetailList;
