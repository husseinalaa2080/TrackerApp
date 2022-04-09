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
    backgroundColor: 'white',
  },
  itemContainer: {
    height: hp('12%'),
    width: wp('90%'),
    borderBottomColor: 'grey',
    borderBottomWidth: wp('.1%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp('0%'),
  },
  leftSectionContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  iconImage: {
    height: hp('6.5%'),
    width: hp('6.5%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  contentContainer: {},
  rightSectionContainer: {
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'center',
  },
  title1: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: 'black',
  },
  title2: {
    fontSize: wp('4.5%'),
    fontWeight: '300',
    color: 'black',
  },
  title3: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    color: 'green',
  },
  footerTitle: {
    alignSelf: 'center',
    marginTop: hp('10%'),
    fontSize: wp('5%'),
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 0,
    right: 0,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: 'white',
    right: 0,
  },
  swipeBtn: {
    alignItems: 'center',
    width: 65,
    height: 55,
    marginTop: -11,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  deleteText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '500',
  },
});
