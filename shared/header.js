import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

    /*const openMenu = () => {
        navigation.openDrawer();
    }*/

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} /*onPress={openMenu}*/ style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '200%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        marginLeft: 10,
    }, 
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage:{
        width: 26,
        height: 26,
    },
    headerTitle: {
        flexDirection: 'row',
        marginHorizontal: 10,
    }
});
