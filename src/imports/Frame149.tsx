import svgPaths from "./svg-ww15dbcswj";
import imgImage from "figma:asset/c7e15d22b81b0c6655fcbb534bacf96277cbbc77.png";

function Layer() {
  return (
    <div className="absolute inset-[0.51%_1.71%_0.4%_1.69%]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5051 62.4285">
        <g id="Layer_1">
          <path d={svgPaths.p1a8d4f00} fill="var(--fill-0, #F7F7F7)" id="Vector" />
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
    <div className="h-[63px] overflow-clip relative shrink-0 w-[44px]" data-name="icon_white 1">
      <Group />
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute left-[-9.61%] max-w-none size-[127.28%] top-[-0.54%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <IconWhite />
      <Image />
    </div>
  );
}