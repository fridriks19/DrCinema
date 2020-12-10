import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink, lightBlueSky, greyBlue, darkBlueShade } from '../../styles/color';

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
    width: 170,
    height: 200,
    borderRadius: 1,
    borderWidth: 1
  },
  item: {
    padding: 2,
    flex: 1,
    borderWidth: 3,
    backgroundColor: darkBlueShade,
    margin: 10
  },
  textt: {
    flex: 1,
    padding: 2,
    padding: 10,
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    paddingTop: 7,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  movieText: {
    color: 'white',
    paddingBottom: 20,
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
    flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
