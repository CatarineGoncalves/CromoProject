import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import GuideItem from "./../../../components/GuideItems";
import RiskLocate from "../../../components/RiskLocate";


export default function LocateRisk() {
    const navigation = useNavigation()

    function handleNavigatetoList() {
        navigation.navigate('RoutesTab')
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
                <RiskLocate/>
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
        height: 720,
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