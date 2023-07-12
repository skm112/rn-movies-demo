import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Poster } from '../index'
import { styles } from './styles'
const MediaCard = ({ poster, posterType, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Poster img={poster} posterType={posterType} />
        </Pressable>
    )
}

export default MediaCard

