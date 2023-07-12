import { combineReducers } from "@reduxjs/toolkit";
import dailyTrendingReducer from './dailyTrendingSlice'
import weeklyTrendingReducer from './weeklyTrendingSlice'
import popularMoviesReducer from './popularMoviesSlice'
import nowPlayingMoviesReducer from './nowPlayingMoviesSlice'
import dailyTrendingTvReducer from './dailyTrendingTvSlice'
import weeklyTrendingTvReducer from './weeklyTrendingTvSlice'
import popularTvReducer from './popularTvSlice'
import airingTodayTvReducer from './airingTodayTvSlice'

const rootReducer = combineReducers({
    dailyTrending: dailyTrendingReducer,
    weeklyTrending: weeklyTrendingReducer,
    popularMovies: popularMoviesReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    dailyTrendingTv: dailyTrendingTvReducer,
    weeklyTrendingTv: weeklyTrendingTvReducer,
    popularTv: popularTvReducer,
    airingTodayTv: airingTodayTvReducer,

})

export default rootReducer