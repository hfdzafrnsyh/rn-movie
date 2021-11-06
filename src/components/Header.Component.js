import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>RnMovie</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#2a363b',
        marginTop: 10
    }
})

export default Header;