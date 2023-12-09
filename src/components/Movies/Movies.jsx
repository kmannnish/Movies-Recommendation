import React from "react"
import MovieList from "../MovieList/MovieList"
import Pagination from "../Pagination/Pagination"
// rafce
const Movies = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center h-auto p-5">
            <MovieList />
            <Pagination />
        </section>
    )
}

export default Movies