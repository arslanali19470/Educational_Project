import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  UpperBox: {
    backgroundColor: '#FFFFFF',
    paddingBottom: responsiveHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  backButton: {
    width: responsiveWidth(12),
    marginLeft: responsiveWidth(2),
  },
  uniImageContainer: {
    marginTop: responsiveHeight(-2),
  },
  infoRow: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  websiteButton: {
    backgroundColor: '#E8F1FF',
    width: responsiveWidth(40),
    height: responsiveHeight(5.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#B4BDC466',
  },
  admissionButton: {
    backgroundColor: '#0961F5',
    width: responsiveWidth(40),
    height: responsiveHeight(5.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  websiteButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: responsiveHeight(1.9),
    fontFamily: 'Jost-Medium',
  },
  admissionButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: responsiveHeight(1.9),
    fontFamily: 'Jost-Medium',
  },
  infoBox: {
    width: responsiveWidth(95),
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
