import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Loading = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} animating={true} color="#110E47" />
        </View>
    )
}

export default Loading

