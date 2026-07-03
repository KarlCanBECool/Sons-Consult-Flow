import svgPaths from "./svg-h5moj2s3k9";
import imgImage from "./2159ead89fb0d4a41fb7c00c18bcadbe9a4ee1c4.png";
import imgImage3 from "./f150bc76379a8dab467bafe928a6f94353663adc.png";
import imgImage4 from "./f17f60e674660310781be4bb6c7e0a27e75f8686.png";

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
  return <div className="bg-white h-[4px] relative rounded-br-[999px] rounded-tr-[999px] shrink-0 w-[506.5px]" />;
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

function EyebrowTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="eyebrowTitle">
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] relative shrink-0 text-[#4000e6] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        Almost there!
      </p>
      <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#1d1d1d] text-[28px] tracking-[-1.4px] w-full">Last step before your personalised treatment plan</p>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <EyebrowTitle />
      <p className="font-['Aeroport:Light',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-full">Please enter your details to continue</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Enter first name</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[0] min-w-px not-italic opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">
            <p className="leading-[20px]">Enter last name</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Enter email address</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Enter phone number</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-px opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            dd/mm/yyyy
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-w-px not-italic opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]">Enter password</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[52px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[9999px]" />
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] min-w-px opacity-60 relative text-[#1d1d1d] text-[16px] tracking-[-0.3px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
            Re-enter password
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="inputs">
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Your first name*
        </p>
        <Frame6 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Your last name*
        </p>
        <Frame8 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Email address*
        </p>
        <Frame9 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Phone number*
        </p>
        <Frame10 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Date of birth*
        </p>
        <Frame11 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Password*
        </p>
        <Frame12 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="inputField">
        <p className="[word-break:break-word] font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
          Confirm password*
        </p>
        <Frame13 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Text />
      <Inputs />
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="checkboxes">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="UI control">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[24px]" data-name="UI control / Item / Checkbox">
          <div aria-hidden className="absolute bg-white inset-0 rounded-[8px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        </div>
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Aeroport:Light','Noto_Sans:Light',sans-serif] justify-center leading-[0] min-w-px relative self-stretch text-[#1d1d1d] text-[0px] tracking-[-0.3px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
          <p className="text-[16px]">
            <span className="leading-[20px]">{`I agree to the `}</span>
            <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] text-[#4000e6] tracking-[-0.3px] underline" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>{`Terms & Conditions`}</span>
            <span className="leading-[20px]">{`, `}</span>
            <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] text-[#4000e6] tracking-[-0.3px] underline" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
              Privacy Policy
            </span>
            <span className="leading-[20px]">{` and confirm that I am male and at least 18 years of age.*`}</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="UI control">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[24px]" data-name="UI control / Item / Checkbox">
          <div aria-hidden className="absolute bg-white inset-0 rounded-[8px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        </div>
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[0] min-w-px not-italic relative self-stretch text-[#1d1d1d] text-[16px] tracking-[-0.3px]">
          <p className="leading-[20px]">I consent to receive marketing communications via email, SMS and Postal Mail.</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="UI control">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[24px]" data-name="UI control / Item / Checkbox">
          <div aria-hidden className="absolute bg-white inset-0 rounded-[8px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        </div>
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[0] min-w-px not-italic relative self-stretch text-[#1d1d1d] text-[16px] tracking-[-0.3px]">
          <p className="leading-[20px]">I consent to receive marketing communications via Whatsapp</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end justify-center overflow-clip pb-[32px] pt-[56px] px-[40px] relative rounded-[32px] shrink-0 w-[559px]">
      <Frame7 />
      <Checkboxes />
      <div className="bg-[#4000e6] h-[58px] relative rounded-[9999px] shrink-0 w-full" data-name="buttonPrimary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.4px] whitespace-nowrap">Get my personalised plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full">
      <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] relative shrink-0 w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
        “Great company with great products. I use the thickening clay every day and it’s brilliant!! Communication and customer service is next level. Great company and I love using their products!”
      </p>
      <p className="font-['Aeroport:Bold','Noto_Sans_Math:Regular',sans-serif] not-italic relative shrink-0 w-full">− Harry Llewellyn</p>
    </div>
  );
}

function Frame14() {
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

function Card() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative size-full">
          <Frame16 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] h-[800px] min-w-px relative rounded-[32px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
        <img alt="" className="absolute h-[111.68%] left-[-17.82%] max-w-none top-[-11.73%] w-[151.49%]" src={imgImage} />
      </div>
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[24px] relative size-full">
          <Card />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start justify-center min-w-px relative" data-name="container">
      <Image />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[1033px]">
      <Frame4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-px py-[80px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
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

export default function Component13LastStep() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[32px] size-full" data-name="13. Last Step">
      <div className="bg-[#1d1d1d] h-[100px] relative shrink-0 w-full" data-name="navigationBar">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[64px] py-[24px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
      <Frame3 />
      <Frame15 />
    </div>
  );
}