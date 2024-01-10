"use clients";
import Image from "next/image";
import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BelOns = () => {
  return (
    <div className="relative">
      <div className="h-96 relative">
        <Image
          src="/gebouwen.png"
          alt="About Image"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3">
          <p className="text-[#F2F2F2] font-bold text-xl mb-4 lg:text-3xl">
            Bel ons nu voor deskundige hulp!
          </p>
          <p className="text-[#F2F2F2] text-sm mb-4 lg:text-xl">
            We staan klaar om uw vragen te beantwoorden, uw projecten te
            bespreken en deskundige begeleiding te bieden. Neem vandaag nog
            contact op en laten we samen bouwen en schoonmaken!
          </p>
          <Link
            href="tel:+31628217687"
            className={`bg-amber-500 hover:bg-amber-600 rounded-none ${buttonVariants()}`}
          >
            Bel nu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BelOns;
