import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const CardList = ({ navigation, listMovies }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={listMovies}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.movieId} style={styles.cardList}
                        onPress={() => navigation.navigate('Detail', item)}>
                        <View style={styles.cardListContainer}>
                            <Image source={{ uri: `${item.thumbnailPotrait}` }}
                                style={{ width: 100, height: 150, padding: 10 }}
                            />
                            <Text style={{ padding: 10, width: '50%' }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>

                )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardList: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    cardListContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default CardList;