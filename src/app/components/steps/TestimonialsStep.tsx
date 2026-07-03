import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { useIsMobile } from "../../hooks/useIsMobile";
import svgPaths from "../../../imports/svg-tahh2rke1n";
import { DoctorReference } from "../DoctorReference";
import { StepScrollLayout } from "../StepScrollLayout";
import imgFrame35 from "figma:asset/a29e8b5db0884e8867d35bcde7948c7eeff82a76.png";
import imgFrame36 from "figma:asset/41d238c3700ad59cde94a49c0ed2e60aa7e5aa36.png";
import imgImage2 from "figma:asset/5bac27e572fd372bba54aee0dccad7c545e321cb.png";
import imgImage3 from "figma:asset/42a03b40d223891dbc213f6f7979529bfe0c265d.png";
import imgFrame37 from "figma:asset/4e4d0d0bf246da18b24c57f082c2a28f386b2c4d.png";
import imgFrame38 from "figma:asset/465ad17e94594117de1a365a5c28c47053801b2f.png";
import imgFrame39 from "figma:asset/fa8f28b1d315bffb8f551d8ed078ff0a2f5369ec.png";
import imgFrame40 from "figma:asset/3a29ccca017a2131012d478909eb78f0d69a919d.png";

interface TestimonialsStepProps {
  onNext: () => void;
}

const testimonials = [
  {
    name: "Wayne", age: 28,
    treatment: "Oral Tablet, Minoxidil 5%",
    duration: "10 month results",
    beforeImg: imgFrame35, afterImg: imgFrame36,
    productImg: imgImage3,
  },
  {
    name: "James", age: 28,
    treatment: "Oral Tablet, Minoxidil 5%, Shampoo, Biotin",
    duration: "10 month result",
    beforeImg: imgFrame37, afterImg: imgFrame38,
    productImg: imgImage2,
  },
  {
    name: "Steve", age: 43,
    treatment: "Oral Tablet, Minoxidil 5%",
    duration: "9 month result",
    beforeImg: imgFrame39, afterImg: imgFrame40,
    productImg: imgImage3,
  },
];

function ShieldCheckSmall() {
  return (
    <div className="relative shrink-0 size-[11.2px]">
      <div className="absolute inset-[15.63%_12.5%_6.26%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 8.74943">
          <path d={svgPaths.p56289e0} fill="#18900D" />
        </svg>
      </div>
    </div>
  );
}

function ShieldCheckLarge() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[15.63%_12.5%_6.26%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.4992">
          <path d={svgPaths.p2d94f180} fill="#18900D" />
        </svg>
      </div>
    </div>
  );
}

function SmallCard({ beforeImg, afterImg, name, age, treatment, duration, productImg }: {
  beforeImg: string; afterImg: string; name: string; age: number;
  treatment: string; duration: string; productImg: string;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16.8px] items-start justify-end pb-[22.4px] pt-[11.2px] px-[11.2px] relative rounded-[32px] shrink-0 w-[364px]">
      <div className="content-stretch flex gap-[11.2px] items-center relative shrink-0 w-full">
        <div className="aspect-square flex-1 min-w-0 relative rounded-[5.488px] overflow-hidden">
          <img alt="Before" className="absolute inset-0 w-full h-full object-cover" src={beforeImg} />
          <div className="absolute bottom-[2.744px] left-[2.744px]">
            <div className="bg-[rgba(255,255,255,0.1)] flex h-[19.6px] items-center justify-center px-[8.4px] rounded-[9999px]">
              <p className="font-['Aeroport:Bold',sans-serif] text-[12px] text-white tracking-[-0.3px] whitespace-nowrap">Before</p>
            </div>
          </div>
        </div>
        <div className="aspect-square flex-1 min-w-0 relative rounded-[5.488px] overflow-hidden">
          <img alt="After" className="absolute inset-0 w-full h-full object-cover" src={afterImg} />
          <div className="absolute bottom-[2.744px] left-[2.744px]">
            <div className="bg-[rgba(255,255,255,0.1)] flex h-[19.6px] items-center justify-center px-[8.4px] rounded-[9999px]">
              <p className="font-['Aeroport:Bold',sans-serif] text-[12px] text-white tracking-[-0.3px] whitespace-nowrap">After</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full px-[5.6px]">
        <div className="flex items-center gap-[2.8px] flex-wrap w-full">
          <div className="flex gap-[5.6px] items-center w-full">
            <div className="flex-1 min-w-0 flex flex-col gap-[5.6px]">
              <div className="flex gap-[2.8px] items-center text-[#25272a] text-[14px] tracking-[-0.42px] whitespace-nowrap">
                <p className="font-['Aeroport:Bold',sans-serif]">{name}</p>
                <p className="font-['Aeroport:Bold',sans-serif]">({age})</p>
              </div>
              <p className="font-['Aeroport:Light',sans-serif] leading-[14px] text-[#25272a] text-[11.2px] tracking-[-0.3px]">{treatment}</p>
              <p className="font-['Aeroport:Light',sans-serif] leading-[14px] text-[rgba(0,0,0,0.6)] text-[11.2px] tracking-[-0.3px]">{duration}</p>
            </div>
            <div className="h-[50.4px] relative shrink-0 w-[86.1px] overflow-hidden">
              <img alt="Product" className="absolute h-[153.57%] left-[0.23%] max-w-none top-[-42.07%] w-full object-contain" src={productImg} />
            </div>
          </div>
        </div>
        <div className="flex gap-[2.8px] items-center">
          <ShieldCheckSmall />
          <p className="font-['Aeroport:Light',sans-serif] text-[#18900d] text-[9.8px] tracking-[-0.3px] whitespace-nowrap">Verified Review</p>
        </div>
      </div>
    </div>
  );
}

