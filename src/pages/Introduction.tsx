import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import VideoLogo from './../images/play.png';
import arrowleft from './../images/seta.png'

import styled from './../styles/buttonNext'







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



      <LinearGradient
        colors={['#6320EE', '#9632FE']}
        style={styled.buttonNext}>
        <RectButton style={{
          width: 220,
          height: 43,
          padding: 3,
        }} onPress={handleNavigatetoTerms}>
          <View style={styled.containerButton}>
            <Text style={styled.textButton}>
              Próximo <Image source={arrowleft} />
            </Text>
          </View>
        </RectButton>
      </LinearGradient>


    </View >
  );
}

const styles = StyleSheet.create({
  boxInitial: {
    flex: 1,
    alignItems: 'center',

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
  },

  video: {
    height: 150,
    width: 150,

    justifyContent: 'center',
    alignItems: 'center',
    margin: 140,
  }
});
