"use client";
import React, { useState } from "react";
import Card from "../ui/Card";
import Image from "next/image";

const MarkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/assets/mark-1.svg",
      title: "Fortune Top 20",
      description:
        "Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune",
    },
    {
      src: "/assets/mark-2.svg",
      title: "Berkontribusi lebih dari $7.1 triliun",
      description: "Penggerak roda perkonomian",
    },
    {
      src: "/assets/mark-3.svg",
      title: "Jaket hijau, pergerakan juga hijau",
      description:
        "Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020",
    },
    {
      src: "/assets/mark-4.svg",
      title: "Tumbuh 80% sejak pandemi",
      description:
        "Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lg:mt-32 mt-16 rounded-t-[80px] lg:rounded-t-[150px] bg-white flex justify-center items-center h-[380px]">
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
          <Card
            className="w-[150px] h-[220px] flex flex-col items-center justify-between"
            src={slides[currentSlide].src}
            imgHeight={150}
            imgWidth={150}
            title={slides[currentSlide].title}
            titleSize="text-2xl text-center"
            descSize="text-base text-center"
            description={slides[currentSlide].description}
          />
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
      <div className="hidden lg:flex justify-center gap-16 items-center">
        {slides.map((slide, index) => (
          <Card
            key={index}
            className="w-[150px] h-[220px] flex flex-col items-center justify-between -top-48"
            src={slide.src}
            imgHeight={150}
            imgWidth={150}
            title={slide.title}
            titleSize="text-2xl text-center"
            descSize="text-base text-center"
            description={slide.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MarkSection;
