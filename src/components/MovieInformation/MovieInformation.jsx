import React from "react"
import Star from "../Star"
import { AiOutlineStar } from "react-icons/ai"
import { GoTriangleRight } from "react-icons/go";

const MovieInformation = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full max-w-[1700px] lg:flex-row lg:items-start">
            <div className="w-full flex justify-center items-center h-screen lg:w-[50%]">
                <div className="w-[50%] my-5 shadow-lg shadow-light-blue rounded-2xl overflow-hidden">
                    <img src="https://media5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-1.jpg" alt="poster" className="w-full" />
                </div>
            </div>
            <div className="w-full h-screen flex flex-col justify-start items-center text-white p-5 lg:w-[50%]">
                <div className="w-[70%]">
                    <div className="text-center w-full">
                        <h1 className="font-black text-3xl">Animal</h1>
                        <p className="text-sm mt-2">A son's love for his father. Often away due to work the father is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.</p>
                    </div>
                    <div className="mt-3 w-full flex flex-col items-center lg:flex-row justify-between">
                        <Star />
                        <p className="">
                            204min / 01-12-2023
                        </p>
                    </div>
                    <div className="mt-3 w-full">
                        <h1 className="font-bold mb-3">Genre:</h1>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 flex justify-center items-center gap-2 rounded-lg bg-light-blue">
                                <p className="uppercase"> genre2</p>
                                <AiOutlineStar />
                            </button>
                            <button className="px-4 py-2 flex justify-center items-center gap-2 rounded-lg bg-light-blue">
                                <p className="uppercase"> genre2</p>
                                <AiOutlineStar />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h1 className="font-bold">Storyline:</h1>
                        <p className="mt-3">Balbir Singh is a rich industrialist but has no time for his family.His son Ranvijay loves him to the core and considers him a superhero.But differences develop between the father and son at a very young age of Ranvijay and he is sent to boarding school.Years later a Ranvijay returns to celebrate 60th birthday of Balbir but things turn ugly on that day and he asked to leave the house.While Ranjavijay is leaving he is surprised to see Geetaanjali who has broken he engagement and wants to be with him.They both get married in a private ceremony and shift to US.Eight years later Balbir is attacked by unknown assailants but survives, Ranvijay returns with Geetaanjali and his kids to be with his family and starts a war with people who tried to assassinate Balbir.In the war he to returns from death bed but as the story unfolds further he finds that Abrar Haque an estranged family member is the mastermind behind everything.</p>
                    </div>
                    <div className="w-full mt-5">
                        <h1 className="font-bold mb-3">
                            Top Cast:
                        </h1>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-[150px] rounded-lg overflow-hidden">
                                    <img src="https://m.economictimes.com/thumb/msid-93765979,width-1200,height-900,resizemode-4,imgsize-33664/ranbir-kapoor.jpg" alt="cast image" />
                                </div>
                                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Cast Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-3 flex justify-start items-center">
                        <button className="px-3 py-2 border rounded-lg mr-4 flex justify-center items-center gap-2">
                            <span>Website</span>
                            <GoTriangleRight />
                        </button>
                        <button className="px-3 py-2 border rounded-lg flex justify-center items-center gap-2">
                            <span>Trailer</span>
                            <GoTriangleRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieInformation