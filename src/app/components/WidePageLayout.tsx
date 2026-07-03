import React from "react";

interface WidePageLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** Optional inline back control (e.g. Checkout where Root hides global back). */
  backButton?: React.ReactNode;
}

/**
 * Shared scroll container + padding for Plan, Review, and Checkout screens.
 * Uses layout tokens from layout-tokens.css.
 */
export function WidePageLayout({ children, className = "", backButton }: WidePageLayoutProps) {
  return (
    <div className="flex-1 relative w-full min-h-0">
      <div className="overflow-y-auto size-full">
        <div
          className={`relative flex flex-col items-center w-full py-page-py px-page-gutter-wide max-lg:px-page-gutter max-lg:py-page-py-tablet ${className}`}
        >
          {backButton}
          {children}
        </div>
      </div>
    </div>
  );
}
