import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import Static from './../../../images/Static.png'

export default function StaticHistory() {
    return (
        <View style={styles.boxInitial}>
            <Text style={styles.menuTitle}>
                <Ionicons
                    name="analytics"
                    style={{
                        fontSize: 23,
                    }}
                /> Estatistica
            </Text>
            <View style={styles.square}>
                <Text style={styles.titleHistoric}>Histórico</Text>
                <Image source={Static} style={styles.graphicStatic} />
                <Text style={styles.legendStatic}>Histórico dos últimos níveis de água atingidos na sua região.</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    boxInitial: {
        flex: 1,
        backgroundColor: '#6320EE',
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
        color: '#fff'
    },
    graphicStatic: {
        marginHorizontal: 105,
        marginVertical: 50,
        height: 200,
        width:200,
        // justifyContent: 'center'
    },
    titleHistoric: {
        fontFamily: 'Quicksand',
        fontSize: 30, 
        color: '#330633',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 120,
    },
    legendStatic: {
        fontSize: 16,
        fontFamily: 'WorkSans',
        textAlign: 'left',
        marginHorizontal: 60,
        color: '#330633',
    }
})