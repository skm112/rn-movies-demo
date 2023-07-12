import { createSlice } from '@reduxjs/toolkit'
import { fetchDailyTrendingTv } from '../asyncThunks'

const initialState = {
    data: [],
    page: 1,
   totalPages: 0,
    totalResults: 0,
    isLoading: false,
    isRefreshing: false,
    isNextLoading: false
}

export const dailyTrendingTvSlice = createSlice({
    name: 'dailyTrendingTv',
    initialState,
    reducers: {
        resetDailyTrendingTv: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyTrendingTv.pending, (state, action) => {
                const { indicatorType } = action.meta.arg
                if (indicatorType == "refresh") {
                    state.isRefreshing = true
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = true
                } else {
                    state.isLoading = true
                }
            })
            .addCase(fetchDailyTrendingTv.fulfilled, (state, action) => {
                const { page, indicatorType } = action.meta.arg
                if (page == 1) {
                    if (action.payload?.results) state.data = action.payload.results;
                } else {
                    if (action.payload?.results) state.data = [...state.data, ...action.payload.results];
                }
                if (action.payload?.page) state.page = action.payload.page;
                  if (action.payload?.total_pages) state.totalPages = action.payload.total_pages;
                if (action.payload?.total_results) state.totalResults = action.payload.total_results;
                if (indicatorType == "refresh") {
                    state.isRefreshing = false
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = false
                } else {
                    state.isLoading = false
                }
            })
            .addCase(fetchDailyTrendingTv.rejected, (state, action) => {
                const { indicatorType } = action.meta.arg
                if (indicatorType == "refresh") {
                    state.isRefreshing = false
                } else if (indicatorType == "next-page") {
                    state.isNextLoading = false
                } else {
                    state.isLoading = false
                }

            })
    }
})


export const { resetDailyTrendingTv } = dailyTrendingTvSlice.actions

export default dailyTrendingTvSlice.reducer