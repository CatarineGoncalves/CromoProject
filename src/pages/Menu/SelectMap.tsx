import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';



import MapStyle from '../../styles/MapStyle';
import mapMaker from './../../images/mark.png'
import TempGuide from './../../images/elementMap.png'
import { LinearGradient } from "expo-linear-gradient";
import styled from './../../styles/buttonNext'


export default function SelectMap() {
    const navigation = useNavigation()

    function handleNavigatetoLocateRisk() {
        navigation.navigate('LocateRisk')
    }

    return (

        <View style={styles.boxInitial}>
            <Text style={styles.menuTitle}>
                <Ionicons
                    name="md-location-outline"
                    style={{
                        fontSize: 22
                    }}
                /> Riscos Locais
            </Text>
            <View style={styles.square}>
                <Image source={TempGuide} style={styles.imageGuide} />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: -23.4814287,
                        longitude: -46.3949021,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    customMapStyle={MapStyle}
                >
                    {/* <Marker
                        icon={mapMaker}
                        coordinate={{
                            latitude: -23.4814287,
                            longitude: -46.3949021,
                        }}
                    /> */}

                </MapView>
                <View style={styles.SelectButton}>
                    <LinearGradient
                        colors={['#FB7800', '#f1953f']}
                        style={styled.buttonNext}>
                        <RectButton
                            style={{
                                width: 220,
                                height: 43,
                                padding: 3,
                            }}
                            onPress={handleNavigatetoLocateRisk}
                        >

                            <View style={styled.containerButton}>
                                <Text style={styles.textButtonSelect}>
                                    Riscos Locais
                                </Text>
                            </View>
                        </RectButton>
                    </LinearGradient>
                </View>


            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    boxInitial: {
        flex: 1,
        backgroundColor: '#FB9300',
        alignItems: 'center',
        elevation: 4
        // justifyContent: 'center',
    },
    square: {
        width: 411,
        height: 720,
        backgroundColor: "#fff",
        bottom: 0,
        position: "absolute",
        borderTopLeftRadius: 68,
        borderTopRightRadius: 68,
        flexDirection: 'row',
        elevation: 1,
    },
    imageGuide: {
        height: 60,
        width: 411,
        borderTopLeftRadius: 68,
        borderTopRightRadius: 68,
    },
    menuTitle: {
        textAlign: 'center',
        marginTop: 34,
        fontFamily: 'Quicksand',
        fontSize: 22,
        color: '#fff'
    },
    map: {
        width: 441,
        height: 570,
        marginVertical: 60,
        elevation: 55,
        position: 'absolute'
    },

    SelectButton: {
        alignItems: 'center',
        bottom: 25,
        left: 100,
        position: "absolute",
    },
    textButtonSelect: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'WorkSans',
    },
})