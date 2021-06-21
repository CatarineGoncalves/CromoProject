import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import VideoLogo from './../images/play.png'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Introduction() {
  const navigation = useNavigation()

  function handleNavigatetoTerms() {
    navigation.navigate('Term')
  }


  return (
    <View style={styles.boxInitial}>
      <Text style={styles.header}>Introducão</Text>
      <Text style={styles.subTitle}>SOS Calamidades </Text>
      <Image source={VideoLogo} style={styles.video} />
      {/* <Slider/> */}
      <LinearGradient
        colors={['#6320EE', '#9632FE']}
        style={styles.buttonNext}>
        <RectButton onPress={handleNavigatetoTerms}>
          <Text style={styles.textButton}>Próximo</Text>
        </RectButton>
      </LinearGradient>


    </View>
  );
}

const styles = StyleSheet.create({
  boxInitial: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',

  },
  header: {
    marginTop: 70,
    fontSize: 40,
    color: '#110034',
    fontFamily: 'Quicksand',


  },
  subTitle: {
    color: '#FB9300',
    fontSize: 20,
    // textAlign:'cnter'

  },

  video: {
    height: 150,
    width: 150,

    justifyContent: 'center',
    alignItems: 'center',
    margin: 140,
  },

  buttonNext: {
    width: 220,
    height: 43,
    borderRadius: 54,
    marginTop: 77,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 19,
    fontFamily: 'WorkSans',
  },

});
