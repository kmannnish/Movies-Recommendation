import { createSlice } from "@reduxjs/toolkit";

export const genre = createSlice({
    initialState: {
        genreName: "",
        page: 1,
        searchQuery: "",
    },
    reducers: {
        selectGenre: (state, action) => {
            state.genreName = action.payload;
        },
        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { selectGenre, searchMovie } = genre.action;
export default genre.reducer;