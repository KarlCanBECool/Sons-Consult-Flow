import React, { useState } from "react";
import svgPaths from "../../../imports/svg-o3b0qf83q9";
import imgImage1 from "figma:asset/fe7363372aff256d6d7e8aa3f606826413f7d4d0.png";
import imgFrame64 from "figma:asset/e493d6895d865c0337ade71bbb76d37220029754.png";
import imgFrame70 from "figma:asset/2d8d00a0d34802a9b5c4ca8d0380f59f2c18256c.png";
import imgFrame71 from "figma:asset/5c41262d3903fe3bab04b0e399dafaafcc688f78.png";
import imgImage6 from "figma:asset/8b0d9d4fbacb5055c6920a3a468059218be6c780.png";
import imgFrame147 from "figma:asset/fbc90d1f0c54c12f805fa6ac75bc9741b62df7ea.png";
import { WidePageLayout } from "../WidePageLayout";
import { h1MobileScale } from "../../constants/layout";

interface PlanStepProps {
  onNext: () => void;
}

function CheckCircleIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
          <path d={svgPaths.p3e81b3f2} fill="#4300DD" />
        </svg>
      </div>
    </div>
  );
}

function PlusTagIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.p211f7500} fill="#343330" />
        </svg>
      </div>
    </div>
  );
}

