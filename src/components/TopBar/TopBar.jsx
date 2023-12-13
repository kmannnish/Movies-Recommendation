import React from "react"
import { AiOutlineStar } from "react-icons/ai";
import genreIcons from '../../assets/genres';
import { useGetMovieByGenreQuery } from '../../Services/Api';
import { selectGenre } from "../../Feature/currentGenre";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const TopBar = () => {
    // const genre = [
    //     "genre1",
    //     "genre2",
    //     "genre3",
    //     "genre4",
    //     "genre5",
    //     "genre6",
    //     "genre7",
    //     "genre9",
    //     "genre10",
    // ]

    const dispatch = useDispatch();
    const { data, isFetching } = useGetMovieByGenreQuery();

    return (
        <div className=" text-white border flex gap-4 p-3 overflow-x-auto">
            {isFetching || (
                data?.genres.map(({ name, id }) => (
                    <Link key={id} value={id} className="text-white flex px-2 py-2 border rounded-lg justify-center items-center" obCl>
                        <div className="flex" onClick={() => dispatchEvent(selectGenre(id))}>
                            <div>
                                <img src={genreIcons[name.toLowerCase()]} width={30} height={30} className="text-white invert mr-5" />
                            </div>
                            {name}
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default TopBar