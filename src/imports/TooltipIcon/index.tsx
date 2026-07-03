import svgPaths from "./svg-6lii3gond7";
type TooltipIconProps = {
  className?: string;
  state?: "Default" | "Hover";
};

export default function TooltipIcon({ className, state = "Hover" }: TooltipIconProps) {
  const isDefault = state === "Default";
  const isHover = state === "Hover";
  return (
    <div className={className || `relative ${isDefault ? "size-[16px]" : "content-stretch flex gap-px items-center"}`}>
      {isHover && (
        <>
          <div className="absolute bottom-[20px] content-stretch flex flex-col gap-px h-[80px] items-center left-[-189px] p-px right-[-188px]" data-name="tooltip">
            <div className="-translate-x-1/2 absolute bottom-0 flex h-[8px] items-center justify-center left-[calc(50%+0.5px)] w-[16px]">
              <div className="flex-none rotate-180">
                <div className="h-[8px] relative w-[16px]" data-name="triangle">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                    <path d="M8 0L16 8H0L8 0Z" fill="var(--fill-0, #1D1D1D)" id="triangle" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute bg-[#1d1d1d] bottom-[8px] content-stretch flex flex-col gap-[4px] items-center justify-end leading-[18px] left-0 not-italic overflow-clip p-[16px] right-0 rounded-[8px] text-[14px] text-white tracking-[-0.3px]" data-name="tooltipContainer">
              <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 w-[345px]">Title</p>
              <p className="font-['Aeroport:Light',sans-serif] relative shrink-0 w-[345px]">Description</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pc002300} fill="var(--fill-0, #373737)" id="Subtract" />
            </svg>
          </div>
        </>
      )}
      {isDefault && (
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.pc002300} fill="var(--fill-0, #1D1D1D)" id="Subtract" />
        </svg>
      )}
    </div>
  );
}