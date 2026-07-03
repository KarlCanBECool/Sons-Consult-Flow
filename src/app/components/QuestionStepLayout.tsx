import React from "react";

interface QuestionStepLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function QuestionStepLayout({ children, footer }: QuestionStepLayoutProps) {
  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div className="min-h-full flex flex-col items-center justify-center py-[80px] max-md:items-start max-md:justify-start max-md:py-0 max-md:pt-[112px] max-md:pb-[56px] max-md:px-[16px]">
          <div className="flex flex-1 flex-col items-center justify-center w-[624px] max-md:w-full max-md:flex-none">
            <div className="flex flex-col gap-[24px] w-[550px] max-md:w-full">
              {children}
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
