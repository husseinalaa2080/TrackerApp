import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const AppHeader: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
        }}
        style={styles.headerAvatr}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(57,88,116)',
    height: hp('15%'),
    alignItems: 'center',
    paddingHorizontal: wp('8%'),
  },
  headerTitle: {
    fontSize: wp('6%'),
    color: 'white',
    fontWeight: 'bold',
  },
  headerAvatr: {
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: hp('8%'),
    resizeMode: 'contain',
  },
});
