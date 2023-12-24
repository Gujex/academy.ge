"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  linkedin: string;
}

const postData: DataType[] = [
  {
    profession: "3D Artist",
    name: "T. Dolenjashvili",
    imgSrc: "/images/profs/tom.jpg",
    linkedin: "https://www.linkedin.com/in/tomadolenjashvili/",
  },
  {
    profession: "Full Stack Developer",
    name: "G.Gujejiani",
    imgSrc: "/images/profs/gio.jpg",
    linkedin: "https://www.linkedin.com/in/giorgi-gujejiani-a991b1196/",
  },
  {
    profession: "3D Artist",
    name: "E. Nikabadze",
    imgSrc: "/images/profs/elis.jpg",
    linkedin: "https://www.linkedin.com/in/elisabed-nikabadze-966b55211/",
  },
  {
    profession: "Backend developer",
    name: "D. Gujejiani",
    imgSrc: "/images/profs/დავიდ.jpg",
    linkedin: "https://www.linkedin.com/in/davitgujejiani/",
  },
  {
    profession: "3D Artist",
    name: "T. Dolenjashvili",
    imgSrc: "/images/profs/tom.jpg",
    linkedin: "https://www.linkedin.com/in/tomadolenjashvili/",
  },
  {
    profession: "Full Stack Developer",
    name: "G.Gujejiani",
    imgSrc: "/images/profs/gio.jpg",
    linkedin: "https://www.linkedin.com/in/giorgi-gujejiani-a991b1196/",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-wework py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">
              We work in several verticals.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white opacity-50 lg:mr-48 my-2">
              We work in several verticals.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white opacity-25 lg:-mr-32 my-2">
              We work in several verticals.
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                <div className="relative flex justify-center">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={182}
                    height={182}
                    className="inline-block m-auto"
                  />
                  <a
                    href={items.linkedin}
                    target="_blank"
                    className="absolute bottom-[-1rem]"
                  >

                    <Image
                      src={"/images/wework/linkedin2.svg"}
                      alt="greenbg"
                      width={70}
                      height={70}
                      className="  inline-block position-linkedin"
                    />
                  </a>
                </div>
                <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
                <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                  {items.profession}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
