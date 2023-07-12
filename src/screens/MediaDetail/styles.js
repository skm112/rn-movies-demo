import { StyleSheet } from 'react-native';

export const MediaDetailStyles = (colors) => StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.bg
    }
})

export const TitleHeadStyles = (colors) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: colors.textOne,
        fontSize: 26,
        fontWeight: 'bold',
    },
    linearGradientContainer:{
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    linearGradient: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 18,
        color: colors.textOne,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})

export const SubTabsStyles = (colors) => StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
    },
    activeTab: {
        borderBottomWidth: 3
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.textOne,
        padding: 8,
    },
    activeTabText: {
        fontWeight: '800'
    },
    tabText: {
        color: colors.textOne,
        letterSpacing: 0.5,
        fontWeight: '400'
    }
})