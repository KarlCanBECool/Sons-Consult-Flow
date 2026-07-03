function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1d1d1d] w-full" data-name="text">
      <p className="font-['Aeroport:Bold','Noto_Sans:Bold',sans-serif] leading-[34px] relative shrink-0 text-[28px] tracking-[-1.4px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Are you sure you want to leave?
      </p>
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px] w-full">Description</p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-end relative shrink-0 w-full" data-name="buttonGroup">
      <div className="content-stretch flex h-[58px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="buttonPrimary">
        <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#373737] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Leave</p>
      </div>
      <div className="bg-[#4000e6] content-stretch flex h-[58px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="buttonPrimary">
        <p className="[word-break:break-word] font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.4px] whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[24px] pt-[40px] px-[40px] relative rounded-[24px] size-full" data-name="modal">
      <Text />
      <ButtonGroup />
    </div>
  );
}