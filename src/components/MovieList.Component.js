import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";


const MovieList = ({ navigation, movies }) => {
    return (

        <ScrollView>

            <View style={styles.container}>
                <View style={styles.containerCard}>
                    {
                        movies.map((movie, index) => (
                            <TouchableOpacity style={styles.cardBox} key={movie.movieId}
                                onPress={() => navigation.navigate('Detail', movie)}>
                                <View style={styles.childBox}>
                                    <Image style={styles.imageMovie} source={{ uri: `${movie.thumbnailPotrait}` }} />
                                    <Text>{movie.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '45%',
    }, cardBox: {
        width: '50%',
        height: '50%',
        padding: 10,
    },
    childBox: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    imageMovie: {
        width: 100,
        height: 150
    }
})


export default MovieList;