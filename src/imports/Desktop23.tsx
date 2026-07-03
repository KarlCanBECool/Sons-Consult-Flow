import svgPaths from "./svg-m5jiy81c7";
import imgFrame16 from "figma:asset/2159ead89fb0d4a41fb7c00c18bcadbe9a4ee1c4.png";
import imgImage3 from "figma:asset/f150bc76379a8dab467bafe928a6f94353663adc.png";
import imgImage4 from "figma:asset/f17f60e674660310781be4bb6c7e0a27e75f8686.png";

function Layer() {
  return (
    <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8109 49.5464">
        <g id="Layer_1">
          <path d={svgPaths.p306b9c80} fill="var(--fill-0, #F7F7F7)" id="Vector" />
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

function Frame() {
  return <div className="bg-gradient-to-r from-white h-[4px] rounded-br-[999px] rounded-tr-[999px] shrink-0 to-[rgba(255,255,255,0.4)] w-[58px]" />;
}

function Frame7() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.3px] whitespace-nowrap">You</p>
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[4px] min-h-px min-w-px" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.3px] whitespace-nowrap">Your plan</p>
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame12() {
  return <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[4px] min-h-px min-w-px" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[9999px] shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.3px] whitespace-nowrap">Final steps</p>
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative">
      <Frame6 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px min-w-px relative">
      <IconWhite />
      <Frame19 />
      <div className="opacity-30 relative shrink-0 size-[32px]" data-name="X">
        <div className="absolute inset-[17.17%_17.18%_17.18%_17.18%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0077 21.009">
            <path d={svgPaths.p299d600} fill="var(--fill-0, #E6E6E6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] relative shrink-0 text-[#4300dd] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        Almost there!
      </p>
      <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[28px] text-black tracking-[-1.4px] w-full">Last step before your personalised treatment plan</p>
      <p className="font-['Aeroport:Light',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-full">Please enter your details to continue</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic opacity-60 relative text-[#25272a] text-[16px] tracking-[-0.3px]">Enter first name</p>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic opacity-60 relative text-[#25272a] text-[16px] tracking-[-0.3px]">Enter last name</p>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic opacity-60 relative text-[#25272a] text-[16px] tracking-[-0.3px]">Enter email address</p>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="inputs">
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Input">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
          Your first name
        </p>
        <Frame20 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Input">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
          Your last name
        </p>
        <Frame22 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Input">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
          Email address
        </p>
        <Frame23 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Inputs />
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="checkboxes">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="UI control">
        <div className="bg-[#fdfdff] pointer-events-none relative rounded-[8px] shrink-0 size-[24px]" data-name="UI control / Item / Checkbox">
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden="true" className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Aeroport:Light','Noto_Sans:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020304] text-[16px] tracking-[-0.3px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
          <p className="leading-[20px]">{`I agree to the Terms & Conditions, Privacy Policy and confirm that I am male and at least 18 years of age.`}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="UI control">
        <div className="bg-[#fdfdff] pointer-events-none relative rounded-[8px] shrink-0 size-[24px]" data-name="UI control / Item / Checkbox">
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden="true" className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#020304] text-[16px] tracking-[-0.3px]">
          <p className="leading-[20px]">I consent to receive marketing communications via email, SMS and Postal Mail.</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-full relative rounded-[32px] shrink-0 w-[559px]">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-end justify-center pb-[32px] pt-[56px] px-[40px] relative size-full">
          <Frame21 />
          <Checkboxes />
          <div className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Blue-button">
            <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Get my personalised plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[20px] relative shrink-0 w-[106px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110%] left-[-1.42%] max-w-none top-[-5%] w-[101.89%]" src={imgImage3} />
        </div>
      </div>
      <div className="h-[23px] relative shrink-0 w-[100px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[244.57%] left-[-1%] max-w-none top-[-74.46%] w-full" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 overflow-clip px-[24px] py-[32px] relative rounded-[12px] row-1 w-[402px]">
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] relative shrink-0 text-[16px] text-black tracking-[-0.3px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        “Great company with great products. I use the thickening clay every day and it’s brilliant!! Communication and customer service is next level. Great company and I love using their products!”
      </p>
      <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.3px] w-full">Harry Llewellyn</p>
      <Frame24 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-full relative rounded-[32px] shrink-0 w-[450px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
        <img alt="" className="absolute h-[111.68%] left-[-17.82%] max-w-none top-[-11.73%] w-[151.49%]" src={imgFrame16} />
      </div>
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[24px] relative size-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center justify-center min-h-px min-w-px relative">
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[923px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-px py-[80px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-px pl-[64px] pr-px pt-[32px] top-[100px]">
      <div className="relative shrink-0 size-[32px]" data-name="ArrowLeft">
        <div className="absolute inset-[17.18%_10.94%_17.18%_10.93%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0012 21.0052">
            <path d={svgPaths.p2d947a00} fill="var(--fill-0, #25272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[32px] size-full" data-name="Desktop - 23">
      <div className="bg-[#25272a] content-stretch flex h-[100px] items-center overflow-clip px-[64px] py-[25px] relative shrink-0 w-[1440px]" data-name="Navigational-Bar">
        <Frame1 />
      </div>
      <Frame13 />
      <Frame25 />
    </div>
  );
}