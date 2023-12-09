import React from "react"
import { AiOutlineStar } from "react-icons/ai"

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
    return (
        <div className=" text-white border flex gap-4 p-3 overflow-x-auto">
            {/* {
                genre.map((item, i) => {
                    <button key={i} className="px-4 py-2 border-[1px] rounded-lg">
                        <AiOutlineStar />
                        <p className="">{item}</p>
                    </button>
                })
            } */}

            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
            <button className="px-4 py-2 border-[1px] flex justify-center gap-2 rounded-lg">
                <AiOutlineStar className="mt-1"/>
                <p className="">Genre1</p>
            </button>
        </div>
    )
}

export default TopBar