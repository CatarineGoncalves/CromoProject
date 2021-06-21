import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Terms() {

    const navigation = useNavigation()

    function handlerNavigatetoLogin() {
        navigation.navigate('Login')
    }


    return (
        <View style={styles.boxInitial}>
            <LinearGradient colors={['#6320EE', '#9632FE']} style={styles.square}>
                <Text style={styles.termTitle}>Termos de{"\n"}Privacidade</Text>
                <Text style={styles.termLegend}>O usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.</Text>
                <Text style={styles.termAgree}>Você Concorda?</Text>
            </LinearGradient>

            <LinearGradient
                colors={['#6320EE', '#9632FE']}
                style={styles.buttonTerm}>
                <RectButton onPress={handlerNavigatetoLogin}>
                    <Text style={styles.textButton}>Concordo</Text>
                </RectButton>
            </LinearGradient>

            <LinearGradient
                colors={['#FB7800', '#f1953f']}
                style={styles.buttonTerm}>
                <RectButton>
                    <Text style={styles.textButton}>Discordo</Text>
                </RectButton>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    boxInitial: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    square: {
        width: 411,
        height: 500,
        // backgroundColor: "red",
        borderBottomLeftRadius: 150,
        marginBottom: 99
    },
    termTitle: {
        marginLeft: 24,
        fontSize: 30,
        marginTop: 120,
        // margin: 120,
        color: '#fff',
        fontFamily: 'Quicksand',
    },
    termLegend: {
        marginTop: 11,
        marginHorizontal: 24,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'WorkSans',
    },
    termAgree: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Quicksand',
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        fontSize: 19,
        fontFamily: 'WorkSans',
    },
    buttonTerm: {
        width: 220,
        height: 43,
        borderRadius: 54,
        marginTop: 20,
    },
});
