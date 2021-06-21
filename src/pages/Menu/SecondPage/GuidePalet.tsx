import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Video, AVPlaybackStatus } from 'expo-av';


import Palet from './../../../images/mesadepalet.jpg'

export default function GuidePalet() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (

        <View style={styles.boxInitial}>
            <Text style={styles.menuTitle}>
                <Ionicons
                    name="ios-menu"
                    style={{
                        fontSize: 22
                    }}
                /> Guia
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
                        uri: 'https://media.istockphoto.com/videos/young-couple-paint-bench-video-id627068216',
                    }}
                    useNativeControls
                    resizeMode="cover"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />

                <View style={styles.project}>
                    <Image
                        style={styles.avatar}
                        source={Palet} />

                    <View style={styles.titles}>
                        <Text style={styles.titleTheme}>Paletes</Text>
                        <Text style={styles.subTitle}>Como?</Text>
                    </View>



                </View>
                <View style={styles.conteud}>
                    <Text style={styles.textGuide} >
                        Com o conhecimento do nível que a água atinge em sua região {"\n"}(Sessão “Estatisticas” do nosso App),{"\n"}você pode adaptar a altura de móveis em sua residência introduzindo paletes abaixo.{"\n"}{"\n"}Veja abaixo como:
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