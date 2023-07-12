import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi } from '../../apis';


export const fetchNowPlayingMovies = createAsyncThunk(
    'nowPlayingMovies/fetchNowPlayingMovies',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`movie/now_playing`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.nowPlayingMovies.totalPages && page > _s.nowPlayingMovies.totalPages) {
                    return false
                }
            }
        }
    }

)

export const fetchPopularMovies = createAsyncThunk(
    'popularMovies/fetchPopularMovies',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`movie/popular`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.popularMovies.totalPages && page > _s.popularMovies.totalPages) {
                    return false
                }
            }
        }
    }

)
export const fetchWeeklyTrending = createAsyncThunk(
    'weeklyTrending/fetchWeeklyTrending',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`trending/movie/week`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.weeklyTrending.totalPages && page > _s.weeklyTrending.totalPages) {
                    return false
                }
            }
        }
    }

)

export const fetchDailyTrending = createAsyncThunk(
    'dailyTrending/fetchDailyTrending',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`trending/movie/day`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.dailyTrending.totalPages && page > _s.dailyTrending.totalPages) {
                    return false
                }
            }
        }
    }
)

export const fetchDailyTrendingTv = createAsyncThunk(
    'dailyTrendingTv/fetchDailyTrendingTv',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`trending/tv/day`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.dailyTrendingTv.totalPages && page > _s.dailyTrendingTv.totalPages) {
                    return false
                }
            }
        }
    }
)

export const fetchWeeklyTrendingTv = createAsyncThunk(
    'weeklyTrendingTv/fetchWeeklyTrendingTv',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`trending/tv/week`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.weeklyTrendingTv.totalPages && page > _s.weeklyTrendingTv.totalPages) {
                    return false
                }
            }
        }
    }

)

export const fetchPopularTv = createAsyncThunk(
    'popularTv/fetchPopularTv',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`tv/popular`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.popularTv.totalPages && page > _s.popularTv.totalPages) {
                    return false
                }
            }
        }
    }

)

export const fetchAiringTodayTv = createAsyncThunk(
    'airingTodayTv/fetchAiringTodayTv',
    async ({ page = 1, indicatorType = 'initial' }, thunkAPI) => {
        const response = await getApi(`tv/airing_today`, { page })
        if (response && response.data) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue(response?.message)
        }
    },
    {
        condition: ({ page }, { getState }) => {
            if (page > 1) {
                const _s = getState()
                if (_s.airingTodayTv.totalPages && page > _s.airingTodayTv.totalPages) {
                    return false
                }
            }
        }
    }

)
