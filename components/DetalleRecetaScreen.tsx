import { NavigationProp } from '@react-navigation/native';
import { default as React, default as React, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

interface DetalleRecetaScreenProps {
  route: {
    params: {
      numeroReceta: string;
      nombreReceta: string;
      ingredientes: string;
    };
  };
  navigation: NavigationProp<any>;
}


const DetalleRecetaScreen = ({ route, navigation }: DetalleRecetaScreenProps) => {
  const { numeroReceta, nombreReceta, ingredientes } = route.params;

  const [recetas, setRecetas] = useState<Receta[]>([]);

  const handleEliminarReceta = (id: string) => {
    setRecetas(recetas.filter((receta) => receta.id !== id));
    alert('Se eliminó el registro correctamente');
  };

  const handleVolver = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.label}>Número de receta:</Text>
      <Text style={styles.text}>{numeroReceta}</Text>

      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.text}>{nombreReceta}</Text>

      <Text style={styles.label}>Ingredientes:</Text>
      <Text style={styles.text}>{ingredientes}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Eliminar" onPress={handleEliminarReceta} color="red" />
        <Button title="Volver" onPress={handleVolver} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '50%',
    height: undefined,
    aspectRatio: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default DetalleRecetaScreen;