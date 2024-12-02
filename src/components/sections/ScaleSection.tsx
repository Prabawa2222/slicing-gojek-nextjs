"use client";
import React, { useState } from "react";
import Card from "../ui/Card";
import Image from "next/image";

interface Slide {
  src: string;
  title: string;
  description: string;
  bgColor: string;
}

interface CardComponentProps {
  slide: Slide;
  isMobile: boolean;
}

const ScaleSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      src: "/assets/scale-1.png",
      title: "190 juta+",
      description: "jumlah install aplikasi kami",
      bgColor: "#7CCC6C",
    },
    {
      src: "/assets/scale-2.png",
      title: "2 juta+",
      description: "mitra Driver yang sudah bergabung dengan kami",
      bgColor: "#D48BC8",
    },
    {
      src: "/assets/scale-3.png",
      title: "900.000+",
      description: "jumlah mitra GoFood",
      bgColor: "#FFAE62",
    },
    {
      src: "/assets/scale-4.png",
      title: "2.488x",
      description:
        "lipat kenaikan pengunduhan aplikasi gojek dari 2015 sampai 2020",
      bgColor: "#4AC9E3",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const CardComponent: React.FC<CardComponentProps> = ({ slide }) => (
    <Card
      className={`w-[400px] lg:w-[200px] h-[250px] flex flex-col items-center shadow-lg rounded-3xl justify-around px-5 
        bg-[${slide.bgColor}]
      }`}
      src={slide.src}
      imgHeight={300}
      imgWidth={300}
      imgPosition="absolute -top-32 lg:-top-20"
      title={slide.title}
      titleSize="text-3xl"
      description={slide.description}
      descSize="text-sm"
    />
  );

  return (
    <div className="bg-white flex justify-center items-center h-[350px]">
      <div className="flex flex-col items-center lg:hidden w-full px-4 relative">
        <div className="flex items-center justify-between w-full">
          <button onClick={handlePrev}>
            <Image
              src="/assets/arrow-left.svg"
              alt="arrow"
              width={40}
              height={40}
            />
          </button>
          <CardComponent slide={slides[currentSlide]} isMobile={true} />
          <button onClick={handleNext}>
            <Image
              src="/assets/arrow-right.svg"
              alt="arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex justify-center gap-10 items-center">
        {slides.map((slide, index) => (
          <CardComponent key={index} slide={slide} isMobile={false} />
        ))}
      </div>
    </div>
  );
};

export default ScaleSection;
