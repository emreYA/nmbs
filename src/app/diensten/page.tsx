import Image from "next/image";
import React from "react";

const Diensten = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8">
      <div className="flex flex-col gap-2 mt-4 bg-white p-4">
        <h2 className="text-amber-500 font-bold lg:px-14">Diensten</h2>
        <h1 className="text-2xl lg:text-4xl lg:px-14">Onze Diensten</h1>
        <div className="lg:text-lg lg:px-14">
          Onze multiservice-aanpak is ontworpen om aan al uw wensen te voldoen
          en biedt een naadloze mix van bouw- en schoonmaakoplossingen. Ontdek
          het dienstenaanbod dat wij aanbieden:
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-24 bg-white p-4">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-3xl lg:text-4xl font-bold lg:px-14">
            Schoonmaak
          </h2>
          <div className="lg:text-lg lg:px-14">
            <ul className="list-disc pl-4">
              <li>Kantoorgebouwen</li>
              <li>Klaslokalen</li>
              <li>Bibliotheken</li>
              <li>Gemeenschappelijke ruimtes</li>
              <li>Verzorgingstehuizen</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="h-96 lg:h-[none]">
            <Image
              src="/schoonmaak-dienst.jpeg"
              alt="Diensten"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-24 bg-white p-4">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-3xl lg:text-4xl font-bold lg:px-14">Bouw</h2>
          <div className="lg:text-lg lg:px-14">
            <ul className="list-disc pl-4">
              <li>Huisrenovaties</li>
              <li>Toevoegingen en uitbreidingen</li>
              <li>Aangepast huisontwerp</li>
              <li>Groene bouwoplossingen</li>
              <li>Projectmanagement</li>
              <li>Hernieuwbare energie-installaties</li>
              <li>Nieuwbouw projecten</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="h-96 lg:h-[none]">
            <Image
              src="/bouw-dienst.jpeg"
              alt="Diensten"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diensten;
