import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgImage from "figma:asset/c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";

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
          {/* Animated quote text */}
          <div className="relative" style={{ minHeight: 80 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="font-['Aeroport:Bold',sans-serif] leading-[40px] not-italic text-[36px] text-black text-center tracking-[-1.4px] max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]"
              >
                {quotes[quoteIndex].lines.map((line, i) => (
                  <p key={i} className={i < quotes[quoteIndex].lines.length - 1 ? "mb-0" : ""}>
                    {line}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Doctor callout pill — below the quote */}
          <div className="bg-[#f7f7f7] content-stretch flex gap-[12px] items-center mt-[16px] p-[8px] rounded-[9999px] w-[228px]">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]">
              <div className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#bdbdbd] inset-0 rounded-[9999px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
                  <img
                    alt=""
                    className="absolute left-[-9.61%] max-w-none size-[127.28%] top-[-0.54%]"
                    src={imgImage}
                  />
                </div>
              </div>
            </div>
            <div className="font-['Aeroport:Light',sans-serif] leading-[18px] not-italic shrink-0 text-[14px] text-black tracking-[-0.3px] whitespace-nowrap">
              <p className="mb-0">Dr. Knut A. Moe,</p>
              <p>Sons Medical Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}