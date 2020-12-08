import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
  },
  poster: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 1,
    borderWidth: 5
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 3,
    backgroundColor: sweetPink,
    width: winWidth - 40,
    borderRadius: 15,
  },
  titleText: {
    paddingTop: 7,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  movieText: {
    paddingTop: 7,
    //textAlign: 'center',
    fontSize: 16,
  },
  websiteText: {
    paddingTop: 7,
    //textAlign: 'center',
    fontSize: 16
  },
  itemView: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
    //justifyContent: 'space-between'
  },
});
