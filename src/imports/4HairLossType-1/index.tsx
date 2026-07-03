import svgPaths from "./svg-ctdh0e3u1e";

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
  return <div className="bg-white h-[4px] relative rounded-br-[999px] rounded-tr-[999px] shrink-0 w-[112px]" />;
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

function TooltipContainer() {
  return (
    <div className="[word-break:break-word] absolute bg-[#1d1d1d] bottom-[8px] content-stretch flex flex-col gap-[4px] items-center justify-end leading-[18px] left-0 not-italic overflow-clip p-[16px] right-0 rounded-[8px] text-[14px] text-white tracking-[-0.3px]" data-name="tooltipContainer">
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] relative shrink-0 w-[345px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Why do we ask this?
      </p>
      <p className="font-['Aeroport:Light',sans-serif] relative shrink-0 w-[345px]">We need to know this information to determine the most suitable product for you.</p>
    </div>
  );
}

function Tooltip() {
  return (
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
      <TooltipContainer />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#1d1d1d] text-[28px] tracking-[-1.4px] whitespace-nowrap">hair loss?</p>
      <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="tooltipIcon">
        <Tooltip />
        <div className="relative shrink-0 size-[16px]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.pc002300} fill="var(--fill-0, #373737)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="col-1 h-[119.987px] ml-0 mt-0 relative row-1 w-[100px]" data-name="Layer 1 00000026152046639907358080000001335567573354133633">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 119.987">
        <g id="Layer 1 00000026152046639907358080000001335567573354133633">
          <path d={svgPaths.p2f308580} fill="var(--fill-0, #1D1D1D)" id="<Path>" />
          <path d={svgPaths.p2e42ec70} fill="var(--fill-0, #1D1D1D)" id="<Path>_2" />
          <path d={svgPaths.p18799600} fill="var(--fill-0, #1D1D1D)" id="<Path>_3" />
          <path d={svgPaths.p36654f80} fill="var(--fill-0, #1D1D1D)" id="<Path>_4" />
          <path d={svgPaths.p41b8580} fill="var(--fill-0, #CFDF69)" id="<Path>_5" />
          <path clipRule="evenodd" d={svgPaths.p32a5a80} fill="var(--fill-0, #1D1D1D)" fillRule="evenodd" id="<Compound Path>" />
          <path d={svgPaths.p3d5d5040} fill="var(--fill-0, #CFDF69)" id="<Path>_6" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="<Group>">
      <Layer1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Group1 />
          <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#1d1d1d] text-[16px] text-center tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            Temples only (receding at the front)
          </p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <g id="Group 2">
          <path d={svgPaths.p274f0870} fill="var(--fill-0, #1D1D1D)" id="<Path>" />
          <path d={svgPaths.pdc46600} fill="var(--fill-0, #1D1D1D)" id="<Path>_2" />
          <path d={svgPaths.p20f14500} fill="var(--fill-0, #1D1D1D)" id="<Path>_3" />
          <path d={svgPaths.p36b02800} fill="var(--fill-0, #1D1D1D)" id="<Path>_4" />
          <path d={svgPaths.p1b166c80} fill="var(--fill-0, #CFFE6E)" id="<Path>_5" />
          <path clipRule="evenodd" d={svgPaths.p23937800} fill="var(--fill-0, #1D1D1D)" fillRule="evenodd" id="<Compound Path>" />
          <path d={svgPaths.pcb1a700} fill="var(--fill-0, #CFFE6E)" id="<Path>_6" />
          <path d={svgPaths.p3914070} fill="var(--fill-0, #CFFE6E)" id="<Path>_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Group2 />
          <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center tracking-[-0.3px] w-[min-content]">Random patches</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] h-[250px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <g id="Group 2">
          <path d={svgPaths.p274f0870} fill="var(--fill-0, #1D1D1D)" id="<Path>" />
          <path d={svgPaths.pdc46600} fill="var(--fill-0, #1D1D1D)" id="<Path>_2" />
          <path d={svgPaths.p20f14500} fill="var(--fill-0, #1D1D1D)" id="<Path>_3" />
          <path d={svgPaths.p36b02800} fill="var(--fill-0, #1D1D1D)" id="<Path>_4" />
          <path d={svgPaths.p1b166c80} fill="var(--fill-0, #C1FF50)" id="<Path>_5" />
          <path clipRule="evenodd" d={svgPaths.p23937800} fill="var(--fill-0, #1D1D1D)" fillRule="evenodd" id="<Compound Path>" />
          <path d={svgPaths.pcb1a700} fill="var(--fill-0, #C1FF50)" id="<Path>_6" />
          <path d={svgPaths.p775f800} fill="var(--fill-0, #C1FF50)" id="<Path>_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Group3 />
          <p className="[word-break:break-word] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#1d1d1d] text-[16px] text-center tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            Temples/Crown
          </p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[120.066px] relative shrink-0 w-[100px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 120.066">
        <g id="Group 3">
          <path d={svgPaths.p2762c80} fill="var(--fill-0, #1D1D1D)" id="<Path>" />
          <path d={svgPaths.p2a5c9900} fill="var(--fill-0, #1D1D1D)" id="<Path>_2" />
          <path d={svgPaths.p18912500} fill="var(--fill-0, #1D1D1D)" id="<Path>_3" />
          <path d={svgPaths.p32060980} fill="var(--fill-0, #1D1D1D)" id="<Path>_4" />
          <path clipRule="evenodd" d={svgPaths.p7246100} fill="var(--fill-0, #1D1D1D)" fillRule="evenodd" id="<Compound Path>" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Group4 />
          <p className="[word-break:break-word] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center tracking-[-0.3px] w-[min-content]">Completely bald</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] h-[250px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function InternalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[763px] items-end px-[40px] py-[32px] relative rounded-[32px] shrink-0 w-[600px]" data-name="internalContainer">
      <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[520px] relative shrink-0 w-full" data-name="titleTooltip">
        <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[34px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[28px] tracking-[-1.4px] w-[min-content]">Which image best describes your</p>
        <Frame11 />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-px pl-[64px] pr-px pt-[32px] top-0">
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

function MainContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="mainContainer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-px py-[80px] relative size-full">
          <InternalContainer />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

export default function Component4HairLossType() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[32px] size-full" data-name="4. Hair Loss Type">
      <div className="bg-[#1d1d1d] h-[100px] relative shrink-0 w-full" data-name="navigationBar">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[64px] py-[24px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
      <MainContainer />
    </div>
  );
}