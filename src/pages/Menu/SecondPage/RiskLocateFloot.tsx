import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Video, AVPlaybackStatus } from 'expo-av';


import Floot from './../../../images/enchente.jpg'

export default function GuidePalet() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

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
            <View style={{
                width: 411,
                height: 720,
                backgroundColor: "#fff",
                bottom: 0,
                position: "absolute",
                borderTopLeftRadius: 68,
                borderTopRightRadius: 68,
                // flexDirection: 'row'
            }}>
                <Video
                    ref={video}
                    style={{
                        width: 411,
                        height: 300,
                        borderTopLeftRadius: 68,
                        borderTopRightRadius: 68,
                    }}
                    source={{
                        uri: 'https://media.istockphoto.com/videos/big-river-flooding-the-suburbs-after-heavy-rain-video-id479669340',
                    }}
                    useNativeControls
                    resizeMode="cover"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />

                <View style={styles.project}>
                    <Image
                        style={styles.avatar}
                        source={Floot} />

                    <View style={styles.titles}>
                        <Text style={styles.titleTheme}>Enchente</Text>
                        <Text style={styles.subTitle}>O que é?</Text>
                    </View>



                </View>
                <View style={styles.conteud}>
                    <Text style={styles.textGuide} >
                        Enchente ou cheia é,{"\n"}geralmente, uma situação{"\n"}natural de transbordamento de água {"\n"}do seu leito natural, qual seja, {"\n"}córregos, arroios, lagos, rios, ribeirões,{"\n"}provocadas geralmente por chuvas intensas e contínuas.
                    </Text>
                    
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
        // justifyContent: 'center',
    },

    menuTitle: {
        textAlign: 'center',
        marginTop: 34,
        fontFamily: 'Quicksand',
        fontSize: 22,
        color: '#fff'
    },
    container: {
        // marginBottom: 11,
        backgroundColor: '#E6E9EF',
        // overflow: 'hidden',
        flex: 1,
        // marginTop: 330,
        borderWidth: 1,
        // borderColor: '#e6e6f0',
        borderRadius: 68,
        // width: 400,
        // height: 100,
    },
    container2: {
        // marginBottom: 11,
        backgroundColor: '#fff',
        overflow: 'hidden',
        flex: 1,
        // marginTop: 510,
        // borderWidth: 1,
        borderColor: '#e6e6f0',
        // borderRadius: 68,
        // width: 400,
        // height: 10,
    },
    project: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 15

    },

    avatar: {
        width: 64,
        height: 64,
        backgroundColor: '#eee',
        borderRadius: 32
    },

    titles: {
        marginLeft: 16,
    },

    titleTheme: {
        fontFamily: 'Quicksand',
        fontSize: 20,
        color: '#110034'
    },

    subTitle: {
        marginTop: 4,
        fontFamily: 'WorkSans',
        fontSize: 16,
        color: '#6320EE',
        // flexDirection: 'column'
    },
    iconArrowGuide: {
        marginLeft: 'auto',
    },
    conteud: {
        margin: 40,
    },
    textGuide: {
        marginTop: 4,
        fontFamily: 'WorkSans',
        fontSize: 16,
        color: '#110034',
    }
})