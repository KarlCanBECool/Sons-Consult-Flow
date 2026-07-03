import React from "react";

interface StepScrollLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared scroll container + page padding for step screens.
 * Mobile pt-[112px] clears the fixed back button (Root.tsx top-[104px] + 40px height).
 */
export function StepScrollLayout({ children, className = "" }: StepScrollLayoutProps) {
  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div
          className={`flex flex-col items-center px-px py-page-py max-md:items-start max-md:justify-start max-md:py-0 max-md:pt-page-pt-mobile max-md:pb-page-pb-mobile max-md:px-page-gutter relative w-full ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
