import React from "react"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

const Stars = ({ starVote }) => {
    const stars = starVote / 2;
    // const ratingStar = 8.6
    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;

        return (
            <span key={index} className="text-yellow-500">
                {
                    (stars >= index + 1) ? (
                        <FaStar />
                    ) : (stars >= number) ? (
                        <FaStarHalfAlt />
                    ) : (
                        <AiOutlineStar />
                    )
                }
            </span>
        );
    });

    return (
        <div className="mt-2 flex justify-center items-center gap-1">
            {ratingStar}
        </div>
    );
};

export default Stars;