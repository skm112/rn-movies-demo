import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ListItemStyles } from './styles';



const ListItem = ({ title, content }) => {
    const { colors } = useTheme();
    const styles = ListItemStyles(colors)
    return (

        <View style={styles.container} >
            <Text style={[styles.text, styles.textOne]}>{title}</Text>
            <Text style={[styles.text, styles.textTwo]}>{content}</Text>
        </View>
    )
};


export default ListItem