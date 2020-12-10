import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink, greyBlue } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
  },
  item: {
    borderWidth: 1,
    backgroundColor: greyBlue,
    padding: 8
  },
  timeText: {
    //textAlign: 'center',
    fontSize: 20
  },
  itemView: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
