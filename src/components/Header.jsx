import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import strelka from "../assets/strelka.svg";
import search from "../assets/search.svg";
import contact from "../assets/phone.svg";
import polygon from "../assets/Polygon.svg";
import girl from "../assets/header-girl.png";

function Header() {
  return (
    <header className="flex flex-col w-screen px-[154px] h-screen overflow-hidden">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex py-[57px] items-center justify-between"
      >
        <a href="#"><img src={logo} alt="Logo" /></a>
        <ul className="flex gap-[60px]">
          <li><a href="#" className="text-[#39DB4A] font-[500] font-[poppins] text-[20px]">Home</a></li>
          <li className="flex gap-3"><a href="#" className="text-[#272727] font-[500] font-[poppins] text-[20px]">Menu</a><button><img className="mt-1" src={strelka} alt="" /></button></li>
          <li className="flex gap-3"><a href="#" className="text-[#272727] font-[500] font-[poppins] text-[20px]">Services</a><button><img className="mt-1" src={strelka} alt="" /></button></li>
          <li><a href="#" className="text-[#272727] font-[500] font-[poppins] text-[20px]">Offers</a></li>
        </ul>
        <div className="flex items-center gap-10">
          <button><img src={search} alt="Search" /></button>
          <button className="font-[poppins] font-[500] text-white text-[20px] bg-[#39DB4A] w-[179px] flex justify-center items-center h-[60px] rounded-full gap-1">
            <img src={contact} alt="Phone" /> Contact
          </button>
        </div>
      </motion.nav>

      <div className="flex gap-20 items-center h-full">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-16 w-[596px]"
        >
          <h1 className="text-black font-[inter] font-[800] text-[62px]">
            Dive into Delights Of Delectable <span className="text-[#39DB4A]">Food</span>
          </h1>
          <p className="font-[500] font-[inter] text-[26px] text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-[#39DB4A] font-[inter] font-[600] text-[26px] text-white w-[229px] h-[80px] flex justify-center items-center rounded-full button">
              Order Now
            </button>
            <button className="font-[inter] font-[600] text-[26px] text-[#4D4D4D] text-center">
              Watch Video
            </button>
            <button className="w-[80px] h-[80px] justify-center items-center flex shadow-xl rounded-full">
              <img src={polygon} alt="" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-[#53EC62] w-[662px] h-[653px] rounded-full"></div>
          <img
            className="absolute bottom-[-2.9%] w-[722px] h-[797px] left-[-2.7%]"
            src={girl}
            alt="Girl"
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
