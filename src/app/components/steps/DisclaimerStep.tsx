import React, { useState } from "react";
import { FormButtonExpand } from "../FormButtonExpand";
import { QuestionStepLayout } from "../QuestionStepLayout";

interface DisclaimerStepProps {
  onNext: () => void;
}

const FINASTERIDE_DISCLAIMER =
  "It's important to be aware that if you experience any side effects, please stop taking the treatments and speak to your doctor as soon as possible. Finasteride can very rarely cause changes in mood, including depression, or changes in sexual function. These effects usually resolve after stopping treatment, and your doctor can explore other options to support your hair loss goals.";

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
  const [expandedNhs, setExpandedNhs] = useState(false);
  const [expandedGp, setExpandedGp] = useState(false);
  const [nhsAgreed, setNhsAgreed] = useState(false);
  const [gpAgreed, setGpAgreed] = useState(false);

  return (
    <QuestionStepLayout
      footer={
        <button
          onClick={onNext}
          disabled={!confirmed}
          className={`content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] w-full border-none transition-colors ${
            confirmed ? "bg-[#4300dd] cursor-pointer hover:bg-[#3600b3]" : "bg-[#4300dd] opacity-50 cursor-not-allowed"
          }`}
        >
          <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">
            Continue
          </p>
        </button>
      }
    >
      <div className="flex flex-col gap-[16px] items-start w-full">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] text-[28px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]">
          Please confirm that you've read and understood the following:
        </p>
        <p className="font-['Aeroport:Light',sans-serif] leading-[0] text-[16px] tracking-[-0.3px] w-full">
          <span className="leading-[28px]">{FINASTERIDE_DISCLAIMER} </span>
          <span className="leading-[28px] text-[#4300dd] cursor-pointer hover:underline">Read more</span>
        </p>
      </div>

      <div className="bg-[#f7f7f7] content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[12px] w-full min-h-[72px]">
        <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic relative text-[16px] text-black tracking-[-0.3px]">
          I confirm
        </p>
        <Checkbox checked={confirmed} onClick={() => setConfirmed(!confirmed)} />
      </div>

      <div className="flex flex-col gap-[16px] w-full">
        <FormButtonExpand
          label="NHS Summary of Care"
          description={
            <>
              {FINASTERIDE_DISCLAIMER}{" "}
              <span className="text-[#4300dd] cursor-pointer hover:underline">Read more</span>
            </>
          }
          checkboxLabel="I Agree"
          isExpanded={expandedNhs}
          isChecked={nhsAgreed}
          onToggleExpand={() => setExpandedNhs(!expandedNhs)}
          onToggleCheck={() => setNhsAgreed(!nhsAgreed)}
        />
        <FormButtonExpand
          label="GP Consent"
          description="Do you consent to us sharing consultation information with your GP?"
          checkboxLabel="I agree"
          isExpanded={expandedGp}
          isChecked={gpAgreed}
          onToggleExpand={() => setExpandedGp(!expandedGp)}
          onToggleCheck={() => setGpAgreed(!gpAgreed)}
        />
      </div>
    </QuestionStepLayout>
  );
}
