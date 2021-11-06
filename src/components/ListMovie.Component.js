import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import server from "../server/Server";
import CardList from "./CardList.Component";

const ListMovie = ({ navigation }) => {

    const [listMovies, setListMovies] = useState([]);

    const fetchListMovie = async () => {
        const { data } = await server.get('/latest')
        setListMovies(data.result)
    }

    useEffect(() => {
        fetchListMovie();
    }, [])

    return (
        <ScrollView>
            <CardList listMovies={listMovies} navigation={navigation} />
        </ScrollView>
    )
}


export default ListMovie;