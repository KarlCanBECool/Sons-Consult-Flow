import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface FormButtonExpandProps {
  label: string;
  description: React.ReactNode;
  checkboxLabel: string;
  isExpanded?: boolean;
  isChecked?: boolean;
  onToggleExpand?: () => void;
  onToggleCheck?: () => void;
}

const expandBodyVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

function ExpandIcon() {
  return (
    <svg
      className="block size-[28px] shrink-0 transition-transform duration-300 ease-in-out"
      fill="none"
      viewBox="0 0 28 28"
      aria-hidden="true"
    >
      <path d="M14 7V21M7 14H21" stroke="#343330" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="block size-[28px] shrink-0 transition-transform duration-300 ease-in-out"
      fill="none"
      viewBox="0 0 28 28"
      aria-hidden="true"
    >
      <path d="M7 14H21" stroke="#343330" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CompactCheckbox({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: (event: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-transparent border-none p-0 cursor-pointer shrink-0"
      aria-checked={checked}
      role="checkbox"
    >
      <div
        className={`relative rounded-[8px] shrink-0 size-[24px] transition-colors ${checked ? "bg-[#00b692]" : "bg-[#fdfdff]"}`}
      >
        {!checked && (
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
        )}
        <div className="absolute border-2 border-solid inset-0 rounded-[8px] border-[#00b692]" />
        {checked && (
          <svg className="absolute top-[4px] left-[4px] size-[14px]" fill="none" viewBox="0 0 16 16">
            <path
              d="M2 8L6 12L14 4"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}

export function FormButtonExpand({
  label,
  description,
  checkboxLabel,
  isExpanded = false,
  isChecked = false,
  onToggleExpand,
  onToggleCheck,
}: FormButtonExpandProps) {
  return (
    <div
      className={`bg-[#f7f7f7] content-stretch flex flex-col gap-[12px] px-[24px] py-[16px] relative rounded-[12px] shrink-0 w-full transition-colors ${
        isExpanded ? "" : "hover:bg-[#efefef]"
      }`}
    >
      <button
        type="button"
        onClick={onToggleExpand}
        className="content-stretch flex gap-[8px] items-center bg-transparent border-none p-0 cursor-pointer w-full min-h-[40px]"
        aria-expanded={isExpanded}
      >
        <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic relative text-[16px] text-black tracking-[-0.3px] text-left">
          {label}
        </p>
        {isExpanded ? <CloseIcon /> : <ExpandIcon />}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expand-body"
            initial="closed"
            animate="open"
            exit="closed"
            variants={expandBodyVariants}
            className="overflow-hidden flex flex-col gap-[12px] w-full"
          >
            <div className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[#25272a] tracking-[-0.3px] w-full">
              {description}
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <CompactCheckbox
                checked={isChecked}
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleCheck?.();
                }}
              />
              <p className="flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[20px] min-w-px not-italic relative self-stretch text-black text-[16px] tracking-[-0.3px]">
                {checkboxLabel}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
