import { Pressable } from 'react-native'
import React from 'react'
import { TitleText } from '../index'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '@react-navigation/native'


const SubHeader = ({ title, onPress, hideIcon, containerStyle }) => {
    const { colors } = useTheme()
    return (
        <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
            <TitleText>{title}</TitleText>
            {!hideIcon ? <Icon name={"angle-right"} size={18} color={colors.icon} /> : null}
        </Pressable>
    )
}

export default SubHeader;

