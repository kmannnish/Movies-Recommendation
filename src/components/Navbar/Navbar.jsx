import React from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full text-white flex justify-center items-center px-8 py-5 bg-light-blue">
            <div className=" w-full max-w-[1700px] flex items-center justify-between ">
                <Link to="/" className="font-black text-2xl">Movie's Web</Link>
                <div className="relative hidden sm:block">
                    <input type="text" placeholder="Enter Movie Name" className="bg-Dark-Gray p-3 pl-3 pr-10 text-light-Gray border-none outline-none rounded-lg w-[300px] text-sm placeholder:text-sm "/>
                    {/* logo of search */}
                    <FaSearch className="absolute right-3 top-[50%] translate-y-[-50%]"/>
                </div>
                <Link to="/genre" className="py-3 px-5 bg-Dark-Gray rounded-xl text-sm">Select Genre</Link>
            </div>
        </div>
    )
}

export default Navbar