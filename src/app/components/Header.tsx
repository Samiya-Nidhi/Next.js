import React from 'react'
import {BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Header = () => {
  return (
   
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container px-20 py-5">
        <div className="flex items-center justify-between">
            <div className="hidden lg:flex gap-1">
                <div className="header_top_icon_wrapper">
                    <BsFacebook/>
                </div>
                <div className="header_top_icon_wrapper">
                <FaTwitterSquare />
                </div>
                <div className="header_top_icon_wrapper">
                <FaInstagramSquare />
                </div>
                <div className="header_top_icon_wrapper">
                <FaLinkedin />
                </div>
            </div>
            <div className="text-gray-500 text-[12px]">
                © 2022 All rights reserved |  <b> Free Shipping</b>
                
            </div>
            <div className="flex gap-4">
                <select className="text-gry-500 text-[12px] w-[70px]"
                name="currency" id="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    </select>
                    <select className="text-gry-500 text-[12px] w-[80px]"
                    name="language" id="language">
                    <option value="English">English</option> 
                    <option value="French">Bangla</option>
                    </select>

            </div> 
        </div>
      </div>
    </div>
   
  )
}

export default Header; 
