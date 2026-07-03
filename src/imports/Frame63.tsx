import svgPaths from "./svg-09in48knph";
import imgImage1 from "figma:asset/fe7363372aff256d6d7e8aa3f606826413f7d4d0.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subscription</p>
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        £189.00
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subtotal</p>
      <p className="font-['Aeroport:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        £189.00
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Shipping</p>
      <p className="font-['Aeroport:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        £0
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[20px] relative shrink-0 tracking-[-0.3px] w-full whitespace-nowrap">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#25272a] w-full">
      <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[22px] tracking-[-1.2px] w-full">Order overview</p>
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between leading-[20px] min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px] whitespace-nowrap">
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        SONSNEW40
      </p>
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        -£75.60
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ebffe6] h-[44px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#34a21f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Frame10 />
          <div className="relative shrink-0 size-[16px]" data-name="X">
            <div className="absolute inset-[18.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0006 10.0006">
                <path d={svgPaths.p2662980} fill="var(--fill-0, #25272A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Aeroport:Medium','Noto_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Discount/Promo
      </p>
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return <div className="bg-[#25272a] h-px opacity-40 shrink-0 w-full" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[#25272a] text-[22px] w-full whitespace-nowrap">
      <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 tracking-[-1.2px]">Total</p>
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 tracking-[-0.3px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        £113.40
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f4eefd] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[80px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgImage1} />
            <div aria-hidden="true" className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
          </div>
          <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[22px] text-black tracking-[-1.2px] w-[min-content]">Money back guarantee</p>
          <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[16px] text-black tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
            Our clinically-backed treatments have been proven to halt hair loss for 94% of men. That’s most guys. However, this does mean that a small few won’t respond to the treatment.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4d4fc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[40px] items-end justify-end pb-[40px] pt-[32px] px-[40px] relative rounded-[24px] size-full">
      <Frame6 />
      <Frame9 />
      <Frame11 />
      <Frame12 />
      <div className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Blue-button">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Checkout</p>
      </div>
      <Frame />
    </div>
  );
}