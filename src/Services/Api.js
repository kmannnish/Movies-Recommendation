import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Genre from "../components/Genre/Genre";

const page = 1;

export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (builder) => ({
        // GetMovie
        getMovies: builder.query({
            query: () => 'movie/popular?page=${page}&api_key=4d3542e837204e1af75b995897831363'
        }),
        // Get Movie by ID
        getMovie: builder.query({
            query: ({ genreName, page, searchQuery }) => {

                if(searchQuery){
                    return '/search/movie?query=${searchQuery}&page=${page}&api_key=4d3542e837204e1af75b995897831363'
                }


                if (genreName && typeof genreName === 'number') {
                    return 'discover/movie?with_genres=${genreName}&page=${page}&api_key=4d3542e837204e1af75b995897831363'
                }
                return 'movie/popular?page=${page}&api_key=4d3542e837204e1af75b995897831363';
            }
        }),
        // Get movie by Genre
        getMovie: builder.query({
            query: (id) => '/movie/${id}?append_to_response-videos,credits&api_key=4d3542e837204e1af75b995897831363'
        }),
    })
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetMovieByGenreQuery,
} = TMDBAPI;