import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import DetailMovie from "../components/DetailMovie.Component";

const DetailMovieScreen = ({ route, navigation }) => {

    return (
        <View>
            <DetailMovie navigation={navigation} route={route} />
        </View>
    )
}


export default DetailMovieScreen;