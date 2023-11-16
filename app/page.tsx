"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {

  const sliderData  = [
    { name: 'vcdsvhcvdsc', title:"Want to run demos locally Want to run demos locally Want to run demos locallyWant to run demos locally"  },
    { name: 'khdskcds', title:"Want to run demos locally Want to run demos locally Want to run demos locallyWant to run demos locally"  },
    { name: 'kcdskc', title:"Want to run demos locally Want to run demos locally Want to run demos locallyWant to run demos locally"  },
    { name: 'chdshc', title:"Want to run demos locally Want to run demos locally Want to run demos locallyWant to run demos locally"  },
    { name: 'hjdcvsd', title:"Want to run demos locally Want to run demos locally Want to run demos locallyWant to run demos locally"  },
   
  ];

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }


  return (
    <>
      <div className="w-full min-h-screen grid place-content-center mx-auto">
        <div className=" bg-blue-200 border p-10 md:p-20">
          <div className="grid grid-cols-1 md:px-20 text-center">
            <Slider {...settings}>
              {sliderData.map((item, index) => (
                <div key={index}>
                  <div className="grid place-content-center break-words space-y-2">
                      <p className='text-xl'>{item.title}</p>
                    <h2 className="text-[#FFF] text-xl">
                        {item.name}
                    </h2>
                  </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
