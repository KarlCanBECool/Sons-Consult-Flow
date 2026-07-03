import svgPaths from "./svg-a2hfi8t0pv";
import imgImage from "./c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";
import imgBefore from "./a29e8b5db0884e8867d35bcde7948c7eeff82a76.png";
import imgAfter from "./41d238c3700ad59cde94a49c0ed2e60aa7e5aa36.png";
import imgProductImage from "./5bac27e572fd372bba54aee0dccad7c545e321cb.png";
import imgProductImage1 from "./42a03b40d223891dbc213f6f7979529bfe0c265d.png";
import imgBefore1 from "./4e4d0d0bf246da18b24c57f082c2a28f386b2c4d.png";
import imgAfter1 from "./465ad17e94594117de1a365a5c28c47053801b2f.png";
import imgProductImage2 from "./8fca4da4da4e744d3609dd6247d2ab06f6dd4f6f.png";
import imgBefore2 from "./fa8f28b1d315bffb8f551d8ed078ff0a2f5369ec.png";
import imgAfter2 from "./3a29ccca017a2131012d478909eb78f0d69a919d.png";

function Layer() {
  return (
    <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8109 49.5464">
        <g id="Layer_1">
          <path d={svgPaths.p306b9c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0.51%_1.71%_0.4%_1.69%]" data-name="Group">
      <Layer />
    </div>
  );
}

function IconWhite() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-[35px]" data-name="icon_white 1">
      <Group />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="textIcon">
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3px] whitespace-nowrap">You</p>
    </div>
  );
}

function Frame() {
  return <div className="bg-white h-[4px] relative rounded-br-[999px] rounded-tr-[999px] shrink-0 w-[450.5px]" />;
}

function ProgressBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="progressBar">
      <Frame />
    </div>
  );
}

function ProgressBarContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="progressBarContainer">
      <TextIcon />
      <ProgressBar />
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="textIcon">
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(247,247,247,0.6)] tracking-[-0.3px] whitespace-nowrap">Your plan</p>
    </div>
  );
}

function Frame2() {
  return <div className="bg-white h-[4px] relative rounded-br-[999px] rounded-tr-[999px] shrink-0 w-0" />;
}

function ProgressBar1() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="progressBar">
      <Frame2 />
    </div>
  );
}

function ProgressBarContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="progressBarContainer">
      <TextIcon1 />
      <ProgressBar1 />
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="steps">
      <div className="content-stretch flex items-center relative shrink-0 w-[562.5px]" data-name="Step1">
        <ProgressBarContainer />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[562.5px]" data-name="Step2">
        <ProgressBarContainer1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-w-px relative">
      <IconWhite />
      <Steps />
      <div className="opacity-30 relative shrink-0 size-[32px]" data-name="X">
        <div className="absolute inset-[17.17%_17.18%_17.18%_17.18%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0077 21.009">
            <path d={svgPaths.p299d600} fill="var(--fill-0, #E6E6E6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute left-[-9.61%] max-w-none size-[127.28%] top-[-0.54%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
        <Image />
        <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">Dr. Knut A. Moe, Sons Medical Director</p>
      </div>
      <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#1d1d1d] text-[28px] text-center tracking-[-1.4px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        <span className="leading-[34px]">{`We’ve helped 400,000 men like you `}</span>
        <span className="leading-[34px] text-[#4000e6]">stop hair loss</span>
        <span className="leading-[34px]">{` and `}</span>
        <span className="leading-[34px] text-[#4000e6]">regrow hair</span>
      </p>
    </div>
  );
}

function Before() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[5.488px]" data-name="before">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5.488px] size-full" src={imgBefore} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[2.744px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[19.6px] items-center justify-center px-[8.4px] py-[0.7px] relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">Before</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[5.488px]" data-name="after">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5.488px] size-full" src={imgAfter} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[2.744px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[19.6px] items-center justify-center px-[8.4px] py-[0.7px] relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">After</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterImg() {
  return (
    <div className="content-stretch flex gap-[11.2px] items-center relative shrink-0 w-full" data-name="beforeAfterImg">
      <Before />
      <After />
    </div>
  );
}

