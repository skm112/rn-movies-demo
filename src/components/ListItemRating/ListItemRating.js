import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { ListItemRatingStyles } from './styles';

const ListItemRating = ({ title, rating }) => {
    const { colors } = useTheme();
    const styles = ListItemRatingStyles(colors)
    return (
        <View style={styles.container} >
            <Text style={[styles.text, styles.textOne]}>{title}</Text>
            <Rating
                showRating={false}
                tintColor={colors.bg}
                style={{ paddingVertical: 10, alignItems: 'flex-start' }}
                readonly={true}
                ratingCount={5}
                startingValue={rating ? rating / 2 : 0}
                imageSize={20}
            />
        </View>
    )
};

export default ListItemRating;