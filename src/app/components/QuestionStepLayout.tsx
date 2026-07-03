import React from "react";
import { StepScrollLayout } from "./StepScrollLayout";

interface QuestionStepLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function QuestionStepLayout({ children, footer }: QuestionStepLayoutProps) {
  return (
    <StepScrollLayout className="min-h-full max-md:min-h-0 justify-center max-md:justify-start">
      <div className="flex flex-1 flex-col items-center justify-center w-[624px] max-md:w-full max-md:flex-none">
        <div className="flex flex-col gap-[24px] w-[550px] max-md:w-full">
          {children}
          {footer}
        </div>
      </div>
    </StepScrollLayout>
  );
}
