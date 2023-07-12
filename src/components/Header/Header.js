import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native';
import { HeaderStyles } from './styles';


const iconDefaultProps = {
    backgroundColor: "transparent",
    underlayColor: "transparent",
    size: 16,
}

const Header = ({ title, leftIcon, onPressleft, color }) => {
    const { colors } = useTheme()

    const styles = HeaderStyles(colors)


    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Icon.Button
                    {...iconDefaultProps}
                    iconStyle={styles.iconStyle}
                    name={leftIcon}
                    onPress={onPressleft}
                    color={color ? color : colors.icon}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer}>

            </View>
        </View>
    )
}

export default Header

