import React from "react";
import { View, StyleSheet, Text } from "react-native";



export default function UseKK() {
    return (
        <View style={styles.boxInitial}>
            <Text style={styles.menuTitle}>Teste</Text>
            <View style={styles.square}>
                
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
        borderTopLeftRadius:68,
        borderTopRightRadius:68,
    },
    menuTitle:{
        textAlign:'center',
        marginTop: 34,
        fontFamily:'Quicksand',
        fontSize:22,
        color: '#fff'
    },

})