function NameAge() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] gap-[2.8px] items-center leading-[18.2px] relative shrink-0 text-[#1d1d1d] text-[14px] tracking-[-0.42px] w-full whitespace-nowrap" data-name="nameAge">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        $Name
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        ($Age)
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[2.8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[11.2px]" data-name="ShieldCheck">
        <div className="absolute inset-[15.63%_12.5%_6.26%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 8.74943">
            <path d={svgPaths.p56289e0} fill="var(--fill-0, #18900D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[12.6px] not-italic relative shrink-0 text-[#18900d] text-[9.8px] tracking-[-0.3px] whitespace-nowrap">Verified Review</p>
    </div>
  );
}

function Meta() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.6px] items-start min-w-px relative" data-name="meta">
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[14px] min-w-full relative shrink-0 text-[#1d1d1d] text-[11.2px] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $productList
      </p>
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[14px] min-w-full relative shrink-0 text-[11.2px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $duration
      </p>
      <Frame13 />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="h-[50.4px] relative shrink-0 w-[86.1px]" data-name="productImage">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[171.74%] left-0 max-w-none top-[-54.35%] w-full" src={imgProductImage} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[153.57%] left-[0.23%] max-w-none top-[-42.07%] w-full" src={imgProductImage1} />
        </div>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-start flex flex-wrap gap-[5.599999904632568px_5.6px] items-start relative shrink-0 w-full" data-name="details">
      <Meta />
      <ProductImage />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8.4px] items-start px-[5.6px] relative size-full">
        <NameAge />
        <Details />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[5.6px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Before1() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="before">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBefore1} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[8px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[28px] items-center justify-center px-[12px] py-px relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">Before</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function After1() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="after">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAfter1} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[8px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[28px] items-center justify-center px-[12px] py-px relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">After</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterImg1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="beforeAfterImg">
      <Before1 />
      <After1 />
    </div>
  );
}

function NameAge1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] gap-[4px] items-center leading-[26px] relative shrink-0 text-[#1d1d1d] text-[20px] tracking-[-0.6px] w-full whitespace-nowrap" data-name="nameAge">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        $Name
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        ($Age)
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ShieldCheck">
        <div className="absolute inset-[15.63%_12.5%_6.26%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.4992">
            <path d={svgPaths.p2d94f180} fill="var(--fill-0, #18900D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#18900d] text-[14px] tracking-[-0.3px] whitespace-nowrap">Verified Review</p>
    </div>
  );
}

function Meta1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="meta">
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $productList
      </p>
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $duration
      </p>
      <Frame14 />
    </div>
  );
}

function ProductImage1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[123px]" data-name="productImage">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProductImage2} />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="details">
      <Meta1 />
      <ProductImage1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] relative size-full">
        <NameAge1 />
        <Details1 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[8px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Before2() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[5.488px]" data-name="before">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5.488px] size-full" src={imgBefore2} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[2.744px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[19.6px] items-center justify-center px-[8.4px] py-[0.7px] relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">Before</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function After2() {
  return (
    <div className="aspect-[236/236] flex-[1_0_0] min-w-px relative rounded-[5.488px]" data-name="after">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5.488px] size-full" src={imgAfter2} />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[2.744px] relative size-full">
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[19.6px] items-center justify-center px-[8.4px] py-[0.7px] relative rounded-[9999px] shrink-0" data-name="Tag">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px] whitespace-nowrap">After</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterImg2() {
  return (
    <div className="content-stretch flex gap-[11.2px] items-center relative shrink-0 w-full" data-name="beforeAfterImg">
      <Before2 />
      <After2 />
    </div>
  );
}

function NameAge2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] gap-[2.8px] items-center leading-[18.2px] relative shrink-0 text-[#1d1d1d] text-[14px] tracking-[-0.42px] w-full whitespace-nowrap" data-name="nameAge">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        $Name
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        ($Age)
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2.8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[11.2px]" data-name="ShieldCheck">
        <div className="absolute inset-[15.63%_12.5%_6.26%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 8.74943">
            <path d={svgPaths.p56289e0} fill="var(--fill-0, #18900D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[12.6px] not-italic relative shrink-0 text-[#18900d] text-[9.8px] tracking-[-0.3px] whitespace-nowrap">Verified Review</p>
    </div>
  );
}

