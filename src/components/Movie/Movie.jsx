import React from "react"
import Star from "../Star"
import { Link } from "react-router-dom"

// rafce
const Movie = () => {
    return (
        <div className="w-[250px] flex flex-col justify-start items-center text-white">
            <Link to="/MovieInformation">
                <div className="w-[250px] rounded-2xl overflow-hidden">
                    <img src="https://media5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-1.jpg" alt="poster" className="w-full" />
                </div>
            </Link>
            {/* whitespace-nowrap overflow-hidden overflow-ellipsis */}

            <h1 className="font-semibold mt-3 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">Title Movie Name Title Movie Name Title Movie Name</h1>

            <div className="mt-2">
                <Star />
            </div>
        </div>
    )
}

export default Movie