import React from "react";

const Footer = () => {
  return (
    <div className="h-24 lg:h-10 flex flex-col lg:items-center items-start justify-between mb-4 bg-[#0D0D0D] text-[#F2F2F2] lg:px-32 xl:px-56 lg:flex-row">
      <div className="mx-4 flex flex-col gap-2 lg:flex-row w-full justify-between">
        <div className="mt-2 text-sm lg:mt-0 flex-1">
          Noorder Multidiensten Bouw &amp; Schoonmaak
        </div>
        <div className="text-xs flex-1">KVK nummer: 86390015</div>
        <div className="text-xs flex-1">&copy; Alle rechten voorbehouden</div>
      </div>
    </div>
  );
};

export default Footer;
