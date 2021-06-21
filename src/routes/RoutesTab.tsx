import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import Teste from "./../pages/Menu/Teste"
import Emergency from "../pages/Menu/Emergency";
import Guide from "../pages/Menu/Guide"
import Static from "../pages/Menu/Static";
import SOSMap from "../pages/SOSMap";

const { Navigator, Screen } = createBottomTabNavigator();
function RoutesTab() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {

                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Quicksand',
                    fontSize: 13,
                },
                inactiveBackgroundColor: '#fcfcfc',
                activeBackgroundColor: '#e9e8e8',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#5c5b5b'

            }}>
            <Screen
                name="Mapa"
                component={SOSMap}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <Ionicons
                                name="map"
                                size={size}
                                color={color}
                                style={{ marginBottom: 9 }}
                            />
                        )
                    }
                }}
            />
            <Screen
                name="Guide"
                component={Guide}
                options={{
                    tabBarLabel: 'Guia',
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <Ionicons
                                name="ios-menu"
                                size={size}
                                color={color}
                                style={{ marginBottom: 9 }}
                            />
                        )
                    }
                }} />
            <Screen
                name="Emergency"
                component={Emergency}
                options={{
                    tabBarLabel: 'Emergência',
                    tabBarIcon: ({ size }) => {
                        return (
                            <Ionicons
                                name="call"
                                size={size}
                                style={{ marginBottom: 9, color: '#ff1818' }}
                            />
                        )
                    }
                }} />
            <Screen 
            name="Estatísticas" 
            component={Static}
            options={{
                tabBarLabel: 'Estatistica',
                tabBarIcon: ({ size, color }) => {
                    return (
                        <Ionicons
                            name="analytics"
                            size={size}
                            color={color}
                            style={{ marginBottom: 9}}
                        />
                    )
                }
            }}
         />
         {/* <Screen component={Teste} name="Teste"  /> */}
        </ Navigator>
    )
}

export default RoutesTab;