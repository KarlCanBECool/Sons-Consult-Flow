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

export function AcceptStep({ onNext }: AcceptStepProps) {
  return (
    <StepScrollLayout className="min-h-full max-md:min-h-0 justify-center max-md:justify-start max-md:gap-0">
      <div className="content-stretch flex gap-[24px] items-stretch lg:items-start justify-center min-h-px min-w-px relative max-w-[1034px] max-lg:flex-col max-lg:gap-[32px] max-lg:w-full w-full max-md:pb-[40px]">

        {/* Left side - Product image */}
        <div className="relative rounded-[32px] shrink-0 w-[450px] lg:sticky lg:top-[40px] lg:self-start lg:h-[calc(100vh-180px)] lg:max-h-[800px] lg:overflow-hidden max-lg:w-full max-lg:min-h-[360px] max-md:min-h-0 max-md:h-[112px] max-md:rounded-[24px] max-md:overflow-hidden">
          {/* Desktop image — absolutely positioned, full height */}
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full block max-md:hidden" src={imgFrame16} />

          {/* Mobile badge image — fixed 112px height banner */}
          <img alt="" className="max-md:block hidden w-full h-[112px] rounded-[24px] object-cover" src={imgImageBadge} />

          {/* Doctor avatar overlay on mobile and tablet (matches M3PreConsult Figma) */}
          <div className="max-lg:flex lg:hidden absolute top-0 left-0 p-[16px]">
            <div className="relative rounded-[9999px] size-[80px] pointer-events-none">
              <ImageWithFallback
                alt="Doctor"
                className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full"
                src={imgImage1}
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2NTg5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"; }}
              />
              <div className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
            </div>
          </div>

          {/* Desktop overlay content (guarantee card + doctor avatar) */}
          <div className="flex flex-col items-center justify-end rounded-[inherit] size-full max-lg:hidden">
            <div className="content-stretch flex flex-col items-center justify-end p-[24px] relative size-full">
              <div className="inline-grid relative shrink-0">
                <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[8px] items-start mt-[40px] overflow-clip pb-[32px] pt-[24px] px-[24px] relative rounded-[12px] text-black w-[402px]">
                  <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic text-[22px] tracking-[-1.4px] w-full">Money back guarantee</p>
                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] w-full">
                    Our clinically-backed treatments have been proven to halt hair loss for 94% of men. That's most guys. However, this does mean that a small few won't respond to the treatment.
                  </p>
                </div>
                <div className="absolute right-[24px] top-0 pointer-events-none rounded-[9999px] size-[80px]">
                  <ImageWithFallback alt="Doctor" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgImage1} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2NTg5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"; }} />
                  <div className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="h-full relative rounded-[32px] shrink-0 w-[559px] max-lg:w-full">
          <div className="flex flex-col items-end rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-end px-[40px] py-[32px] relative size-full my-auto max-md:px-0 max-md:py-[32px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full mb-[16px]">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="font-['Aeroport:Bold',sans-serif] leading-[40px] not-italic text-[36px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px]">
                    <p className="mb-0">Sons is with you every step</p>
                    <p>of the way</p>
                  </div>
                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px] w-full">
                    We'll ask you some questions about your hair loss and then our prescribing partners will recommend the best treatment plan for you.
                  </p>
                  <div className="bg-[#f7f7f7] relative rounded-[24px] shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[16px] relative w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <CheckIcon />
                          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px]">
                            Takes less than 1 minute.
                          </p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <CheckIcon />
                          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] text-black tracking-[-0.3px]">Safe, regulated treatments.</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <CheckIcon />
                          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] text-black tracking-[-0.3px]">Qualified aftercare team.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-['Aeroport:Light',sans-serif] leading-[0] text-[0px] text-black tracking-[-0.3px] w-full mb-[40px] pb-[40px]">
                  <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] mb-[8px] text-[16px]">
                    Please read the statement and accept if you meet all the criteria
                  </p>
                  <ul className="list-disc pl-[24px] leading-[20px] text-[16px] space-y-[3px]">
                    <li>I am male at birth and over 18 years old</li>
                    <li>I currently live in the UK</li>
                    <li>I am using this service of my own free will</li>
                    <li>I shall be the sole user of any medication offered to me through this service and prescribed by Son's independent prescribing partners</li>
                    <li>I agree to the terms of service, terms of subscription, and privacy policy</li>
                    <li>I confirm all answers will be provided honestly and truthfully</li>
                  </ul>
                  <button
                    onClick={onNext}
                    className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors mt-[24px]"
                  >
                    <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">I accept</p>
                  </button>
                  {/* Mobile-only Log in link — appears directly below button */}
                  <p className="lg:hidden font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px] w-full mt-[16px]">
                    <span>Already have an account? </span>
                    <span className="text-[#4300dd] cursor-pointer hover:underline">Log in</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only Log in link — below the two-column section */}
      <p className="max-lg:hidden font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] text-black tracking-[-0.3px] w-[1034px]">
        <span>Already have an account? </span>
        <span className="text-[#4300dd] cursor-pointer hover:underline">Log in</span>
      </p>
    </StepScrollLayout>
  );
}
