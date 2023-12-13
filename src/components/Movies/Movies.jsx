import React, { useState } from "react"
import MovieList from "../MovieList/MovieList"
import Pagination from "../Pagination/Pagination"
import { useGetMovieQuery } from "../../Services/Api"
import { useSelector } from "react-redux"
import { selectGenre } from "../../Feature/currentGenre"
// rafce
const Movies = () => {

    const [page, setPage] = useState(1);
    const { genreName, searchQuery } = useSelector((state) => state.currentGenre);
    const { data, isFetching, error } = useGetMoviesQuery({genreName, page, searchQuery});

    return (
        <section className="w-full flex flex-col justify-center items-center h-auto p-5">
            <MovieList movies={data} />
            <Pagination currrentPage={page} setPage={setPage} totalPages={data?.total_pages} />
        </section>
    )
}

export default Movies