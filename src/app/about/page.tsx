import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8">
      <div className="flex flex-col gap-2 mt-4 bg-white p-4">
        <h2 className="text-amber-500 font-bold lg:px-14">Over ons</h2>
        <h1 className="text-2xl lg:text-4xl lg:px-14">Ons verhaal</h1>
        <div className="lg:text-lg lg:px-14">
          Noorder Multidiensten, opgericht met de toewijding om hoge normen te
          handhaven. In de loop van de tijd zijn we uitgegroeid tot een
          betrouwbare en vooruitstrevende entiteit, die op bekwame wijze bouw-
          en schoonmaakoplossingen combineert om aan de uiteenlopende behoeften
          van onze klanten te voldoen.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-24 bg-white p-4">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-3xl lg:text-4xl font-bold lg:px-14">
            Deskundige bouwdiensten
          </h2>
          <div className="lg:text-lg lg:px-14">
            Ons bouwteam bestaat uit ervaren professionals met een schat aan
            ervaring in residentiële, commerciële en industriële projecten. Van
            een nauwgezette planning tot een vlekkeloze uitvoering, wij zorgen
            ervoor dat aan elk detail wordt gedacht, wat resulteert in ruimtes
            die niet alleen aan de verwachtingen voldoen, maar deze zelfs
            overtreffen.
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
      <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-24 bg-white p-4">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-3xl lg:text-4xl font-bold lg:px-14">
            Onberispelijke schoonmaakoplossingen
          </h2>
          <div className="lg:text-lg lg:px-14">
            Op schoonmaakgebied leggen wij de lat hoog. Onze toegewijde
            schoonmaakploeg maakt gebruik van de allernieuwste technieken en
            milieuvriendelijke producten om ervoor te zorgen dat uw ruimtes niet
            alleen brandschoon zijn, maar ook veilig en gezond. Of het nu gaat
            om regulier onderhoud, dieptereiniging of gespecialiseerde diensten,
            wij staan voor u klaar.
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
      <div className="flex flex-col gap-2 mt-4 bg-white p-4">
        <h1 className="text-2xl lg:text-4xl lg:px-14">
          Waarom kiezen voor Noorder Multidiensten?
        </h1>
        <div className="lg:text-lg lg:px-14">
          Veelzijdigheid: We integreren naadloos bouw- en schoonmaakdiensten en
          bieden een totaaloplossing voor al uw behoeften. Kwaliteit: Onze
          toewijding aan uitmuntendheid zorgt ervoor dat elk project, groot of
          klein, met precisie en superieur vakmanschap wordt uitgevoerd.
          Klantgerichte aanpak: Uw tevredenheid is onze prioriteit. Wij geloven
          in open communicatie, transparantie en een samenwerkingspartnerschap
          met onze klanten.
        </div>
      </div>
    </div>
  );
};

export default About;
