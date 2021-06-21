import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import GuideItem from "../../components/GuideItems";


export default function Guide() {
    const navigation = useNavigation()

    function handleNavigatetoList() {
        navigation.navigate('RoutesTab')
    }

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
            <View style={styles.square}>
                <GuideItem/>
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
    square: {
        width: 411,
        height: 660,
        backgroundColor: "#fff",
        bottom: 0,
        position: "absolute",
        borderTopLeftRadius: 68,
        borderTopRightRadius: 68,
        flexDirection:'row'
    },
    menuTitle: {
        textAlign: 'center',
        marginTop: 34,
        fontFamily: 'Quicksand',
        fontSize: 22,
        color: '#fff'
    }

})