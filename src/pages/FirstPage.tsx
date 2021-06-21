import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from './../images/logo-sos.png'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



export default function FirstPage({navigation = useNavigation<StackNavigationProp<ParamListBase>>()}) {
    setTimeout(() => {
        navigation.replace('Introduction')
    },3000)

    return (

        <View style={styles.first}>
            <LinearGradient
                style={{
                    marginTop: 15,
                    borderRadius: 5,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#6320EE', '#9632FE']}
            >
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.welcome}>Bem vindo(a)!</Text>
                <Text style={styles.textp}>Esperamos que esteja bem. Para conseguir te ajudar, precisamos que aceite os termos de privacidade e escolha como deseja ser chamado, tudo bem simples e rápido.</Text>

            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    first: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // height: 45,
        // width: 100,
        // marginTop: 15,
        // borderRadius: 5,
    },
    logo: {
        height: 110,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 110,
    },
    welcome: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        marginBottom: 11,
        fontFamily: 'Quicksand',
    },
    textp: {
        marginLeft: 35,
        color: '#fff',
        fontSize: 18,
        textAlign: 'left',
        fontFamily: 'WorkSans',
    },
    buttonNext: {
        // backgroundColor: 'red',
        width: 220,
        height: 43,
        borderRadius: 54,

    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        fontSize: 19,
        fontFamily: 'WorkSans',
    }
});
