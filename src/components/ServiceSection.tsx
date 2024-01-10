import Image from "next/image";
import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

interface ServiceSectionProps {
  image1Src: string;
  image2Src: string;
  service1Link: string;
  service2Link: string;
  service1Text: string;
  service2Text: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  image1Src,
  image2Src,
  service1Link,
  service2Link,
  service1Text,
  service2Text,
}) => {
  return (
    <div className="flex relative">
      <div className="flex-1 h-96 relative group">
        <Image
          src={image1Src}
          alt="Service Image 1"
          fill
          className="object-cover w-full h-full transition-opacity group-hover:opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <p className="text-white font-bold text-lg mb-2 transition-opacity group-hover:opacity-100 lg:text-3xl">
            {service1Text}
          </p>
          <Link
            href={service1Link}
            className={`bg-amber-500 hover:bg-amber-600 rounded-none ${buttonVariants()}`}
          >
            Kom meer te weten
          </Link>
        </div>
      </div>

      <div className="flex-1 h-96 relative group">
        <Image
          src={image2Src}
          alt="Service Image 2"
          fill
          className="object-cover w-full h-full transition-opacity group-hover:opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <p className="text-white font-bold text-lg mb-2 transition-opacity group-hover:opacity-100 lg:text-3xl">
            {service2Text}
          </p>
          <Link
            href={service2Link}
            className={`bg-amber-500 hover:bg-amber-600 rounded-none ${buttonVariants()}`}
          >
            Kom meer te weten
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
