import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    )
}

export default Search