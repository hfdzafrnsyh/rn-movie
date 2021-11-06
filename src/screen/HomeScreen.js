import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Home from "../components/Home.Component";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Home navigation={navigation} />
        </SafeAreaView>
    )
}

export default HomeScreen;