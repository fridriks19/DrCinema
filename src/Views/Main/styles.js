import { StyleSheet, Dimensions } from 'react-native';
import { darkBlueShade, lightBlueSky } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: lightBlueSky,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    paddingBottom: 100,
  },
  button: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    width: winWidth - 100,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: darkBlueShade,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center'
  },
});
