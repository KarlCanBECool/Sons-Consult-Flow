import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DoctorReference } from "../DoctorReference";

interface WelcomeStepProps {
  onNext: () => void;
}

const quotes = [
  {
    lines: ["Hair loss affects men of all ages.", "You are not alone."],
  },
  {
    lines: [
      "Sons is proven to help men take control and",
      "give them back their confidence.",
    ],
  },
];

const QUOTE_DELAY = 3000;

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (quoteIndex < quotes.length - 1) {
        setQuoteIndex((prev) => prev + 1);
      } else {
        onNext();
      }
    }, QUOTE_DELAY);

    return () => clearTimeout(timer);
  }, [quoteIndex, onNext]);

  const handleClick = useCallback(() => {
    if (quoteIndex < quotes.length - 1) {
      setQuoteIndex((prev) => prev + 1);
    } else {
      onNext();
    }
  }, [quoteIndex, onNext]);

  return (
    <div className="flex-1 relative w-full cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col items-center justify-center overflow-clip size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-px relative size-full max-md:px-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <DoctorReference />

            <div className="relative" style={{ minHeight: 80 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="font-['Aeroport:Bold',sans-serif] leading-[42px] not-italic text-[40px] text-[#1d1d1d] text-center tracking-[-2px] max-w-[840px] max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]"
                >
                  {quotes[quoteIndex].lines.map((line, i) => (
                    <p key={i} className={i < quotes[quoteIndex].lines.length - 1 ? "mb-0" : ""}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
