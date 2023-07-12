import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { fetchDailyTrending, fetchWeeklyTrending, fetchPopularMovies, fetchNowPlayingMovies } from '../../redux/asyncThunks'
import { useDispatch, useSelector } from 'react-redux'
import { HorizontalMediaList, Header, CarouselBanner} from '../../components'
import { useTheme } from '@react-navigation/native'
import { MoviesStyles } from './styles'

const Movies = () => {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const dailyTrending = useSelector(s => s.dailyTrending);
    const styles = MoviesStyles(colors);

    useEffect(() => {
        dispatch(fetchDailyTrending({ page: 1 }))
        dispatch(fetchWeeklyTrending({ page: 1 }))
        dispatch(fetchPopularMovies({ page: 1 }))
        dispatch(fetchNowPlayingMovies({ page: 1 }))
    }, [])
    return (<>
        <Header title={"Movies"} />
        <ScrollView contentContainerStyle={styles.container} >
            <CarouselBanner data={dailyTrending?.data ?? []}  mediaType={"movie"} />
            <HorizontalMediaList title={"Now Playing"} reducerName={"nowPlayingMovies"} mediaType={"movie"} />
            <HorizontalMediaList title={"Popular Movies"} reducerName={"popularMovies"} mediaType={"movie"}/>
            <HorizontalMediaList title={"Trending Daily"} reducerName={"dailyTrending"} mediaType={"movie"}/>
            <HorizontalMediaList title={"Trending Weekly"} reducerName={"weeklyTrending"} mediaType={"movie"}/>
        </ScrollView>
    </>
    )
}

export default Movies