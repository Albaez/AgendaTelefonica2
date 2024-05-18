import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AgregarRecetaScreen from './components/AgregarRecetaScreen';
import Inicio from './components/Inicio';
import ListaRecetaScreen from './components/ListaRecetaScreen';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>

<Tab.Navigator
      initialRouteName="Recetas APP"
    >
      <Tab.Screen
        name="Recetas APP"
        component={Inicio}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="agregar receta"
        component={AgregarRecetaScreen}
        options={{
          tabBarLabel: 'Agregar Receta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="lista receta"
        component={ListaRecetaScreen}
        options={{
          tabBarLabel: 'Lista Receta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>    




          
        </NavigationContainer>
    );
};

export default App;

