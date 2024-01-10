"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/hero-1.jpeg",
  },
  {
    id: 2,
    image: "/hero-2.jpeg",
  },
  {
    id: 3,
    image: "/hero-3.jpeg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex transition-opacity h-96 lg:h-[none]">
      {data.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt=""
          fill
          className={`object-cover opacity-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
