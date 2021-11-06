import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

const DetailMovie = ({ route, navigation }) => {


    const { width, height } = Dimensions.get('window');
    const data = route.params;
    console.log(data)

    return (
        <ScrollView>
            <View >
                <View>
                    <Image source={{ uri: `${data.thumbnailPotrait}` }}
                        style={{ width: width, height: width }}
                    />
                </View>
                <View style={styles.containerTextDetail}>
                    <Text style={{ padding: 10 }}>{data.title}</Text>
                    <View style={styles.detailRows}>
                        <Text style={{ padding: 10 }}>Rating : {data.rating}</Text>
                        <Text style={{ padding: 10 }}>Quality : {data.quality}</Text>
                    </View>
                    <View style={styles.detailRows}>
                        <Text style={{ padding: 10 }}>Genre : {data.detail.genre}</Text>
                        <Text style={{ padding: 10 }}>View : {data.detail.views}</Text>
                    </View>
                    <View style={styles.detailRows}>
                        <Text style={{ padding: 10 }}>Date Release : {data.detail.release}</Text>
                        <Text style={{ padding: 10 }}>Duration : {data.detail.duration}</Text>
                    </View>
                    <Text style={{ padding: 10, borderBottomWidth: 1, borderColor: '#2a363b' }}>Director : {data.detail.director}</Text>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10,
                        paddingVertical: 10
                    }}>
                        <Text>Description</Text>
                        <Text style>{data.detail.description}</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerDetail: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    containerTextDetail: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailRows: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#2a363b'
    }
})

export default DetailMovie;