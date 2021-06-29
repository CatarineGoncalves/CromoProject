import React, { Component } from "react";
import { View, StyleSheet, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, CardItem, Text, Thumbnail, Content, Button, Icon, Left, Body, Right, Container, Header } from 'native-base';

import DefesaCivil from './../../images/Vector1.png'
import Bombeiro from './../../images/Vector2.png'
import Policia from './../../images/Vector3.png'

export default class Emergency extends Component {
    render() {
        return (

            <View style={styles.boxInitial}>

                <Text style={styles.menuTitle}>
                    <Ionicons
                        name="call"
                        style={{
                            fontSize: 22,
                        }} /> Emergência
                </Text>
                <View style={styles.square}>
                    <CardItem style={styles.cardEmergency}
                        button onPress={() => {Linking.openURL(`tel:199`);}}>
                        <Left   
                            style={styles.leftEmergency}
                        >
                            <Image
                                source={DefesaCivil}
                                style={{
                                    height: 44,
                                    width: 44
                                }}
                            />
                            <Text
                                style={styles.callSOS}>Defesa Civil</Text>
                        </Left>

                    </CardItem>
                    <CardItem
                        style={styles.cardEmergency}
                        button onPress={() => {Linking.openURL(`tel:193`);}}>
                        <Left style={styles.leftEmergency}>
                            <Image source={Bombeiro}
                                style={{
                                    height: 44,
                                    width: 44
                                }}
                            />
                            <Text style={styles.callSOS}>Bombeiros</Text>
                        </Left>

                    </CardItem>
                    <CardItem style={styles.cardEmergency} button onPress={() => {Linking.openURL(`tel:190`);}}>
                        <Left
                            style={styles.leftEmergency}
                        >
                            <Image
                                source={Policia}
                                style={{
                                    height: 44,
                                    width: 44
                                }}
                            />
                            <Text
                                style={styles.callSOS}>Policia</Text>
                        </Left>

                    </CardItem>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxInitial: {
        flex: 1,
        backgroundColor: '#F51116',
        alignItems: 'center',
        
        // justifyContent: 'center',
    },
    square: {
        width: 411,
        height: 660,
        backgroundColor: "#fff",
        bottom: 0,
        position: "absolute",
        borderTopLeftRadius: 68,
        borderTopRightRadius: 68,
    },
    menuTitle: {
        textAlign: 'center',
        marginTop: 34,
        fontFamily: 'Quicksand',
        fontSize: 22,
        color: '#fff',
    },
    cardEmergency: {
        width: 300,
        height: 130,
        marginHorizontal: 50,
        padding: 0,
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: 'red',
        marginTop: 40,
        flexDirection: 'column',
        borderColor:'#fff'
    },
    leftEmergency: {
        flexDirection: 'column'
    },
    callSOS: {
        color: '#fff',
        fontSize: 33,
        marginLeft: 12,
        // textAlign: 'left'
    }

})