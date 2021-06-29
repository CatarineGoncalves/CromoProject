import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styled from './../styles/buttonNext'
import agreeIcon from './../images/agree.png'
import desgreeIcon from './../images/desgree.png'

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
                style={styled.buttonNext}>
                <RectButton style={{
                    width: 220,
                    height: 43,
                    padding: 3,
                }} onPress={handlerNavigatetoLogin}>
                    <View style={styled.containerButton}>
                        <Text style={styled.textButton}>
                            Concordo <Image source={agreeIcon} />
                        </Text>
                    </View>
                </RectButton>
            </LinearGradient>

            <LinearGradient
                colors={['#FB7800', '#f1953f']}
                style={styled.buttonNext}>
                <RectButton style={{
                    width: 220,
                    height: 43,
                    padding: 3,
                }}>
                    <View style={styled.containerButton}>
                        <Text style={styled.textButton}>
                            Discordo <Image source={desgreeIcon} />
                        </Text>
                    </View>
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
    },
    termTitle: {
        marginLeft: 24,
        fontSize: 25,
        marginTop: 80,
        // margin: 120,
        color: '#fff',
        fontFamily: 'Quicksand',
    },
    termLegend: {
        marginTop: 15,
        marginHorizontal: 24,
        fontSize: 19,
        color: '#fff',
        fontFamily: 'WorkSans',
    },
    termAgree: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Quicksand',
    }
});
