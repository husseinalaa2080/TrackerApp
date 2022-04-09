import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('8%'),
  },
  backButtonContainer: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
  },
  backButtomTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
  },
  title: {
    fontSize: hp('3.25%'),
    fontWeight: '600',
    color: 'black',
    alignSelf: 'flex-start',
  },
  inputStyle: {
    borderColor: 'grey',
    borderWidth: wp('.3'),
    width: '100%',
    borderRadius: wp('1%'),
    height: wp('15%'),
    fontSize: wp('4.5%'),
    color: 'black',
  },
  spacer: {
    height: hp('2%'),
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    width: wp('45%'),
    height: hp('7%'),
    backgroundColor: 'rgb(250,209,89)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('1%'),
  },
  buttonTitle: {
    fontSize: wp('5%'),
    color: 'black',
  },
});
