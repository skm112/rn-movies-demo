import { StyleSheet } from 'react-native';

export const NetworkIndicatorStyles = (colors) => StyleSheet.create({
    container: {
        paddingVertical: 2,
        alignItems: 'center'
    },
    successContainer: {
        backgroundColor: 'green'
    },
    errorContainer: {
        backgroundColor: 'red'
    },
    text: {
        color: 'white',
        fontWeight: '600',
        letterSpacing: .5
    }
});