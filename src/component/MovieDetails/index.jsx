import React, {useState} from 'react';
import { View, Button, Image, FlatList, Text, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';


const GenreGet = ({movieDetails}) => {
  const movieGenre = movieDetails.genres
  var genres = ""
  if (movieGenre)
    for (let i=0; i<movieGenre.length;i++){
      genres = genres.concat(movieGenre[i].Name+ "   ")
    }
  return genres
};


//<Text style={styles.detailText}>FLokkar: <GenreGetter movieDetails={movieDetails}/></Text>
//<Text><ShowTimeGet  cinemaDetails={cinemaDetails} movieDetails={movieDetails}/> </Text>
//<Text><ShowTimeGet  cinemaDetails={cinemaDetails} movieDetails={movieDetails}/> </Text>
const MovieDetails = ({ movieDetails, cinemaDetails }) => (

  <View style={styles.container}>
    <View style={styles.posterContainer}>
      <Image
        style={styles.poster}
        source={{ uri: movieDetails.poster}}
      />
    </View>
    <Text style={styles.titleText}>{movieDetails.title}</Text>
    <Text style={{textAlign: 'center'}}> <GenreGet movieDetails={movieDetails} /> </Text>
    <Text style={styles.detailText}>{movieDetails.plot}</Text>
    <Text style={styles.detailText}>Lengd: {movieDetails.durationMinutes} mín</Text>
    <Text style={styles.detailText}>Útgáfuár: {movieDetails.year}</Text>
  </View>
);
export default MovieDetails;
