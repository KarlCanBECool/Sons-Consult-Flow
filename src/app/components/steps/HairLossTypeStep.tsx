import React, { useState } from "react";
import { TooltipIcon } from "../TooltipIcon";
import svgPaths from "../../../imports/4HairLossType-1/svg-ctdh0e3u1e";

interface HairLossTypeStepProps {
  onNext: () => void;
  savedValue?: number | null;
  onSaveAnswer?: (value: number) => void;
}

function TemplesSvg() {
  return (
    <div className="h-[119.987px] relative shrink-0 w-[100px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 119.987">
        <path d={svgPaths.p2f308580} fill="#1D1D1D" />
        <path d={svgPaths.p2e42ec70} fill="#1D1D1D" />
        <path d={svgPaths.p18799600} fill="#1D1D1D" />
        <path d={svgPaths.p36654f80} fill="#1D1D1D" />
        <path d={svgPaths.p41b8580} fill="#CFDF69" />
        <path clipRule="evenodd" d={svgPaths.p32a5a80} fill="#1D1D1D" fillRule="evenodd" />
        <path d={svgPaths.p3d5d5040} fill="#CFDF69" />
      </svg>
    </div>
  );
}

function RandomPatchesSvg() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <path d={svgPaths.p274f0870} fill="#1D1D1D" />
        <path d={svgPaths.pdc46600} fill="#1D1D1D" />
        <path d={svgPaths.p20f14500} fill="#1D1D1D" />
        <path d={svgPaths.p36b02800} fill="#1D1D1D" />
        <path d={svgPaths.p1b166c80} fill="#CFFE6E" />
        <path clipRule="evenodd" d={svgPaths.p23937800} fill="#1D1D1D" fillRule="evenodd" />
        <path d={svgPaths.pcb1a700} fill="#CFFE6E" />
        <path d={svgPaths.p3914070} fill="#CFFE6E" />
      </svg>
    </div>
  );
}

function TemplesCrownSvg() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <path d={svgPaths.p274f0870} fill="#1D1D1D" />
        <path d={svgPaths.pdc46600} fill="#1D1D1D" />
        <path d={svgPaths.p20f14500} fill="#1D1D1D" />
        <path d={svgPaths.p36b02800} fill="#1D1D1D" />
        <path d={svgPaths.p1b166c80} fill="#C1FF50" />
        <path clipRule="evenodd" d={svgPaths.p23937800} fill="#1D1D1D" fillRule="evenodd" />
        <path d={svgPaths.pcb1a700} fill="#C1FF50" />
        <path d={svgPaths.p775f800} fill="#C1FF50" />
      </svg>
    </div>
  );
}

function CompletelyBaldSvg() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <path d={svgPaths.p2762c80} fill="#1D1D1D" />
        <path d={svgPaths.p2a5c9900} fill="#1D1D1D" />
        <path d={svgPaths.p18912500} fill="#1D1D1D" />
        <path d={svgPaths.p32060980} fill="#1D1D1D" />
        <path clipRule="evenodd" d={svgPaths.p7246100} fill="#1D1D1D" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function HairLossOption({ icon, label, onClick, isSelected }: {
  icon: React.ReactNode; label: string; onClick: () => void; isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px] cursor-pointer hover:bg-[#f7f7f7] transition-all border-none max-md:w-full max-md:min-h-[180px] max-md:h-auto ${
        isSelected ? "ring-2 ring-[#4300dd]" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[24px] relative size-full">
          {icon}
          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] min-w-full text-[16px] text-[#1d1d1d] text-center tracking-[-0.3px]">
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}

export function HairLossTypeStep({ onNext, savedValue, onSaveAnswer }: HairLossTypeStepProps) {
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
          <div className="content-stretch flex flex-col gap-[24px] items-end px-[40px] py-[32px] relative rounded-[32px] shrink-0 w-[600px] max-md:w-full max-md:px-[16px]">

            {/* Title */}
            <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[520px] relative shrink-0 w-full">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic text-[28px] text-[#1d1d1d] tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[32px]">
                Which image best describes your
              </p>
              <div className="flex gap-[4px] items-center">
                <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic text-[28px] text-[#1d1d1d] tracking-[-1.4px] whitespace-nowrap max-md:text-[24px] max-md:leading-[32px]">
                  hair loss?
                </p>
                <span className="inline-flex items-center" style={{ verticalAlign: "middle" }}>
                  <TooltipIcon
                    title="Why do we ask this?"
                    description="We need to know this information to determine the most suitable product for you."
                  />
                </span>
              </div>
            </div>

            {/* Options grid */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {/* Row 1: Temples | Random patches */}
              <div className="content-stretch flex gap-[24px] h-[250px] items-start relative shrink-0 w-full max-md:flex-col max-md:h-auto">
                <HairLossOption
                  icon={<TemplesSvg />}
                  label="Temples only (receding at the front)"
                  onClick={() => handleSelect(0)}
                  isSelected={selected === 0}
                />
                <HairLossOption
                  icon={<RandomPatchesSvg />}
                  label="Random patches"
                  onClick={() => handleSelect(1)}
                  isSelected={selected === 1}
                />
              </div>
              {/* Row 2: Temples/Crown | Completely bald */}
              <div className="content-stretch flex gap-[24px] h-[250px] items-start relative shrink-0 w-full max-md:flex-col max-md:h-auto">
                <HairLossOption
                  icon={<TemplesCrownSvg />}
                  label="Temples/Crown"
                  onClick={() => handleSelect(2)}
                  isSelected={selected === 2}
                />
                <HairLossOption
                  icon={<CompletelyBaldSvg />}
                  label="Completely bald"
                  onClick={() => handleSelect(3)}
                  isSelected={selected === 3}
                />
              </div>
            </div>

            {selected !== null && hasSavedValue && !hasClicked && (
              <button
                onClick={handleContinue}
                className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
              >
                <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Continue</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
