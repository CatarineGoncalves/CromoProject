import React from "react"
import { Text, StyleSheet, View, TextInput, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Avatar } from 'react-native-paper';

import styled from './../styles/buttonNext'

import okIcon from './../images/okIcon.png'
import peopleImg from './../images/Union.png'
import Woman from './../images/blackWoman.jpg'

export default function Login() {
  // const [text] = React.useState(" Apelido...");

  const navigation = useNavigation()

  function handlerNavigatetoMap() {
    navigation.navigate('RoutesTab')
  }

  return (
    <View style={styles.boxLogin}>
      <Image source={peopleImg} style={styles.backgroundImage} />



      <LinearGradient colors={['#6320EE', '#9632FE']} style={styles.footerLogin}>



        <View style={styles.containerLogin}>
          <Avatar.Image size={140} source={Woman} style={styles.imageWoman} />

          <Text style={styles.textLogin}>Como deseja ser chamado?</Text>
          <TextInput style={styles.inputLogin}
            placeholder={'Digite teu Apelido!'}
          />
        </View>


        <View style={styles.loginButton}>
          <LinearGradient
            colors={['#FB7800', '#f1953f']}
            style={styled.buttonNext}>
            <RectButton style={{
              width: 220,
              height: 43,
              padding: 3,
            }}
              onPress={handlerNavigatetoMap}>

              <View style={styled.containerButton}>
                <Text style={styled.textButton}>
                  Tudo certo! <Image source={okIcon} />
                </Text>
              </View>

            </RectButton>
          </LinearGradient>


        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  boxLogin: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  backgroundImage: {
    height: 444,
    width: 411,
    backgroundColor: '#ff7b00',
    opacity: 0.7,
  },
  footerLogin: {
    bottom: 0,
    width: 411,
    height: 544,
    position: 'absolute',
    borderTopRightRadius: 88,
    borderTopLeftRadius: 88,
  },
  imageWoman: {
    marginVertical: -60
  },

  containerLogin: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textLogin: {
    color: "#fff",
    fontSize: 22,
    marginTop: 130,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    marginBottom: 13,
  },


  inputLogin: {
    height: 50,
    width: 333,
    alignItems: 'center',
    borderRadius: 44,
    backgroundColor: '#fff',
    shadowColor: '#000',
    fontFamily: 'Quicksand',
    padding: 13
  },

  loginButton: {
    alignItems: 'center'
  }

})
