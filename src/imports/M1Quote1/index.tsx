import svgPaths from "./svg-so9b3w1glg";
import imgImage from "./c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";

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

function Frame3() {
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
      <Frame3 />
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

function DoctorCallOut() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center p-[8px] relative rounded-[9999px] shrink-0 w-[228px]" data-name="Doctor-Call-Out">
      <Image />
      <div className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px] mb-0 whitespace-pre">{`Dr. Knut A. Moe, `}</p>
        <p className="leading-[18px] whitespace-pre">Sons Medical Director</p>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="mainContainer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-px relative size-full">
          <DoctorCallOut />
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[24px] text-center tracking-[-1.08px] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[28px] mb-0">{`Hair loss affects men of all ages. `}</p>
            <p className="leading-[28px]">You are not alone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function M1Quote() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[16px] size-full" data-name="m.1. Quote 1">
      <div className="bg-[#1d1d1d] content-stretch flex items-center overflow-clip p-[16px] relative shrink-0 w-[393px]" data-name="navigationBar">
        <Frame1 />
      </div>
      <MainContainer />
    </div>
  );
}