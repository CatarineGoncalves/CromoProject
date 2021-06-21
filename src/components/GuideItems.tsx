import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { IconButton, Colors } from 'react-native-paper'

import Palet from './../images/mesadepalet.jpg';
import { useNavigation } from "@react-navigation/native";


export default function GuideItem() {
    const navigation = useNavigation()

    function handleNavigatetoList() {
        navigation.navigate('GuidePalet')
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.project}>
                <Image
                    style={styles.avatar}
                    source={Palet} />

                <View style={styles.titles}>
                    <Text style={styles.titleTheme}>Paletes</Text>
                    <Text style={styles.subTitle}>Saiba Mais</Text>
                </View>
                <IconButton
                    icon="arrow-right"
                    color={Colors.deepPurple800}
                    size={20}
                    onPress={handleNavigatetoList}
                    style={styles.iconArrowGuide} />
            </View>




        </View>
        // </View>


    )
}


const styles = StyleSheet.create({

    // INICIANDO A LISTA 

    container: {
        marginBottom: 11,
        backgroundColor: '#E6E9EF',
        overflow: 'hidden',
        flex: 1,
        marginTop: 90,
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 68,
        // width: 400,
        height: 100,
    },
    container2: {
        marginBottom: 11,
        backgroundColor: '#fff',
        overflow: 'hidden',
        flex: 1,
        marginTop: 510,
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 68,
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
        marginLeft: 16
    },

    titleTheme: {
        fontFamily: 'Quicksand',
        fontSize: 20,
        color: '#32264d'
    },

    subTitle: {
        marginTop: 4,
        fontFamily: 'WorkSans',
        fontSize: 16,
        color: '#6a6180'
    },
    iconArrowGuide: {
        marginLeft: 'auto',
    }
})