import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';
const Paragraph = ({ content }) => {
    const { colors } = useTheme();
    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);
    const toggleNumberOfLines = () => {
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e => {
        if (e?.nativeEvent?.lines) {
            setLengthMore(e.nativeEvent.lines.length >= 4);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 2}
                ellipsizeMode='clip'
            >
                {content}

            </Text>
            {
                lengthMore ? <Text
                    onPress={toggleNumberOfLines}
                    style={{ color: colors.textThree }}>{textShown ? '...Show Less' : '...Show More'}</Text>
                    : null
            }

        </View>
    )
}

export default Paragraph

