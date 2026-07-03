import svgPaths from "./svg-6r2exti0o1";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[18px] relative shrink-0 text-[#25272a] text-[14px] tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        Need some time to think about it?
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame1 />
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[18px] relative shrink-0 text-[#25272a] text-[14px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        We get it! To keep your details and plan handy for your return, quickly create an account.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#25272a] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[9999px] shrink-0 size-[44px]">
      <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
        <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7532 15.7548">
            <path d={svgPaths.p3f6c2200} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d7d7d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
      <Frame2 />
    </div>
  );
}