import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVedio:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVedio:(state,action) =>{
            state.trailerVedio = action.payload;
        },
        addTopratedmovies:(state,action) =>{
            state.topRatedMovies  = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        }

    }
})

export const { addNowPlayingMovies, addTrailerVedio, addPopularMovies,addTopratedmovies,addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;