import React from "react";
import svgPaths from "../../../imports/svg-7w6lapxhzv";
import imgFrame16 from "figma:asset/cf92d392f566edc7f45c25a95741d6ce2f2d3e57.png";
import imgImageBadge from "figma:asset/66a585cd8fd2152b52db6f4d0fb56bbf2e6556bb.png";
import imgImage1 from "figma:asset/fe7363372aff256d6d7e8aa3f606826413f7d4d0.png";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { StepScrollLayout } from "../StepScrollLayout";

interface AcceptStepProps {
  onNext: () => void;
}

const DOCTOR_FALLBACK_URL =
  "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2NTg5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const BENEFIT_ITEMS = [
  "Takes less than 1 minute.",
  "Safe, regulated treatments.",
  "Qualified aftercare team.",
];

const ACCEPT_CRITERIA = [
  "I am male at birth and over 18 years old",
  "I currently live in the UK",
  "I am using this service of my own free will",
  "I shall be the sole user of any medication offered to me through this service and prescribed by Son's independent prescribing partners",
  "I agree to the terms of service, terms of subscription, and privacy policy",
  "I confirm all answers will be provided honestly and truthfully",
];

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
          <path d={svgPaths.p3e81b3f2} fill="#4300DD" />
        </svg>
      </div>
    </div>
  );
}

function DoctorAvatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-[9999px] size-[80px] pointer-events-none ${className}`}>
      <ImageWithFallback
        alt="Doctor"
        className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full"
        src={imgImage1}
        onError={(e) => {
          (e.target as HTMLImageElement).src = DOCTOR_FALLBACK_URL;
        }}
      />
      <div className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex gap-[8px] items-center w-full">
      <CheckIcon />
      <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px]">
        {text}
      </p>
    </div>
  );
}

function BenefitList({ items }: { items: string[] }) {
  return (
    <div className="bg-[#f7f7f7] rounded-[24px] w-full flex flex-col gap-[8px] pl-[16px] pr-[24px] py-[16px]">
      {items.map((text) => (
        <BenefitRow key={text} text={text} />
      ))}
    </div>
  );
}

function GuaranteeCard() {
  return (
    <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0] shrink-0">
      <div className="col-start-1 row-start-1 bg-[#f7f7f7] flex flex-col gap-[8px] items-start mt-[40px] overflow-clip pb-[32px] pt-[24px] px-[24px] rounded-[12px] text-black w-[402px]">
        <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic text-[22px] tracking-[-1.4px] w-full">
          Money back guarantee
        </p>
        <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] w-full">
          Our clinically-backed treatments have been proven to halt hair loss for 94% of men. That's most guys. However, this does mean that a small few won't respond to the treatment.
        </p>
      </div>
      <DoctorAvatar className="col-start-1 row-start-1 ml-[293.5px] mt-0 z-10" />
    </div>
  );
}

function MobileImageBadge() {
  return (
    <div className="max-md:block hidden relative rounded-[24px] shrink-0 w-full h-[160px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full"
        src={imgImageBadge}
      />
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col items-start justify-end p-[16px] relative size-full">
          <DoctorAvatar />
        </div>
      </div>
    </div>
  );
}

function ProductImageColumn() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-[450px] lg:sticky lg:top-[40px] lg:self-start lg:h-[calc(100vh-180px)] lg:max-h-[800px] lg:overflow-hidden max-lg:w-full max-lg:min-h-[360px] max-md:min-h-0 max-md:rounded-[24px] max-md:overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full block max-md:hidden"
        src={imgFrame16}
      />

      <MobileImageBadge />

      <div className="max-md:hidden max-lg:flex lg:hidden absolute top-0 left-0 p-[16px]">
        <DoctorAvatar />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end overflow-clip rounded-[inherit] p-[24px] max-lg:hidden pointer-events-none">
        <div className="pointer-events-auto shrink-0">
          <GuaranteeCard />
        </div>
      </div>
    </div>
  );
}

function AcceptButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#4300dd] flex h-[52px] items-center justify-center px-[32px] py-[16px] rounded-[9999px] w-full cursor-pointer hover:bg-[#3600b3] transition-colors mt-[24px] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap border-none"
    >
      I accept
    </button>
  );
}

function LoginPrompt({ className = "" }: { className?: string }) {
  return (
    <p className={`font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px] ${className}`}>
      <span>Already have an account? </span>
      <span className="text-[#4300dd] cursor-pointer hover:underline">Log in</span>
    </p>
  );
}

export function AcceptStep({ onNext }: AcceptStepProps) {
  return (
    <StepScrollLayout className="min-h-full max-md:min-h-0 justify-center max-md:justify-start gap-[24px] max-md:gap-0">
      <div className="flex gap-[24px] items-stretch lg:items-end justify-center max-w-[1034px] max-lg:flex-col max-lg:gap-[32px] max-lg:w-full w-full max-md:pb-[40px]">
        <ProductImageColumn />

        <div className="flex flex-col gap-[24px] w-[559px] max-lg:w-full max-lg:h-auto px-[40px] py-[32px] max-md:px-0 max-md:py-0 rounded-[32px] justify-center max-lg:justify-start">
          <section className="flex flex-col gap-[16px] items-start w-full">
            <h1 className="font-['Aeroport:Bold',sans-serif] leading-[40px] not-italic text-[36px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px]">
              Sons is with you every step of the way
            </h1>
            <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px] w-full">
              We'll ask you some questions about your hair loss and then our prescribing partners will recommend the best treatment plan for you.
            </p>
            <BenefitList items={BENEFIT_ITEMS} />
          </section>

          <section className="flex flex-col w-full pb-[40px] font-['Aeroport:Light',sans-serif] text-black tracking-[-0.3px]">
            <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] mb-[8px] text-[16px]">
              Please read the statement and accept if you meet all the criteria
            </p>
            <ul className="list-disc pl-[24px] leading-[20px] text-[16px] space-y-[3px]">
              {ACCEPT_CRITERIA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <AcceptButton onClick={onNext} />
            <LoginPrompt className="lg:hidden w-full mt-[16px]" />
          </section>
        </div>
      </div>

      <LoginPrompt className="max-lg:hidden w-[1034px]" />
    </StepScrollLayout>
  );
}
