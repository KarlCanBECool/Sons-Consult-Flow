import imgFrame147 from "figma:asset/fbc90d1f0c54c12f805fa6ac75bc9741b62df7ea.png";

function Frame4() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[44px]">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-[-29.58%] max-w-none size-[173.27%] top-[-2.67%]" src={imgFrame147} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c1ff50] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        Need advice?
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <Frame2 />
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[0] relative shrink-0 text-[#25272a] text-[0px] text-[16px] tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        <span className="decoration-solid leading-[20px] underline" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
          hello@sons.co.uk
        </span>
        <span className="leading-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>{` or `}</span>
        <span className="decoration-solid leading-[20px] underline" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
          02081542524
        </span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex gap-[16px] items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame4 />
      <Frame1 />
    </div>
  );
}