import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../../imports/svg-rnn197zyoa";
import imgDoctor from "figma:asset/c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";

interface LoadingStepProps {
  onNext: () => void;
}

function LogoWhiteLarge() {
  return (
    <div className="h-[63px] overflow-clip relative shrink-0 w-[44px]">
      <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5051 62.4285">
          <path d="M21.2553 62.4285V41.7645H42.501C42.501 32.8185 36.0896 22.8645 23.8953 20.8485H42.501C42.7525 8.37446 31.1868 -0.823536 21.2553 0.058464V20.9745H0.00961799C-0.241811 28.4085 4.40962 38.4885 17.1068 41.6385H0.386761C-0.241811 52.6005 9.68962 62.3025 21.2553 62.3025V62.4285Z" fill="#F7F7F7" />
        </svg>
      </div>
    </div>
  );
}

function RegrowIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p837ce80} fill="#517415" />
          <path d={svgPaths.p27e64900} fill="#517415" />
          <path d={svgPaths.p1240acf0} fill="#517415" />
          <path d={svgPaths.p3ff73c40} fill="#517415" />
        </svg>
      </div>
    </div>
  );
}

function LightningIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2312 19.1816">
          <path d={svgPaths.pe3f8700} fill="#517415" />
        </svg>
      </div>
    </div>
  );
}

function ProhibitIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.85 14.85">
          <path d={svgPaths.p206fa880} fill="#517415" />
        </svg>
      </div>
    </div>
  );
}

const GOALS = [
  { id: "regrow", label: "Regrow hair", icon: <RegrowIcon /> },
  { id: "confidence", label: "Gain confidence", icon: <LightningIcon /> },
  { id: "stop", label: "Stop hair loss", icon: <ProhibitIcon /> },
];

const POSITION_WIDTHS = [360, 420, 300];
const POSITION_OPACITY = [0.7, 1, 0.5];

export function LoadingStep({ onNext }: LoadingStepProps) {
  const [tick, setTick] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 8000);
    return () => clearTimeout(timer);
  }, [onNext]);

  // Mark entrance complete after staggered fade-in
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // Rotate infinitely once entered
  useEffect(() => {
    if (!entered) return;
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 1400);
    return () => clearInterval(interval);
  }, [entered]);

  // Derive visible cards: 3 cards starting from tick index
  const visibleCards = [0, 1, 2].map((offset) => {
    const goalIndex = (tick + offset) % GOALS.length;
    return {
      ...GOALS[goalIndex],
      instanceKey: `${GOALS[goalIndex].id}-${tick + offset}`,
    };
  });

  return (
    <div className="bg-[#25272a] flex-1 relative w-full min-h-0">
      <div className="flex flex-col items-center justify-center overflow-clip size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-px relative size-full">
          {/* Logo and text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0"
          >
            <div className="flex gap-[8px] items-center">
              <LogoWhiteLarge />
              <div className="relative rounded-[9999px] shrink-0 size-[40px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                  <div className="absolute bg-[#bdbdbd] inset-0 rounded-[9999px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
                    <img alt="" className="absolute left-[-9.61%] max-w-none size-[127.28%] top-[-0.54%]" src={imgDoctor} />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-['Aeroport:Bold',sans-serif] leading-[34px] relative shrink-0 text-[#f7f7f7] text-[28px] text-center tracking-[-1.4px] whitespace-pre">
              <p className="mb-0">We're putting together your </p>
              <p>personalised plan</p>
            </div>
          </motion.div>

          {/* Goals - infinite vertical scroll */}
          <div className="flex flex-col gap-[16px] items-center relative shrink-0 overflow-hidden" style={{ height: 200 }}>
            <AnimatePresence mode="popLayout">
              {visibleCards.map((card, position) => (
                <motion.div
                  key={card.instanceKey}
                  layout
                  initial={entered ? { y: 80, opacity: 0 } : { y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: POSITION_OPACITY[position],
                    width: POSITION_WIDTHS[position],
                  }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{
                    layout: { duration: 0.5, ease: "easeInOut" },
                    y: { delay: entered ? 0 : position * 0.4, duration: 0.5, ease: "easeInOut" },
                    opacity: { delay: entered ? 0 : position * 0.4, duration: 0.4, ease: "easeInOut" },
                    width: { duration: 0.5, ease: "easeInOut" },
                  }}
                  className="bg-[#ebfad1] flex gap-[12px] h-[56px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[16px] shrink-0"
                >
                  <div className="bg-[#bdf757] h-full relative rounded-[12px] shrink-0">
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex h-full items-center justify-center p-[8px] relative">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.3px] whitespace-nowrap">{card.label}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}