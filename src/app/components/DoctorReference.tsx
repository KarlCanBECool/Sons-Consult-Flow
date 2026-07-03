import React from "react";
import imgImage from "figma:asset/c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";

export function DoctorReference() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <div className="relative rounded-[9999px] shrink-0 size-[40px]">
        <div className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#bdbdbd] inset-0 rounded-[9999px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img
              alt=""
              className="absolute left-[-9.61%] max-w-none size-[127.28%] top-[-0.54%]"
              src={imgImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Aeroport:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25272a] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">
        Dr. Knut A. Moe, Sons Medical Director
      </p>
    </div>
  );
}
