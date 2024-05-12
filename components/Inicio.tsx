import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

const Inicio = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleAgendaTelefonica = () => {
        navigation.navigate('AgendaTelefonica');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Button title="Ir" onPress={handleAgendaTelefonica} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '50%',
        height: undefined,
        aspectRatio: 4,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default Inicio;
