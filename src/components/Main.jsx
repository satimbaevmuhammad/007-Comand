import React from "react";
import img1 from "../assets/img1.svg"
import img2 from "../assets/img2.svg"
import img3 from "../assets/img3.svg"

import img4 from "../assets/img4.svg"
import img5 from "../assets/img5.svg"
import img6 from "../assets/img6.svg"
import img7 from "../assets/img7.svg"
import img8 from "../assets/img8.svg"
import img9 from "../assets/img9.svg"



function Main() {
    return (
        <>

            <p className="text-center font-[700] text-xl text-[#FF6868]">Customer Favorites</p>
            <h1 className="text-4xl font-[700] pt-3 text-center">Popular Categories</h1>

            <div className="flex justify-between pt-10 px-10">
                <div className="flex flex-col items-center justify-center card1 w-[250px] h-[250px] bg-[white] rounded-xl ">
                    <div className="w-[150px] h-[150px] bg-[#C1F1C6] rounded-full flex  items-center justify-center">
                        <img className="w-[110px] h-[100px] " src={img1} alt="" />
                    </div>
                    <p className="font-[500]">Main Dish</p>
                    <p className="text-[#555555]">(86 dishes)</p>
                </div>
                <div className="flex flex-col items-center justify-center card1 w-[250px] h-[250px] bg-[white] rounded-xl ">
                    <div className="w-[150px] h-[150px] bg-[#C1F1C6] rounded-full flex  items-center justify-center">
                        <img className="w-[110px] h-[100px] " src={img2} alt="" />
                    </div>
                    <p className="font-[500]">Break Fast</p>
                    <p className="text-[#555555]">(12 dishes)</p>
                </div>
                <div className="flex flex-col items-center justify-center card1 w-[250px] h-[250px] bg-[white] rounded-xl ">
                    <div className="w-[150px] h-[150px] bg-[#C1F1C6] rounded-full flex  items-center justify-center">
                        <img className="w-[110px] h-[100px] " src={img3} alt="" />
                    </div>
                    <p className="font-[500]">Dessert</p>
                    <p className="text-[#555555]">(48 dishes)</p>
                </div>
                <div className="flex flex-col items-center justify-center card1 w-[250px] h-[250px] bg-[white] rounded-xl ">
                    <div className="w-[150px] h-[150px] bg-[#C1F1C6] rounded-full flex  items-center justify-center">
                        <img className="w-[110px] h-[100px] " src={img9} alt="" />
                    </div>
                    <p className="font-[500]">Browse All</p>
                    <p className="text-[#555555]">(255- dishes)</p>
                </div>
            </div>
            <div>
                <p className="text-[#FF6868] text-lg font-[700] pt-10 px-10">Special Dishes</p>
                <h2 className="font-[700] text-3xl leading-tight px-10 pt-5">
                    Standout Dishes<br />
                    From Our Menu
                </h2>
                <div className="pt-5 flex justify-between px-10">
                    <div className="card w-[300px] h-[350px] bg-white rounded-xl">
                        
                        <img className="w-[230px] h-[230px] mx-auto pt-2" src={img4} alt="" />
                        <div className="px-5">
                            <p className="text-xl font-[600] pt-2">Fattoush salad</p>
                            <p className="text-[#555555] pt-2">Description of the item</p>
                            <div className="flex justify-between items-center pt-2">
                                <p className="font-[600]">
                                    <span className="text-[#FF6868]">$</span>24.00
                                </p>

                                <div className="flex items-center gap-1">
                                    <img className="w-4 h-4" src={img7} alt="Star" />
                                    <span className="text-sm">4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[300px] h-[350px] bg-white rounded-xl">
                        <img className="w-[230px] h-[230px] mx-auto pt-2" src={img5} alt="" />
                        <div className="px-5">
                            <p className="text-xl font-[600] pt-2">Vegetable salad</p>
                            <p className="text-[#555555] pt-2">Description of the item</p>
                            <div className="flex justify-between items-center pt-2">
                                <p className="font-[600]">
                                    <span className="text-[#FF6868]">$</span>26 .00
                                </p>

                                <div className="flex items-center gap-1">
                                    <img className="w-4 h-4" src={img7} alt="Star" />
                                    <span className="text-sm">4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[300px] h-[350px] bg-white rounded-xl">
                        <img className="w-[230px] h-[230px] mx-auto pt-2" src={img6} alt="" />
                        <div className="px-5">
                            <p className="text-xl font-[600] pt-2">Egg vegi salad</p>
                            <p className="text-[#555555] pt-2">Description of the item</p>
                            <div className="flex justify-between items-center pt-2">
                                <p className="font-[600]">
                                    <span className="text-[#FF6868]">$</span>23.00
                                </p>

                                <div className="flex items-center gap-1">
                                    <img className="w-4 h-4" src={img7} alt="Star" />
                                    <span className="text-sm">4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main;