import React, { useState } from "react";
import { TooltipIcon } from "../TooltipIcon";

interface RadioQuestionStepProps {
  question: string;
  options: string[];
  onNext: () => void;
  savedValue?: number | null;
  onSaveAnswer?: (value: number) => void;
  tooltip?: { title: string; description: string };
}

export function RadioQuestionStep({ question, options, onNext, savedValue, onSaveAnswer, tooltip }: RadioQuestionStepProps) {
  const [selected, setSelected] = useState<number | null>(savedValue ?? null);
  const hasSavedValue = savedValue !== undefined && savedValue !== null;
  const [hasClicked, setHasClicked] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setHasClicked(true);
    onSaveAnswer?.(index);
    setTimeout(() => onNext(), 300);
  };

  const handleContinue = () => {
    if (selected !== null) {
      onSaveAnswer?.(selected);
      onNext();
    }
  };

  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div className="min-h-full flex flex-col items-center justify-center px-px py-[80px]">
          <div className="content-stretch flex flex-col gap-[24px] items-end overflow-clip px-[40px] py-[32px] relative rounded-[32px] shrink-0 w-[600px] max-md:w-full max-md:px-[16px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] text-[28px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[32px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
                {question}
                {tooltip && (
                  <span className="inline-flex items-center" style={{ verticalAlign: "middle", marginLeft: 4 }}>
                    <TooltipIcon title={tooltip.title} description={tooltip.description} />
                  </span>
                )}
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 max-md:w-full">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`bg-[#f7f7f7] content-stretch flex gap-px h-[72px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0 w-[520px] max-md:w-full cursor-pointer transition-all border-none ${
                    selected === index ? "ring-2 ring-[#4300dd]" : "hover:bg-[#efefef]"
                  }`}
                >
                  <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] text-black tracking-[-0.3px] text-left">
                    {option}
                  </p>
                </button>
              ))}
            </div>

            {/* Remove the Continue button entirely */}
            {hasSavedValue && selected !== null && !hasClicked && (
              <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                <button
                  onClick={handleContinue}
                  className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
                >
                  <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Continue</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}