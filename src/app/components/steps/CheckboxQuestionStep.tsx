import React, { useState } from "react";
import { TooltipIcon } from "../TooltipIcon";

interface CheckboxQuestionStepProps {
  question: string;
  options: string[];
  onNext: () => void;
  savedValue?: Set<number>;
  onSaveAnswer?: (value: Set<number>) => void;
  tooltip?: { title: string; description: string };
  showInputs?: boolean;
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div className={`relative rounded-[8px] shrink-0 size-[28px] transition-colors ${checked ? "bg-[#00b692]" : "bg-[#fdfdff]"}`}>
      {!checked && (
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
      )}
      <div className={`absolute border-2 border-solid inset-0 overflow-clip rounded-[8px] transition-colors ${checked ? "border-[#00b692]" : "border-[#00b692]"}`} />
      {checked && (
        <svg className="absolute top-[6px] left-[6px] size-[16px]" fill="none" viewBox="0 0 16 16">
          <path d="M2 8L6 12L14 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export function CheckboxQuestionStep({ question, options, onNext, savedValue, onSaveAnswer, tooltip, showInputs = true }: CheckboxQuestionStepProps) {
  const [selected, setSelected] = useState<Set<number>>(savedValue ?? new Set());
  const [inputValues, setInputValues] = useState<Record<number, string>>({});

  const handleToggle = (index: number) => {
    const option = options[index];
    const isNoneOption = option === "None of these" || option === "None of These" || option === "None of the above";
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (isNoneOption) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  // Sync saved answer after selected state updates
  React.useEffect(() => {
    onSaveAnswer?.(selected);
  }, [selected]);

  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div className="min-h-full flex flex-col items-center justify-center px-px py-[80px]">
          <div className="content-stretch flex flex-col gap-[24px] items-end overflow-clip px-[40px] py-[32px] relative rounded-[32px] shrink-0 w-[600px] max-md:w-full max-md:px-[16px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] text-[28px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[32px]">
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
                <div
                  key={index}
                  onClick={() => handleToggle(index)}
                  className={`bg-[#f7f7f7] content-stretch flex flex-col gap-[12px] px-[24px] py-[16px] relative rounded-[12px] shrink-0 w-[520px] max-md:w-full cursor-pointer transition-colors ${selected.has(index) ? "" : "hover:bg-[#efefef]"}`}
                >
                  <div className="flex gap-[8px] items-center min-h-[40px]">
                    <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] text-black tracking-[-0.3px] text-left">
                      {option}
                    </p>
                    <Checkbox checked={selected.has(index)} />
                  </div>
                  {showInputs && selected.has(index) && option !== "None of these" && option !== "None of These" && option !== "None of the above" && option !== "All of the above" && (
                    <div
                      className="flex flex-col gap-[8px]"
                      style={{ animation: "fadeIn 200ms ease forwards" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="font-['Aeroport:Bold',sans-serif] text-[14px] leading-[20px] text-black tracking-[-0.3px]">
                        Additional information
                      </p>
                      <input
                        type="text"
                        placeholder="Please elaborate..."
                        value={inputValues[index] ?? ""}
                        onChange={(e) => setInputValues((prev) => ({ ...prev, [index]: e.target.value }))}
                        className="w-full bg-[#efefef] rounded-[9999px] px-[20px] py-[14px] font-['Aeroport:Light',sans-serif] text-[16px] text-black tracking-[-0.3px] placeholder:text-black/30 border-none outline-none"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleContinue}
              className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
            >
              <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Continue</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}