function Meta2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.6px] items-start min-w-px relative" data-name="meta">
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[14px] min-w-full relative shrink-0 text-[#1d1d1d] text-[11.2px] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $productList
      </p>
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[14px] min-w-full relative shrink-0 text-[11.2px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        $duration
      </p>
      <Frame15 />
    </div>
  );
}

function ProductImage2() {
  return (
    <div className="h-[50.4px] relative shrink-0 w-[86.1px]" data-name="productImage">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[153.57%] left-[0.23%] max-w-none top-[-42.07%] w-full" src={imgProductImage1} />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-start flex flex-wrap gap-[5.599999904632568px_5.6px] items-start relative shrink-0 w-full" data-name="details">
      <Meta2 />
      <ProductImage2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8.4px] items-start px-[5.6px] relative size-full">
        <NameAge2 />
        <Details2 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[5.6px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <div className="bg-white content-stretch flex flex-col gap-[16.8px] items-start justify-end pb-[22.4px] pt-[11.2px] px-[11.2px] relative rounded-[32px] shrink-0 w-[364px]" data-name="successCard">
        <BeforeAfterImg />
        <Frame16 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end pb-[32px] pt-[16px] px-[16px] relative rounded-[32px] shrink-0 w-[520px]" data-name="successCard">
        <BeforeAfterImg1 />
        <Frame17 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16.8px] items-start justify-end pb-[22.4px] pt-[11.2px] px-[11.2px] relative rounded-[32px] shrink-0 w-[364px]" data-name="successCard">
        <BeforeAfterImg2 />
        <Frame18 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0">
      <Frame6 />
      <div className="absolute bg-[#4000e6] drop-shadow-[0px_8px_8px_rgba(29,29,29,0.2)] left-[-24px] rounded-[9999px] size-[48px] top-[179px]" data-name="buttonPrimary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
              <div className="absolute inset-[17.18%_10.94%_17.18%_10.93%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7509 15.7539">
                  <path d={svgPaths.p596a600} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1256px] size-[48px] top-[180px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#4000e6] drop-shadow-[0px_8px_8px_rgba(29,29,29,0.2)] relative rounded-[9999px] size-[48px]" data-name="buttonPrimary">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
                <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
                  <div className="absolute inset-[17.18%_10.94%_17.18%_10.93%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7509 15.7539">
                      <path d={svgPaths.p596a600} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="bg-[#1d1d1d] opacity-20 relative rounded-[9999px] shrink-0 size-[8px]" />;
}

function Frame20() {
  return <div className="bg-[#1d1d1d] relative rounded-[9999px] shrink-0 size-[8px]" />;
}

function Frame21() {
  return <div className="bg-[#1d1d1d] opacity-20 relative rounded-[9999px] shrink-0 size-[8px]" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-start relative rounded-[9999px] shrink-0" data-name="pagination">
      <Frame22 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="content">
      <Frame9 />
      <Frame7 />
      <Pagination />
    </div>
  );
}

function InternalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center px-[40px] py-[32px] relative rounded-[32px] shrink-0 w-[600px]" data-name="internalContainer">
      <Content />
      <div className="bg-[#4000e6] h-[58px] relative rounded-[9999px] shrink-0 w-full" data-name="buttonPrimary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.4px] whitespace-nowrap">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="mainContainer">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-px py-[80px] relative size-full">
          <InternalContainer />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-px pl-[64px] pr-px pt-[32px] top-[100px]">
      <div className="bg-[rgba(200,200,200,0.4)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="buttonPrimary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
              <div className="absolute inset-[17.18%_10.94%_17.18%_10.93%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7509 15.7539">
                  <path d={svgPaths.p596a600} fill="var(--fill-0, #1D1D1D)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component11Reassurance() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[32px] size-full" data-name="11. Reassurance">
      <div className="bg-[#1d1d1d] h-[100px] relative shrink-0 w-full" data-name="navigationBar">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[64px] py-[24px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
      <MainContainer />
      <Frame12 />
    </div>
  );
}