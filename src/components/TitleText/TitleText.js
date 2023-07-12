import { Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { TitleTextStyles } from './styles';
const TitleText = ({ children }) => {
    const { colors } = useTheme()
    const styles = TitleTextStyles(colors)
    return (
        <>
            <Text style={styles.text}>{children}</Text>
        </>
    )
}

export default TitleText;