export function PlanStep({ onNext }: PlanStepProps) {
  const [selectedPlan, setSelectedPlan] = useState<"6" | "3">("6");

  return (
    <WidePageLayout className="gap-[32px]">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[1300px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-lg:flex-col max-lg:items-start max-lg:gap-[16px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#25272a]">
                <p className={`font-['Aeroport:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] tracking-[-1.4px] whitespace-nowrap max-lg:whitespace-normal ${h1MobileScale}`}>John, your personalised plan is ready</p>
                <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.3px] whitespace-nowrap max-lg:whitespace-normal">
                  Based on your responses in the consultation, our medical team recommend the following plan for you:
                </p>
              </div>
              <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[89px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgImage1} />
                <div className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
              </div>
            </div>
          </div>

            {/* Plan card */}
            <div className="bg-[#e0e0e0] relative rounded-[40px] shrink-0 w-full max-w-[1400px]">
              <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex gap-[80px] items-start justify-center pl-[24px] pt-[24px] pb-[24px] pr-[40px] relative w-full max-lg:flex-col max-lg:gap-[32px]">
                  {/* Left - Product details */}
                  <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[32px] items-start px-[40px] py-[40px] relative rounded-[24px] w-full max-w-[600px] mr-auto max-lg:max-w-none max-lg:mr-0">
                    {/* Most effective tag */}
                    <div className="absolute bg-[#25272a] content-stretch flex h-[24px] items-center justify-center right-[24px] px-[12px] py-px rounded-[9999px] top-[-12px] w-[130px]">
                      <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">Most effective</p>
                    </div>

                    {/* Product image & info */}
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                        <div className="h-[148px] relative shrink-0 w-[264px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[178.61%] left-[-10.59%] max-w-none top-[-47.8%] w-[100.02%]" src={imgFrame64} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
                          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#4300dd] text-[16px] tracking-[-0.3px] w-full">Plan recommendation</p>
                          <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] relative shrink-0 text-[#25272a] text-[28px] tracking-[-1.4px] w-full">Finasteride and Minoxidil</p>
                          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">This is effective at stopping hair loss and boosting regrowth</p>
                        </div>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                        <div className="relative rounded-[16px] shrink-0 size-[80px]">
                          <div className="absolute inset-0 pointer-events-none rounded-[16px]">
                            <div className="absolute bg-[#e6e6e6] inset-0 rounded-[16px]" />
                            <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgFrame70} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px]">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap">
                            <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px]">Finasteride</p>
                            <p className="font-['Aeroport:Light',sans-serif] leading-[18px] opacity-60 relative shrink-0 text-[14px] text-right">1mg</p>
                          </div>
                          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] w-full">Works by blocking the production of DHT, a hormone that causes male pattern baldness</p>
                        </div>
                        <div className="absolute bg-[#f7f7f7] content-stretch flex h-[28px] items-start justify-end left-[56px] overflow-clip pl-[8px] pr-[4px] pt-[8px] rounded-bl-[16px] top-0 w-[24px]">
                          <p className="font-['Aeroport:Medium',sans-serif] leading-[20px] text-[#25272a] text-[16px] tracking-[-0.3px]">1</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                        <div className="relative rounded-[16px] shrink-0 size-[80px]">
                          <div className="absolute inset-0 pointer-events-none rounded-[16px]">
                            <div className="absolute bg-[#e6e6e6] inset-0 rounded-[16px]" />
                            <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                              <img alt="" className="absolute left-0 max-w-none size-full top-[-8.14%]" src={imgFrame71} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px]">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap">
                            <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px]">Minoxidil</p>
                            <p className="font-['Aeroport:Light',sans-serif] leading-[18px] opacity-60 relative shrink-0 text-[14px] text-right">5% Spray</p>
                          </div>
                          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] w-full">Boosts regrowth by increasing blood flow to hair follicles</p>
                        </div>
                        <div className="absolute bg-[#f7f7f7] content-stretch flex h-[28px] items-start justify-end left-[56px] overflow-clip pl-[8px] pr-[4px] pt-[8px] rounded-bl-[16px] top-0 w-[24px]">
                          <p className="font-['Aeroport:Medium',sans-serif] leading-[20px] text-[#25272a] text-[16px] tracking-[-0.3px]">1</p>
                        </div>
                      </div>
                    </div>

                    {/* Effectiveness */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] whitespace-nowrap">Effectiveness</p>
                        <div className="content-stretch flex h-[12px] items-start overflow-clip relative rounded-[9999px] shrink-0 w-full">
                          <div className="bg-[#4300dd] flex-[1_0_0] h-full min-h-px min-w-px" />
                          <div className="bg-[#e6e6e6] h-full shrink-0 w-[58px]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[4px] items-start relative shrink-0">
                        {["Encourages Growth", "Increases Density", "Prevents Hair Loss"].map((tag) => (
                          <div key={tag} className="bg-[#e6e6e6] content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[12px] py-px relative rounded-[9999px] shrink-0">
                            <PlusTagIcon />
                            <p className="font-['Aeroport:Light',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25272a] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">{tag}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Need advice? */}
                    <div className="bg-[#e6e6e6] content-stretch flex gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[44px]">
                        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
                          <img alt="" className="absolute left-[-29.58%] max-w-none size-[173.27%] top-[-2.67%]" src={imgFrame147} />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#c1ff50] border-solid inset-0 rounded-[9999px]" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] whitespace-nowrap">Need advice?</p>
                          </div>
                          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] whitespace-nowrap">
                            <span className="underline">hello@sons.co.uk</span>
                            {` or `}
                            <span className="underline">02081542524</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Subscription */}
                  <div className="flex-1 min-w-0 min-h-px relative self-stretch">
                    <div className="flex flex-col items-end size-full">
                      <div className="content-stretch flex flex-col items-end justify-between pb-[16px] pt-[40px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] w-full">Choose your subscription</p>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              {["Easily skip, change or cancel anytime", "Never run out of product", "Qualified aftercare team"].map((item) => (
                                <div key={item} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                  <CheckCircleIcon />
                                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative flex-[1_0_0] min-w-0 text-[#25272a] text-[16px] tracking-[-0.3px]">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                            {/* 6 months option */}
                            <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
                              {selectedPlan === "6" && <div className="absolute border border-[#25272a] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />}
                              <button
                                onClick={() => setSelectedPlan("6")}
                                className={`bg-[#f7f7f7] relative shrink-0 w-full border-none cursor-pointer p-0 ${selectedPlan === "6" ? "rounded-tl-[16px] rounded-tr-[16px]" : "rounded-[16px]"}`}
                              >
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[24px] relative w-full">
                                    <div className={`relative rounded-[9999px] shrink-0 size-[24px] ${selectedPlan === "6" ? "bg-[#4300dd]" : "bg-white"}`}>
                                      <div className={`absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[9999px] ${selectedPlan === "6" ? "border-[#d8d5e1]" : "border-[#bbb]"}`} />
                                      {selectedPlan === "6" && (
                                        <svg className="absolute inset-0 m-auto size-[12px]" viewBox="0 0 12 12" fill="none">
                                          <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative text-[#25272a]">
                                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                        <p className="flex-[1_0_0] font-['Aeroport:Bold',sans-serif] leading-[28px] min-h-px min-w-px relative text-[22px] tracking-[-1.2px] text-left">6 months</p>
                                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] relative shrink-0 text-[18px] tracking-[-0.3px] whitespace-nowrap">£18.90 p/m</p>
                                      </div>
                                      <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 tracking-[-0.3px] w-full whitespace-nowrap">
                                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[0px]">
                                          <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] text-[16px]">£113</p>
                                          <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] line-through text-[16px] opacity-40">£189</p>
                                        </div>
                                        <p className="font-['Aeroport:Light',sans-serif] leading-[16px] opacity-60 text-[12px]">(£189 every 6 months thereafter)</p>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#c1ff50] content-stretch flex h-[28px] items-center justify-center px-[12px] py-px right-[16px] rounded-[9999px] top-[-14px]">
                                      <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25272a] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">Save 40%</p>
                                    </div>
                                  </div>
                                </div>
                              </button>
                              {/* Welcome pack */}
                              {selectedPlan === "6" && (
                              <div className="bg-[#e6e6e6] h-[83px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-between pl-[24px] pr-[16px] py-[16px] relative size-full">
                                    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                                      <div className="h-[56px] relative shrink-0 w-[121px]">
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                          <img alt="" className="absolute h-[107.04%] left-[-107.14%] max-w-none top-[-7.04%] w-[233.43%]" src={imgImage6} />
                                        </div>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] whitespace-nowrap">
                                        <p className="font-['Aeroport:Bold',sans-serif] not-italic relative shrink-0">Free Welcome Pack Included</p>
                                        <p className="font-['Aeroport:Light',sans-serif] relative shrink-0">Sons wash bag, 2 x travel bottle</p>
                                      </div>
                                    </div>
                                    <div className="relative shrink-0 size-[24px]">
                                      <div className="absolute inset-[7.81%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 20.25">
                                          <path d={svgPaths.p32db680} fill="#343330" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute border-[#25272a] border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
                              </div>
                              )}
                            </div>

                            {/* 3 months option */}
                            <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
                              {selectedPlan === "3" && <div className="absolute border border-[#25272a] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />}
                              <button
                                onClick={() => setSelectedPlan("3")}
                                className="bg-[#f7f7f7] relative rounded-[16px] shrink-0 w-full border-none cursor-pointer p-0"
                              >
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[24px] relative w-full rounded-[16px]">
                                    <div className={`relative rounded-[9999px] shrink-0 size-[24px] ${selectedPlan === "3" ? "bg-[#4300dd]" : "bg-white"}`}>
                                      <div className={`absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[9999px] ${selectedPlan === "3" ? "border-[#d8d5e1]" : "border-[#bbb]"}`} />
                                      {selectedPlan === "3" && (
                                        <svg className="absolute inset-0 m-auto size-[12px]" viewBox="0 0 12 12" fill="none">
                                          <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                                      <div className="content-stretch flex items-center justify-between relative shrink-0 text-[#25272a] w-full whitespace-nowrap">
                                        <p className="font-['Aeroport:Bold',sans-serif] leading-[28px] relative shrink-0 text-[22px] tracking-[-1.2px]">3 months</p>
                                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] relative shrink-0 text-[18px] tracking-[-0.3px]">£24.73 p/m</p>
                                      </div>
                                      <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 tracking-[-0.3px] w-full whitespace-nowrap text-[#25272a]">
                                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[0px]">
                                          <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] text-[16px]">£74</p>
                                          <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] line-through text-[16px] opacity-40">£106</p>
                                        </div>
                                        <p className="font-['Aeroport:Light',sans-serif] leading-[16px] opacity-60 text-[12px]">(£106 every 3 months thereafter)</p>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#25272a] content-stretch flex h-[28px] items-center justify-center px-[12px] py-px right-[16px] rounded-[9999px] top-[-14px]">
                                      <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">Save 30%</p>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={onNext}
                          className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
                        >
                          <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Select and continue</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* See more plans */}
          <button className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[#efefef] transition-colors border-none">
            <div className="absolute border-[0.5px] border-[rgba(37,39,42,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
            <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4300dd] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">See more plans</p>
          </button>

          {/* FAQ Section */}
          <div className="mt-[32px] w-full max-w-[1300px]">
            <p className={`font-['Aeroport:Bold',sans-serif] leading-[40px] text-[#25272a] text-[28px] tracking-[-1.4px] max-md:leading-[28px] ${h1MobileScale}`}>Frequently asked questions</p>
            <div className="mt-[24px] bg-[#f7f7f7] rounded-[24px] px-[40px]">
              {faqData.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
    </WidePageLayout>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(37,39,42,0.1)] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-[24px] px-[8px] bg-transparent border-none cursor-pointer text-left group"
      >
        <p className="font-['Aeroport:Bold',sans-serif] leading-[24px] text-[#25272a] text-[18px] tracking-[-0.4px] pr-[16px]">
          {question}
        </p>
        <div
          className={`relative shrink-0 size-[24px] transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="#25272A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="font-['Aeroport:Light',sans-serif] leading-[22px] text-[#25272a] text-[16px] tracking-[-0.3px] px-[8px] pb-[24px] opacity-70">
          {answer}
        </p>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Can I cancel or change my subscription?",
    answer:
      "Absolutely. You can cancel, pause, or change your plan at any time from your account dashboard — no commitment, no hidden fees. If you cancel before your next billing cycle, you won't be charged again. You can also switch between plans or adjust your products as your needs change.",
  },
  {
    question: "When will I start seeing results?",
    answer:
      "Most men begin to notice a reduction in hair loss within 3–6 months. Visible regrowth typically becomes apparent around the 6–12 month mark. Hair growth is a gradual process, so consistency is key — the earlier you start, the better your results. Our medical team will check in with you along the way.",
  },
  {
    question: "What is the dosing regime?",
    answer:
      "Finasteride is taken as one 1mg tablet daily. Minoxidil 5% spray is applied directly to the affected area of the scalp twice daily — once in the morning and once in the evening. Each application takes less than a minute. Your order will include full instructions.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Side effects are uncommon. Finasteride may cause reduced libido or mild sexual side effects in a small percentage of men (around 1–2%), which typically resolve upon stopping the medication. Minoxidil may cause mild scalp irritation initially. Our medical team reviews your health profile before prescribing and is available if you have any concerns.",
  },
  {
    question: "Is the treatment clinically proven?",
    answer:
      "Yes. Both Finasteride and Minoxidil are clinically proven, FDA-approved treatments for male pattern hair loss. Finasteride has been shown to stop hair loss in over 90% of men, while Minoxidil promotes regrowth by increasing blood flow to hair follicles. These are the gold-standard treatments recommended by dermatologists worldwide.",
  },
  {
    question: "What happens if the treatment doesn't work for me?",
    answer:
      "We offer a money-back guarantee for eligible customers. If after following your treatment plan consistently for the recommended period you don't see improvement, our medical team will work with you to adjust your plan or explore alternatives. Your satisfaction and results matter to us.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "After selecting your plan, you'll complete a short medical questionnaire reviewed by our UK-based medical team. A prescriber will assess your suitability and, if appropriate, approve your treatment — usually within 24 hours. Your medication is then delivered discreetly to your door. No GP visit required.",
  },
];