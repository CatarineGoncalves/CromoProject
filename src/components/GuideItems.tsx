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
        <View style={styles.containerAtually}>
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
    containerAtually: {
        backgroundColor: '#E6E9EF',
        borderColor: '#e6e6f0',
        height: 110,
        width: 370,
        borderRadius: 20,
        marginVertical: 90,
        marginHorizontal: 20,
    },
    container: {
        marginBottom: 11,
        overflow: 'hidden',
        flex: 1,
        marginTop: 90,
        borderWidth: 1,
        borderRadius: 68,
    },

    project: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 15
    },

    avatar: {
        width: 70,
        height: 70,
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