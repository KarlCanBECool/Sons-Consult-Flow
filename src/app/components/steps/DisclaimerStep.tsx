import React, { useState } from "react";

interface DisclaimerStepProps {
  onNext: () => void;
}

function PlusIcon() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d="M21 10.5C21 10.7321 20.9078 10.9546 20.7437 11.1187C20.5796 11.2828 20.3571 11.375 20.125 11.375H11.375V20.125C11.375 20.3571 11.2828 20.5796 11.1187 20.7437C10.9546 20.9078 10.7321 21 10.5 21C10.2679 21 10.0454 20.9078 9.88128 20.7437C9.71719 20.5796 9.625 20.3571 9.625 20.125V11.375H0.875C0.642936 11.375 0.420376 11.2828 0.256282 11.1187C0.0921874 10.9546 0 10.7321 0 10.5C0 10.2679 0.0921874 10.0454 0.256282 9.88128C0.420376 9.71719 0.642936 9.625 0.875 9.625H9.625V0.875C9.625 0.642936 9.71719 0.420376 9.88128 0.256282C10.0454 0.0921874 10.2679 0 10.5 0C10.7321 0 10.9546 0.0921874 11.1187 0.256282C11.2828 0.420376 11.375 0.642936 11.375 0.875V9.625H20.125C20.3571 9.625 20.5796 9.71719 20.7437 9.88128C20.9078 10.0454 21 10.2679 21 10.5Z" fill="#343330" />
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
    </div>
  );
}

function Checkbox({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-transparent border-none p-0 cursor-pointer">
      <div className={`relative rounded-[8px] shrink-0 size-[28px] transition-colors ${checked ? "bg-[#00b692]" : "bg-[#fdfdff]"}`}>
        {!checked && <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />}
        <div className={`absolute border-2 border-solid inset-0 rounded-[8px] border-[#00b692]`} />
        {checked && (
          <svg className="absolute top-[6px] left-[6px] size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d="M2 8L6 12L14 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

export function DisclaimerStep({ onNext }: DisclaimerStepProps) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div className="min-h-full flex flex-col gap-[24px] items-center justify-center px-[16px] py-[80px]">
          <div className="content-stretch flex flex-col gap-[40px] items-end overflow-clip relative rounded-[32px] shrink-0 w-[600px] max-md:w-full py-[32px]">
            {/* Header and text */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-black w-full">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] relative shrink-0 text-[28px] tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[32px]">
                Please confirm that you've read and understood the following:
              </p>
              <p className="font-['Aeroport:Light',sans-serif] leading-[0] relative shrink-0 text-[16px] tracking-[-0.3px] w-full">
                <span className="leading-[28px]">
                  It's important to be aware that if you experience any side effects, please stop taking the treatments and speak to your doctor as soon as possible. Finasteride can very rarely cause changes in mood, including depression, or changes in sexual function. These effects usually resolve after stopping treatment, and your doctor can explore other options to support your hair loss goals.{" "}
                </span>
                <span className="leading-[28px] text-[#4300dd] cursor-pointer hover:underline">Read more</span>
              </p>
            </div>

            {/* I confirm checkbox */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#f7f7f7] content-stretch flex gap-[8px] h-[72px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.3px]">I confirm</p>
                <Checkbox checked={confirmed} onClick={() => setConfirmed(!confirmed)} />
              </div>
            </div>

            {/* Continue button */}
            <button
              onClick={onNext}
              disabled={!confirmed}
              className={`content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 border-none transition-colors ${
                confirmed ? "bg-[#4300dd] cursor-pointer hover:bg-[#3600b3]" : "bg-[#4300dd] opacity-50 cursor-not-allowed"
              }`}
            >
              <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Continue</p>
            </button>
          </div>

          {/* NHS and GP buttons */}
          <button className="bg-[#f7f7f7] content-stretch flex gap-[8px] h-[72px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#efefef] transition-colors border-none">
            <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.3px] text-left">NHS Summary of Care</p>
            <PlusIcon />
          </button>
          <button className="bg-[#f7f7f7] content-stretch flex gap-[8px] h-[72px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#efefef] transition-colors border-none">
            <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.3px] text-left">GP Consent</p>
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}