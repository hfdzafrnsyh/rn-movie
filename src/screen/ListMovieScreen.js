import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ListMovie from "../components/ListMovie.Component";

const ListMovieScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ListMovie navigation={navigation} />
        </SafeAreaView>
    )
}

export default ListMovieScreen;