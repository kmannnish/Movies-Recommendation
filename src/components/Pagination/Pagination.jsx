import React from "react"

const Pagination = ({ currentPage, totalPages, setPages }) => {

    if (totalpages === 0) return null;

    const handlePrev = () => {
        if (currentPage !== 1) {
            setPages((prevPage) => prevPage - 1);
        }
    }
    const handleNext = () => {
        if (currentPage !== totalPages) {
            setPages((prevPage) => prevPage + 1);
        }
    }

    return (
        <div className="text-white mt-5">
            <button className="bg-light-blue px-3 py-2 text-sm rounded-lg mr-3" onClick={handlePrev}>Previous</button>
            <button className="bg-light-blue px-3 py-2 text-sm rounded-lg" onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination