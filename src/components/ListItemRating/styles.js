import { StyleSheet } from 'react-native';

export const ListItemRatingStyles = (colors) => StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: colors.line,
        marginHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        color: colors.textOne,
        fontSize: 16
    },
    textOne: {
        fontWeight: '600'
    },
    textTwo: {
        fontWeight: '300'
    }

});