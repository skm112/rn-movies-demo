import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const MyStuff = () => {
    return (
        <View style={styles.container}>
            <Text>MyStuff</Text>
        </View>
    )
}

export default MyStuff