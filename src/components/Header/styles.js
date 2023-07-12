import { StyleSheet } from 'react-native';

export const HeaderStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 56,
        padding: 8
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '20%',

    },
    leftContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '20%',

    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
        color: colors.textOne
    },
    iconStyle: {
        marginRight: 0,
    }
})