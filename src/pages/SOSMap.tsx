import React from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapStyle from '../styles/MapStyle';
import mapMaker from './../images/mark.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function SOSMap() {
    const navigation = useNavigation();

    function handleNavigatetoEmergency() {
        navigation.navigate('Emergency')
    }

    function handleNavigatetoSelectMap() {
        navigation.navigate('SelectMap')
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}></View>
            <MapView
                onPress={handleNavigatetoSelectMap}
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
                <Marker
                    icon={mapMaker}
                    coordinate={{
                        latitude: -23.4814287,
                        longitude: -46.3949021,
                    }}
                />
            </MapView>

            <View style={styles.boxSOS}>
                <RectButton style={styles.buttonSOS} onPress={handleNavigatetoEmergency}>
                    <Text style={styles.textButtonSOS}>SOS</Text>
                </RectButton>
            </View>

        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        //   top: 70,
        flex: 1,
        backgroundColor: '#000',
        width: 333,
        height: 3333,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    boxSOS: {
        backgroundColor: '#D8DBE2',
        position: 'absolute',
        bottom: 0,
        width: 411,
        height: 130,
    },
    buttonSOS: {
        width: 250,
        height: 110,
        padding: 3,
        backgroundColor: 'red',
        marginHorizontal: 80,
        marginVertical: 12,
        borderRadius: 13,
    },
    textButtonSOS: {
        textAlign: 'center',
        marginVertical: -13,
        fontSize: 70,
        color: '#fff',
        fontFamily: 'Quicksand'
    },
    footerText: {

    },
    nextButton: {

    },

});
