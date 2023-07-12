import { StyleSheet } from 'react-native'

export const TitleTextStyles = (colors) => StyleSheet.create({
    text: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: .5,
        color: colors.textOne,
        marginRight:8
    }
});