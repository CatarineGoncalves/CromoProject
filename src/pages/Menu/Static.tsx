import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButton, Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


import GoodSign from './../../images/staticgood.png'

export default function Static() {
    const navigation = useNavigation()

    function handleNavigatetoStaticHistory() {
        navigation.navigate('StaticHistory')
    }

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
                <View style={styles.fluStyle}>
                    <Text style={styles.indiceStatic}>Flu (M)</Text>
                    <Text style={styles.numberStatic}>729.51</Text>
                </View>
                <View style={styles.fluStyle}>
                    <Text style={styles.indiceStatic}>mL</Text>
                    <Text style={styles.numberStatic}>0.83</Text>
                </View>

                <Image
                    source={GoodSign}
                    style={styles.signStatic}
                />
            </View>
            <View
                style={{
                    // margin: 0,
                    bottom: 0,
                    position: 'absolute',
                }}
            >
                <IconButton
                    icon="plus"
                    color={Colors.orangeA700}
                    size={40}
                    onPress={handleNavigatetoStaticHistory}
                    style={styles.iconPlusStatic}
                />
                <Text style={styles.textInform}>Informações</Text>

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
    signStatic: {
        marginHorizontal: 100,
        marginVertical: 130
        // justifyContent: 'center'
    },
    fluStyle: {
        justifyContent: 'space-around',
        marginTop: 15,
        flexDirection: 'row',
        textAlign: 'center',
    },
    indiceStatic: {
        fontFamily: 'WorkSans',
        fontSize: 20,
        color: '#330633',

    },
    numberStatic: {
        fontFamily: 'WorkSans',
        fontSize: 20,
        color: '#FB9300',

    },
    textInform: {
        fontFamily: 'WorkSans',
        fontSize: 18,
        color: '#FB9300',
        textAlign: 'center',
        marginBottom: 30,
    },
    iconPlusStatic: {
        // alignContent:'center',
        // justifyContent: 'center',
        marginHorizontal: 33,
        marginVertical: 0,
    }
})