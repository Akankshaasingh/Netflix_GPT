import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, aciton) => {
            state.nowPlayingMovies = aciton.payload;
        }, 
        addTrailerVideo: (state, aciton)=>{
            state.trailerVideo = aciton.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;