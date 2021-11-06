import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DetailMovieScreen from '../screen/DetailMovieScreen';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import ListMovieScreen from '../screen/ListMovieScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Router = () => {


    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNavs} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={DetailMovieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Router;

export const TabNavs = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="List" component={ListMovieScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>

    )
}

