import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { searchBlue, interactiveBlue, darkBlueShade, lightyBlue  } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  cinemaContainer: {
    backgroundColor: lightyBlue,
    borderWidth: 1,
    marginRight: 2,
    marginLeft: 2
  },
  text: {
    margin: 1
  },
  websiteLink:{
    margin: 1
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 30,
    color: "white"
  }
});
