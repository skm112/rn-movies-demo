import { StyleSheet } from 'react-native';


export const DetailedListStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.bg
    },
    contentContainerStyle: {
        padding: 8,
        paddingBottom: 30,
    },
    sectionContainer: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.line,
        flexDirection: 'row'
    },
    sectionSubContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexOne: {
        flex: 1
    },
    sectionTextOne: {
        color: colors.textTwo,
        fontSize: 12,
    },
    sectionTextTwo: {
        color: colors.textTwo,
        fontSize: 12,
        paddingLeft: 4
    }
})