import React, { useState } from "react";
import svgPaths from "../../imports/svg-tahh2rke1n";
import { ShoppingCart } from "lucide-react";

interface NavigationBarProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  showBack?: boolean;
  onSectionClick?: (section: string) => void;
  onRestartFlow?: () => void;
  cartCount?: number;
}

function IconWhite() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-[35px] max-md:h-[40px] max-md:w-[28px]">
      <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8109 49.5464">
          <path d={svgPaths.p306b9c80} fill="#F7F7F7" />
        </svg>
      </div>
    </div>
  );
}

function YouLabel({ completed }: { completed: boolean }) {
  if (completed) {
    return (
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
        <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(247,247,247,0.6)] tracking-[-0.3px] whitespace-nowrap">You</p>
        <div className="opacity-60 relative shrink-0 size-[16px]">
          <div className="absolute bottom-[18.75%] left-[12.5%] right-[9.37%] top-1/4">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5006 9.00067">
              <path d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z" fill="#F7F7F7" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.3px] whitespace-nowrap max-md:text-[14px] max-md:leading-[18px]">You</p>
  );
}

function ProgressSection({ label, progress, completed, onClick }: { label: string; progress: number; completed?: boolean; onClick?: () => void }) {
  const isActive = progress > 0;
  const isClickable = !!onClick;
  const isYou = label === "You";
  const showCompleted = !!completed && progress >= 100;
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
        {showCompleted ? (
          <div
            className={`content-stretch flex gap-[4px] items-start relative shrink-0 max-md:gap-[2px] ${isClickable ? "cursor-pointer" : ""}`}
            onClick={onClick}
          >
            <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(247,247,247,0.6)] tracking-[-0.3px] whitespace-nowrap max-md:text-[14px] max-md:leading-[18px]">{label}</p>
            <div className="opacity-60 relative shrink-0 size-[16px]">
              <div className="absolute bottom-[18.75%] left-[12.5%] right-[9.37%] top-1/4">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5006 9.00067">
                  <path d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <p
            className={`font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px] whitespace-nowrap max-md:text-[14px] max-md:leading-[18px] ${
              isActive ? "text-[#f7f7f7]" : "text-[rgba(255,255,255,0.6)]"
            } ${isClickable ? "cursor-pointer" : ""}`}
            onClick={onClick}
          >
            {label}
          </p>
        )}
        <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full">
          <div
            className={`h-[4px] rounded-br-[999px] rounded-tr-[999px] shrink-0 transition-all duration-500 ease-out ${
              progress >= 100 ? "bg-[#f7f7f7]" : "bg-gradient-to-r from-white to-[rgba(255,255,255,0.4)]"
            }`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function NavigationBar({ currentStep, totalSteps, onBack, showBack, onSectionClick, onRestartFlow, cartCount = 0 }: NavigationBarProps) {
  const [showExitModal, setShowExitModal] = useState(false);

  // Steps 0-11 are "You" section, steps 12 is form, steps 13-15 are plan
  const youCompleted = currentStep >= 12;
  const youProgress = currentStep <= 0 ? 15 : currentStep <= 11 ? ((currentStep + 1) / 12) * 100 : 100;
  const planProgress = currentStep <= 11 ? 0 : currentStep <= 13 ? ((currentStep - 11) / 2) * 100 : 100;

  // Determine if we're on the plan screen or beyond (simplified nav)
  const isSimplifiedNav = currentStep >= 13;

  return (
    <>
      <div className="sticky top-0 z-50 relative shrink-0 w-full">
        <div className="bg-[#25272a] content-stretch flex h-[100px] items-center overflow-clip px-nav-gutter py-[25px] relative shrink-0 w-full max-md:h-auto max-md:px-page-gutter max-md:py-[16px]">
          <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px min-w-px relative max-md:gap-[24px]">
            <IconWhite />
            {isSimplifiedNav ? (
              <div className="flex-1" />
            ) : (
              <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative max-md:gap-[16px]">
                <ProgressSection label="You" progress={youProgress} completed={youCompleted} />
                <ProgressSection label="Your plan" progress={planProgress} completed={currentStep >= 14} onClick={() => onSectionClick?.("plan")} />
              </div>
            )}
            <div className="flex items-center gap-[16px]">
              {isSimplifiedNav && (
                <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                  <ShoppingCart className="size-[24px] text-[#f7f7f7] opacity-60" />
                  <div className="absolute -top-[6px] -right-[8px] bg-[#4300dd] rounded-full size-[18px] flex items-center justify-center">
                    <span className="font-['Aeroport:Bold',sans-serif] text-[10px] text-white leading-none">{cartCount}</span>
                  </div>
                </div>
              )}
              <div
                className="opacity-30 relative shrink-0 size-[32px] cursor-pointer hover:opacity-50 transition-opacity"
                onClick={() => setShowExitModal(true)}
              >
                <div className="absolute inset-[17.17%_17.18%_17.18%_17.18%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0077 21.009">
                    <path d={svgPaths.p299d600} fill="#E6E6E6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowExitModal(false)} />
          <div className="relative bg-white rounded-[24px] overflow-hidden pb-[24px] pt-[40px] px-[40px] max-w-[500px] w-full mx-[24px] flex flex-col gap-[24px]">
            {/* Text */}
            <div className="flex flex-col gap-[16px] items-start w-full text-[#1d1d1d]">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] text-[28px] tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]">
                Are you sure you want to leave?
              </p>
              <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] tracking-[-0.3px] w-full">
                Your consultation progress will be lost if you leave now.
              </p>
            </div>
            {/* Button group */}
            <div className="flex gap-[24px] items-center justify-end w-full">
              <button
                onClick={() => {
                  setShowExitModal(false);
                  onRestartFlow?.();
                }}
                className="h-[52px] px-[32px] py-[16px] rounded-[9999px] border-none bg-transparent cursor-pointer font-['Aeroport:Bold',sans-serif] text-[18px] text-[#373737] tracking-[-0.4px] hover:bg-[#f0f0f0] transition-colors"
              >
                Leave
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="bg-[#4000e6] h-[52px] px-[32px] py-[16px] rounded-[9999px] border-none cursor-pointer font-['Aeroport:Bold',sans-serif] text-[18px] text-white tracking-[-0.4px] hover:bg-[#3300c4] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}