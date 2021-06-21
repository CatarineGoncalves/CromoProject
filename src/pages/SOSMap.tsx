import React from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mapMaker from './../images/eclipse.png'


export default function SOSMap() {

    return (
        <View style={styles.container}>
            <View style={styles.container}></View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -23.4814287,
                    longitude: -46.3949021,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    icon={mapMaker}
                    coordinate={{
                        latitude: -23.4814287,
                        longitude: -46.3949021,
                    }}
                />
            </MapView>
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
  
    footer: {
  
    },
    footerText: {
  
    },
    nextButton: {
  
    },
  
  });
  