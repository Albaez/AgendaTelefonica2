import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AgendaTelefonica from './components/AgendaTelefonica';
import DetalleContacto from './components/DetalleContacto';
import Inicio from './components/Inicio';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="AgendaTelefonica" component={AgendaTelefonica} />
                <Stack.Screen name="DetalleContacto" component={DetalleContacto} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;