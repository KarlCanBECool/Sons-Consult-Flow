import React, { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import svgPaths from "../../imports/TooltipIcon/svg-6lii3gond7";

interface TooltipIconProps {
  title: string;
  description: string;
}

const TOOLTIP_WIDTH = 393;

export function TooltipIcon({ title, description }: TooltipIconProps) {
  const [hovered, setHovered] = useState(false);
  const iconRef = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ bottom: 0, left: 0, notchLeft: 189 });

  const handleMouseEnter = useCallback(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const rawLeft = rect.left - 189;
      // Clamp so tooltip stays within viewport with 8px margin
      const clampedLeft = Math.min(
        Math.max(rawLeft, 8),
        window.innerWidth - TOOLTIP_WIDTH - 8
      );
      // Notch stays centred on icon even when tooltip shifts
      const notchLeft = rect.left + 8 - clampedLeft;
      setPos({
        bottom: window.innerHeight - rect.top + 4,
        left: clampedLeft,
        notchLeft,
      });
    }
    setHovered(true);
  }, []);

  const tooltip = hovered
    ? createPortal(
        <motion.div
          className="fixed flex flex-col pointer-events-none"
          style={{ bottom: pos.bottom, left: pos.left, width: TOOLTIP_WIDTH, zIndex: 9999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Tooltip box */}
          <div className="bg-[#1d1d1d] rounded-[8px] p-[16px] flex flex-col gap-[4px]">
            <p className="font-['Aeroport:Bold',sans-serif] not-italic text-white text-[14px] leading-[18px] tracking-[-0.3px] w-[345px]">
              {title}
            </p>
            <p className="font-['Aeroport:Light',sans-serif] not-italic text-white text-[14px] leading-[18px] tracking-[-0.3px] w-[345px]">
              {description}
            </p>
          </div>
          {/* Downward-pointing triangle — dynamically centred on icon */}
          <div
            className="flex h-[8px] items-center justify-center"
            style={{ marginLeft: pos.notchLeft - 8, width: 16 }}
          >
            <div className="rotate-180">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M8 0L16 8H0L8 0Z" fill="#1D1D1D" />
              </svg>
            </div>
          </div>
        </motion.div>,
        document.body
      )
    : null;

  return (
    <>
      {/* Touch target is 40×40px on mobile; icon remains 16×16 visually */}
      <span
        ref={iconRef}
        className="relative inline-flex shrink-0 size-[16px] cursor-default max-md:size-[40px] max-md:-m-[12px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleMouseEnter}
        onTouchEnd={() => setTimeout(() => setHovered(false), 2000)}
      >
        <svg
          className="absolute block size-[16px] inset-0 max-md:inset-[12px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.pc002300}
            fill={hovered ? "#373737" : "#1D1D1D"}
          />
        </svg>
      </span>
      {tooltip}
    </>
  );
}
