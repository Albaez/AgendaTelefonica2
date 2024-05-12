import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const AgendaTelefonica = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [nombre, setNombre] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [contacts, setContacts] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddContact = () => {
        if (nombre.length < 3) {
            setErrorMessage('El nombre debe tener al menos 3 caracteres');
        } else if (numeroTelefono.length < 8) {
            setErrorMessage('El número de teléfono debe tener al menos 8 números');
        } else {
            setContacts([...contacts, `${nombre} - ${numeroTelefono}`]);
            setNombre('');
            setNumeroTelefono('');
            setErrorMessage('');
        }
    };

    const handleContactPress = (contact: string) => {
        navigation.navigate('DetalleContacto', { contact });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre de Contacto"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono de Contacto"
                value={numeroTelefono}
                onChangeText={setNumeroTelefono}
                keyboardType="numeric"
            />
            <Button title="Agregar Contacto" onPress={handleAddContact} />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            {contacts.map((contact, index) => (
                <View key={index} style={styles.contactContainer}>
                    <Avatar
                        rounded
                        size="medium"
                        source={require('../assets/avatar.png')}
                    />
                    <Text
                        style={styles.contact}
                        onPress={() => handleContactPress(contact)}
                    >
                        {contact}
                    </Text>
                </View>
            ))}
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
    input: {
        width: '90%',
        height: 60,
        borderColor: 'navy',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contact: {
        marginLeft: 10,
    },
});

export default AgendaTelefonica;