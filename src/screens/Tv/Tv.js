import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { fetchDailyTrendingTv, fetchWeeklyTrendingTv, fetchPopularTv, fetchAiringTodayTv } from '../../redux/asyncThunks'
import { useDispatch, useSelector } from 'react-redux'
import { HorizontalMediaList, Header,CarouselBanner } from '../../components'
import { useTheme } from '@react-navigation/native';
import { TvStyles } from './styles'


const Tv = () => {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const dailyTrending = useSelector(s => s.dailyTrendingTv);
    const styles = TvStyles(colors);

    useEffect(() => {
        dispatch(fetchDailyTrendingTv({ page: 1 }))
        dispatch(fetchWeeklyTrendingTv({ page: 1 }))
        dispatch(fetchPopularTv({ page: 1 }))
        dispatch(fetchAiringTodayTv({ page: 1 }))
    }, [])
    return (<>
        <Header title={"TV"} />
        <ScrollView contentContainerStyle={styles.container} >
        <CarouselBanner data={dailyTrending?.data ?? []} mediaType={"tv"}/>
            <HorizontalMediaList title={"Airing Today"} reducerName={"airingTodayTv"} mediaType={"tv"}/>
            <HorizontalMediaList title={"Popular Tv Shows"} reducerName={"popularTv"} mediaType={"tv"}/>
            <HorizontalMediaList title={"Trending Daily"} reducerName={"dailyTrendingTv"} mediaType={"tv"}/>
            <HorizontalMediaList title={"Trending Weekly"} reducerName={"weeklyTrendingTv"} mediaType={"tv"}/>
        </ScrollView>
    </>
    )
}

export default Tv