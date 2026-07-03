import React, { useState } from "react";
import { QuestionStepLayout } from "../QuestionStepLayout";
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

  const continueFooter =
    hasSavedValue && selected !== null && !hasClicked ? (
      <button
        onClick={handleContinue}
        className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
      >
        <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">
          Continue
        </p>
      </button>
    ) : undefined;

  return (
    <QuestionStepLayout footer={continueFooter}>
      <div className="flex flex-col items-start w-full">
        <p
          className="font-['Aeroport:Bold',sans-serif] leading-[34px] text-[28px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]"
          style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}
        >
          {question}
          {tooltip && (
            <span className="inline-flex items-center" style={{ verticalAlign: "middle", marginLeft: 4 }}>
              <TooltipIcon title={tooltip.title} description={tooltip.description} />
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-[16px] w-full">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`bg-[#f7f7f7] content-stretch flex gap-px min-h-[72px] items-center justify-center px-[24px] relative rounded-[12px] w-full cursor-pointer transition-all border-none ${
              selected === index ? "ring-2 ring-[#4300dd]" : "hover:bg-[#efefef]"
            }`}
          >
            <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] text-black tracking-[-0.3px] text-left">
              {option}
            </p>
          </button>
        ))}
      </div>
    </QuestionStepLayout>
  );
}
