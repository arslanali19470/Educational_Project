// styles.js
import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  ButtonMainstyle: {
    backgroundColor: '#0961F5',
    height: responsiveHeight(6.8),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
    borderRadius: 50,
  },
  BtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  BtnRoundIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 85,
  },
  BtnDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  KeyAvoidViewStyle: {
    flex: 1,
    backgroundColor: '#E8F1FF',
    paddingHorizontal: 30,
    paddingTop: 35,
  },
  ImageBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  FirstListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    height: responsiveHeight(6.8),
    borderRadius: 10,
    zIndex: 100,
  },
  PlaceHolderColor: {
    padding: 15,
    textAlign: 'center',
    color: '#545454',
  },
});
