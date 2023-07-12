import { View, Text, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import { Header, MediaCard } from '../../components'
import { useRoute, useNavigation, useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { FlashList } from "@shopify/flash-list";
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { fetchDailyTrending, fetchWeeklyTrending, fetchPopularMovies, fetchNowPlayingMovies, fetchDailyTrendingTv, fetchWeeklyTrendingTv, fetchPopularTv, fetchAiringTodayTv } from '../../redux/asyncThunks'
import { DetailedListStyles } from './styles';



const DetailedList = () => {
    const navigation = useNavigation()
    const { params } = useRoute()
    const { colors } = useTheme()
    const dispatch = useDispatch()
    const listStore = useSelector(s => s[params?.reducerName])
    const styles = DetailedListStyles(colors)
    const goBack = () => navigation?.goBack()
    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`

    const triggerDispatch = (payload = {}) => {
        switch (params?.reducerName) {
            case 'popularTv':
                dispatch(fetchPopularTv(payload))
                break;
            case "airingTodayTv":
                dispatch(fetchAiringTodayTv(payload))
                break;
            case "dailyTrendingTv":
                dispatch(fetchDailyTrendingTv(payload))
                break;
            case "weeklyTrendingTv":
                dispatch(fetchWeeklyTrendingTv(payload))
                break;
            case 'nowPlayingMovies':
                dispatch(fetchNowPlayingMovies(payload))
                break;
            case "popularMovies":
                dispatch(fetchPopularMovies(payload))
                break;
            case "dailyTrending":
                dispatch(fetchDailyTrending(payload))
                break;
            case "weeklyTrending":
                dispatch(fetchWeeklyTrending(payload))
                break;
            default:
                break;
        }
    }

    const onRefresh = () => triggerDispatch({ page: 1, indicatorType: 'refresh' })

    const onEndReached = () => {
        const _page = Number(listStore?.page) + 1
        triggerDispatch({ page: _page, indicatorType: 'next-page' })
    }

    const listFooterComponent = () => {
        if (listStore?.isNextLoading) {
            return (<ActivityIndicator size={'small'} animating={true} color="#110E47" />)
        }
        return null
    }

    const renderItem = ({ item, index }) => (
        <View style={styles.flexOne}>
            <MediaCard
                horizontal={true}
                poster={item?.poster_path}
                name={item?.title}
                rating={item?.vote_average}
                onPress={() => {
                    // alert(JSON.stringify({ id: item.id, mediaType: params?.mediaType }))
                    navigation?.navigate("MediaDetail", { id: item.id, mediaType: params?.mediaType })
            }}
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <Header leftIcon="arrow-left" onPressleft={goBack} title={params?.title} />
            <View style={styles.sectionContainer}>
                <View style={styles.flexOne}>
                    <Text style={styles.sectionTextOne}>{listStore?.totalResults} videos</Text>
                </View>
                <View style={styles.sectionSubContainer}>
                    <AntDesignIcon name={'filter'} size={12} color={colors.icon} />
                    <Text style={styles.sectionTextTwo}>Filter</Text>
                </View>
            </View>
            <FlashList
                keyboardDismissMode='on-drag'
                estimatedItemSize={200}
                numColumns={2}
                contentContainerStyle={styles.contentContainerStyle}
                data={listStore?.data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                onEndReachedThreshold={0.2}
                onEndReached={onEndReached}
                ListFooterComponent={listFooterComponent}
                refreshControl={
                    <RefreshControl
                        refreshing={listStore?.isRefreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

export default DetailedList