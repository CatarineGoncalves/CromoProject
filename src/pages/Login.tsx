import React from "react"
import { Text, StyleSheet, View, TextInput, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  // const [text] = React.useState(" Apelido...");

  const navigation = useNavigation()

  function handlerNavigatetoMap() {
    navigation.navigate('RoutesTab')
  }

  return (
    <View style={styles.boxLogin}>
      <LinearGradient colors={['#6320EE', '#9632FE']} style={styles.footerLogin}>
        <Text style={styles.textLogin}>Como deseja ser chamado?</Text>
        <TextInput style={styles.inputLogin}
          placeholder={'Digite teu Apelido!'}
          
        />

        <LinearGradient
          colors={['#FB7800', '#f1953f']}
          style={styles.loginButton}>
          <RectButton onPress={handlerNavigatetoMap}>
            <Text style={styles.textButton}>Tudo certo!</Text>
          </RectButton>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  boxLogin: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  footerLogin: {
    bottom: 0,
    width: 411,
    height: 544,
    position: 'absolute',
    borderTopRightRadius: 88,
    borderTopLeftRadius: 88,
  },
  textLogin: {
    color: "#fff",
    fontSize: 22,
    marginTop: 172,
    marginBottom: 33,
    textAlign: 'center',
    fontFamily: 'Quicksand',

  },
  inputLogin: {
    textAlign: 'center',
    height: 50,
    width: 333,
    marginHorizontal: 39,
    borderRadius: 44,
    backgroundColor: '#fff',
    shadowColor: '#000',
    fontFamily: 'Quicksand',


  
    // borderBottomColor: ''
  },
  
  loginButton: {
    width: 220,
    height: 43,
    borderRadius: 54,
    marginTop: 144,
    marginHorizontal: 99,
  },

  textButton: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 19,
    fontFamily: 'WorkSans',
  },


})
