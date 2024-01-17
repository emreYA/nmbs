import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import BelOns from "@/components/BelOns";
import ServiceSection from "@/components/ServiceSection";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 lg:gap-8">
      <div className="flex flex-col gap-2 lg:gap-4 mt-4 bg-white p-4">
        <div className="h-1/2 relative">
          <Slider />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold lg:px-14">
          Welkom bij Noorder Multidiensten, uw totaaloplossing voor bouw- en
          schoonmaakdiensten!
        </h1>
        <div className="lg:text-lg lg:px-14">
          Bij NMBS zijn we er trots op een veelzijdig en betrouwbaar
          multiservicesbedrijf te zijn dat zich toelegt op het voldoen aan al uw
          bouw- en schoonmaakbehoeften.
          <div className="flex flex-row mt-2 lg:mt-6">
            <Link
              href="/diensten"
              className={`rounded-none ${buttonVariants()}`}
            >
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 bg-white p-4">
        <h2 className="text-amber-500 font-bold lg:px-14">Over Ons</h2>
        <h1 className="text-2xl lg:text-4xl lg:px-14">
          Uw vertrouwde partner in bouw en schoonmaak
        </h1>
        <div className="lg:text-lg lg:px-14">
          <div>
            Bij NMBS zijn we er trots op een dynamisch en veelzijdig
            multiservicesbedrijf te zijn dat zich toelegt op het verbeteren van
            de ruimtes waar u woont en werkt.
          </div>
          <div className="flex flex-row gap-5 mt-2">
            <Link href="/about" className={`rounded-none ${buttonVariants()}`}>
              Lees meer
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 bg-white p-4">
        <h2 className="text-amber-500 font-bold lg:px-14">Partner in bouw</h2>
        <h2 className="text-2xl lg:text-4xl lg:px-14">Isoman Nederland</h2>
        <div className="lg:px-14">
          <Image
            width={100}
            height={100}
            src="/isoman-logo.png"
            alt="logo partner in bouw"
          />
        </div>
        <div className="">
          <p className="lg:text-lg lg:px-14">
            Isoman Nederland is een gewaardeerde medewerker. Hun toewijding aan
            kwaliteit sluit naadloos aan bij onze missie. Samen streven we
            ernaar om uitstekende bouwoplossingen te leveren. Met een gedeelde
            toewijding aan integriteit en klanttevredenheid speelt Isoman
            Nederland een cruciale rol in ons succesverhaal.
          </p>
        </div>
      </div>
      <ServiceSection
        image1Src="/bouw-dienst.jpeg" // Replace with the actual path to your image
        image2Src="/schoonmaak-dienst.jpeg" // Replace with the actual path to your image
        service1Link="/diensten" // Replace with the actual link to your service page
        service2Link="/diensten" // Replace with the actual link to your service page
        service1Text="Onze bouw diensten"
        service2Text="Onze schoonmaak diensten"
      />
      <BelOns />
    </div>
  );
}
