import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import server from "../server/Server";
import MovieList from "./MovieList.Component";

const Home = ({ navigation }) => {

    const [movies, setMovies] = useState([]);

    const handleMovie = async () => {
        const { data } = await server.get('/latest')
        setMovies(data.result)
    }

    useEffect(() => {
        handleMovie();
    }, [])

    return (
        <View >
            <MovieList navigation={navigation} movies={movies} />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },


})

export default Home;