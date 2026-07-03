import svgPaths from "./svg-a7u4a91py7";
import imgImageBadge from "./66a585cd8fd2152b52db6f4d0fb56bbf2e6556bb.png";
import imgImage1 from "./fe7363372aff256d6d7e8aa3f606826413f7d4d0.png";

function Layer() {
  return (
    <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0487 39.6371">
        <g id="Layer_1">
          <path d={svgPaths.p1c9da380} fill="var(--fill-0, white)" id="Vector" />
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
    <div className="h-[40px] overflow-clip relative shrink-0 w-[28px]" data-name="icon_white 1">
      <Group />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="textIcon">
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.3px] whitespace-nowrap">You</p>
    </div>
  );
}

function Frame() {
  return <div className="bg-white h-[4px] relative rounded-br-[999px] rounded-tr-[999px] shrink-0 w-[56.2px]" />;
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
      <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(247,247,247,0.6)] tracking-[-0.3px] whitespace-nowrap">Your plan</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Step1">
        <ProgressBarContainer />
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Step2">
        <ProgressBarContainer1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative">
      <IconWhite />
      <Frame6 />
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

function ImageBadge() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="imageBadge">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImageBadge} />
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[80px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgImage1} />
            <div aria-hidden className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p6653300} fill="var(--fill-0, #4000E6)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] min-w-px relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Takes less than 1 minute.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p6653300} fill="var(--fill-0, #4000E6)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Safe, regulated treatments.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p6653300} fill="var(--fill-0, #4000E6)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Qualified aftercare team.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pl-[16px] pr-[24px] py-[16px] relative size-full">
          <Frame3 />
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="top">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[24px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="leading-[28px] mb-0">{`Sons is with you every step `}</p>
        <p className="leading-[28px]">of the way</p>
      </div>
      <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`We'll ask you some questions about your hair loss and then our prescribing partners will recommend the best treatment plan for you.`}</p>
      <Container1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="content">
      <ImageBadge />
      <Top />
      <div className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[0] relative shrink-0 text-[#1d1d1d] text-[0px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        <p className="font-['Aeroport:Bold','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] mb-[3px] text-[16px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
          Please read the statement and accept if you meet all the criteria
        </p>
        <ul className="list-disc">
          <li className="mb-[3px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">I am male at birth and over 18 years old</span>
          </li>
          <li className="mb-[3px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">I currently live in the UK</span>
          </li>
          <li className="mb-[3px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">I am using this service of my own free will</span>
          </li>
          <li className="mb-[3px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">{`I shall be the sole user of any medication offered to me through this service and prescribed by Son's independent prescribing partners`}</span>
          </li>
          <li className="mb-[3px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">I agree to the terms of service, terms of subscription, and privacy policy</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[#1d1d1d] text-[16px]">I confirm all answers will be provided honestly and truthfully</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="container">
      <Content />
      <div className="bg-[#4000e6] h-[52px] relative rounded-[9999px] shrink-0 w-full" data-name="buttonPrimary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.4px] whitespace-nowrap">I accept</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="mainContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[40px] relative size-full">
          <Container />
          <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Light','Noto_Sans_Symbols2:Regular',sans-serif] leading-[0] relative shrink-0 text-[#1d1d1d] text-[0px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            <span className="leading-[20px] text-[16px]">{`Already have an account? `}</span>
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] text-[#4000e6] text-[16px] underline" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function M3PreConsult() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[16px] size-full" data-name="m.3. Pre-Consult">
      <div className="bg-[#1d1d1d] content-stretch flex items-center overflow-clip p-[16px] relative shrink-0 w-[393px]" data-name="navigationBar">
        <Frame1 />
      </div>
      <MainContainer />
    </div>
  );
}