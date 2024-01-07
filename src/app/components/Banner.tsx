"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  
  const slideData= [

      {
        id: 0,
        img: "./2.jpg",
        title: "Trending items",
        price: "",
      },
      {
        id: 1,
        img: "./3.jpg",
        title: "Trending items",
        price: "", 
      },
      {
        id: 2,
        img: "./5.jpg",
        title: "Trending items",
        price: "",
      },
      {
        id: 3,
        img: "./4.jpg",
        title: "Trending items",
        price: "",
      },
      {
        id: 4,
        img: "./5.jpg",
        title: "Trending items",
        price: "",
      },
      
  ]
  
  
  
  
    return (
     <div>  
    <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item)=> (
                <Slide  key={item.id} img={item.img} title={item.title} price={item.price} />
            
            
            ))}
        </Slider>
   
    </div>
    </div> 
  );
};

export default Banner;