function LargeCard({ beforeImg, afterImg, name, age, treatment, duration, productImg }: {
  beforeImg: string; afterImg: string; name: string; age: number;
  treatment: string; duration: string; productImg: string;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end pb-[32px] pt-[16px] px-[16px] relative rounded-[32px] shrink-0 w-[520px] max-md:w-[300px]">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <div className="aspect-square flex-1 min-w-0 relative rounded-[16px] overflow-hidden">
          <img alt="Before" className="absolute inset-0 w-full h-full object-cover" src={beforeImg} />
          <div className="absolute bottom-[8px] left-[8px]">
            <div className="bg-[rgba(255,255,255,0.1)] flex h-[28px] items-center justify-center px-[12px] rounded-[9999px]">
              <p className="font-['Aeroport:Bold',sans-serif] text-[12px] text-white tracking-[-0.3px] whitespace-nowrap">Before</p>
            </div>
          </div>
        </div>
        <div className="aspect-square flex-1 min-w-0 relative rounded-[16px] overflow-hidden">
          <img alt="After" className="absolute inset-0 w-full h-full object-cover" src={afterImg} />
          <div className="absolute bottom-[8px] left-[8px]">
            <div className="bg-[rgba(255,255,255,0.1)] flex h-[28px] items-center justify-center px-[12px] rounded-[9999px]">
              <p className="font-['Aeroport:Bold',sans-serif] text-[12px] text-white tracking-[-0.3px] whitespace-nowrap">After</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full px-[8px]">
        <div className="flex gap-[16px] items-center w-full">
          <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
            <div className="flex gap-[4px] items-center text-[#25272a] text-[20px] tracking-[-0.6px] whitespace-nowrap">
              <p className="font-['Aeroport:Bold',sans-serif]">{name}</p>
              <p className="font-['Aeroport:Bold',sans-serif]">({age})</p>
            </div>
            <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[#25272a] text-[16px] tracking-[-0.3px]">{treatment}</p>
            <p className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[rgba(0,0,0,0.6)] text-[16px] tracking-[-0.3px]">{duration}</p>
          </div>
          <div className="h-[72px] relative shrink-0 w-[123px] overflow-hidden max-md:hidden">
            <img alt="Product" className="absolute inset-0 w-full h-full object-contain" src={productImg} />
          </div>
        </div>
        <div className="flex gap-[4px] items-center">
          <ShieldCheckLarge />
          <p className="font-['Aeroport:Light',sans-serif] text-[#18900d] text-[14px] tracking-[-0.3px] whitespace-nowrap">Verified Review</p>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0012 21.0052">
      <path d={svgPaths.p2d947a00} fill="white" />
    </svg>
  );
}

// x values: visual center of side cards is ±440px from container center
// gap between center card edge (±260px) and side card edge (±(440-156)=±284px) = 24px
function getCardTarget(cardIdx: number, activeIdx: number): { x: number; scale: number } {
  const leftIdx = (activeIdx - 1 + 3) % 3;
  if (cardIdx === activeIdx) return { x: 0, scale: 1 };
  if (cardIdx === leftIdx) return { x: -440, scale: 0.6 };
  return { x: 440, scale: 0.6 };
}

export function TestimonialsStep({ onNext }: TestimonialsStepProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const prevActiveRef = useRef(1);
  const isMobile = useIsMobile();
  const touchStartX = useRef(0);

  // Mobile: 300px card (half=150), side x ±278. Desktop: 520px card (half=260), side x ±440
  const CARD_HALF = isMobile ? 150 : 260;
  const SIDE_X = isMobile ? 256 : 440;

  const ARROW_EDGE_INSET = 16;
  const DESKTOP_ARROW_OFFSET = 620;
  const MOBILE_ARROW_OFFSET = 192;
  const arrowOffset = isMobile ? MOBILE_ARROW_OFFSET : DESKTOP_ARROW_OFFSET;
  const arrowInset = `max(${ARROW_EDGE_INSET}px, calc(50% - ${arrowOffset}px))`;

  const goPrev = () => {
    prevActiveRef.current = activeIndex;
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };
  const goNext = () => {
    prevActiveRef.current = activeIndex;
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) goNext();
    else if (delta < -40) goPrev();
  };

  // The card that's neither the old nor new center jumps sides — snap it instantly behind everything
  const teleportIdx = [0, 1, 2].find(
    (i) => i !== activeIndex && i !== prevActiveRef.current
  ) ?? -1;

  function getMobileCardTarget(cardIdx: number, activeIdx: number): { x: number; scale: number } {
    const leftIdx = (activeIdx - 1 + 3) % 3;
    if (cardIdx === activeIdx) return { x: 0, scale: 1 };
    if (cardIdx === leftIdx) return { x: -SIDE_X, scale: 0.6 };
    return { x: SIDE_X, scale: 0.6 };
  }

  return (
    <StepScrollLayout className="min-h-full max-md:min-h-0 justify-center max-md:justify-start gap-[40px]">
      {/* Header — constrained to 600px */}
      <div className="flex flex-col gap-[24px] items-center w-full max-w-[600px] px-[40px] max-md:px-0">
            <DoctorReference />
            <p className="font-['Aeroport:Bold',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#25272a] text-[28px] text-center tracking-[-1.4px] w-[min-content] max-md:text-[24px] max-md:tracking-[-1.08px]">
              <span className="leading-[34px] max-md:leading-[28px]">{`We've helped 400,000 men like you `}</span>
              <span className="leading-[34px] max-md:leading-[28px] text-[#4300dd]">stop hair loss</span>
              <span className="leading-[34px] max-md:leading-[28px]">{` and `}</span>
              <span className="leading-[34px] max-md:leading-[28px] text-[#4300dd]">regrow hair</span>
            </p>
          </div>

          {/* Carousel — full viewport width */}
          <div className="flex flex-col gap-[24px] items-center w-full max-md:gap-[16px]">
            <div className="relative w-full flex items-center justify-center max-md:px-0">
              {/* Left arrow — desktop: outer edge of left card; compact: clamped to viewport edge */}
              <button
                onClick={goPrev}
                className="absolute top-1/2 -translate-y-1/2 z-20 bg-[#4300dd] drop-shadow-[0px_8px_8px_rgba(29,29,29,0.2)] rounded-[9999px] size-[48px] flex items-center justify-center border-none cursor-pointer hover:bg-[#3600b3] transition-colors shrink-0"
                style={{ left: arrowInset }}
              >
                <div className="relative size-[20px]">
                  <ArrowLeft />
                </div>
              </button>

              {/* Individually animated cards — each moves independently */}
              <div
                className="relative w-full"
                style={{ overflow: "visible" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Invisible spacer sets container height to match a full-size card */}
                <div style={{ visibility: "hidden", pointerEvents: "none" }}>
                  <LargeCard {...testimonials[0]} />
                </div>
                <div className="absolute inset-0" style={{ overflow: "visible" }}>
                  {testimonials.map((t, i) => {
                    const target = isMobile ? getMobileCardTarget(i, activeIndex) : getCardTarget(i, activeIndex);
                    const { x, scale } = target;
                    const isCenter = i === activeIndex;
                    const isTeleporting = i === teleportIdx;
                    return (
                      <motion.div
                        key={i}
                        initial={{ x, scale }}
                        animate={{ x, scale }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-0"
                        style={{
                          left: "50%",
                          marginLeft: `-${CARD_HALF}px`,
                          zIndex: isCenter ? 10 : isTeleporting ? 0 : 2,
                          transformOrigin: "center center",
                        }}
                      >
                        <LargeCard {...t} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right arrow — desktop: outer edge of right card; compact: clamped to viewport edge */}
              <button
                onClick={goNext}
                className="absolute top-1/2 -translate-y-1/2 z-20 bg-[#4300dd] drop-shadow-[0px_8px_8px_rgba(29,29,29,0.2)] rounded-[9999px] size-[48px] flex items-center justify-center border-none cursor-pointer hover:bg-[#3600b3] transition-colors shrink-0 rotate-180"
                style={{ right: arrowInset }}
              >
                <div className="relative size-[20px]">
                  <ArrowLeft />
                </div>
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-[16px] items-center max-md:mt-[32px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-[9999px] size-[8px] border-none cursor-pointer transition-opacity p-0 ${i === activeIndex ? "bg-[#1d1d1d] opacity-100" : "bg-[#1d1d1d] opacity-20"}`}
                />
              ))}
            </div>
          </div>

          {/* Continue button — constrained to 600px */}
          <div className="w-full max-w-[600px] px-[40px] max-md:px-0">
            {/* Continue button */}
            <button
              onClick={onNext}
              className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
            >
              <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Continue</p>
            </button>
          </div>
    </StepScrollLayout>
  );
}
