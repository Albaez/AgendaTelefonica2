import { NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

type RootStackParamList = {
    DetalleContacto: {
        contact: string;
    };
};

type DetalleContactoProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<RootStackParamList, 'DetalleContacto'>;
};



const DetalleContacto: React.FC<DetalleContactoProps> = ({ route }) => {
    const { contact } = route.params;

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                source={require('../assets/avatar.png')}
            />
            <Text style={styles.contact}>{contact}</Text>
            
            <Image  
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
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
    contact: {
        fontSize: 30,
        fontWeight:'condensed',
        marginBottom: 10,
    },
    logo: {
        width: '60%',
        height: undefined,
        aspectRatio: 4,
        marginBottom: 15,
        alignSelf: 'center',
    },

});

export default DetalleContacto;