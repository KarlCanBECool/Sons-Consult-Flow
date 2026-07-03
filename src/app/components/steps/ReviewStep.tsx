import React, { useState } from "react";
import svgPaths from "../../../imports/svg-gq0aub09ij";
import svgPathsArrow from "../../../imports/svg-6r2exti0o1";
import svgPathsPlus from "../../../imports/svg-6kavt85xts";
import imgFrame70 from "figma:asset/2d8d00a0d34802a9b5c4ca8d0380f59f2c18256c.png";
import imgFrame71 from "figma:asset/5c41262d3903fe3bab04b0e399dafaafcc688f78.png";
import imgFrame72 from "figma:asset/b32f26f4b94e9760f50dfcddb5915446e886dbe7.png";
import imgFrame73 from "figma:asset/dfc2415b3af627c172bb089bce5d6e2000ebcff2.png";
import imgFrame74 from "figma:asset/c3f6439166c028d7616106dd58cb96fd9134aebe.png";
import imgFrame75 from "figma:asset/ff0af4e85ba9de7221e6db21672eda7b4ad2c5c1.png";
import imgFrame76 from "figma:asset/5a39f2f6c66ab8c0ec11e58910f7078a73a898ed.png";
import imgImage1 from "figma:asset/fe7363372aff256d6d7e8aa3f606826413f7d4d0.png";

function PlusButton() {
  return (
    <div className="bg-[#4300dd] relative rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#3600b3] transition-colors">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 18.75">
          <path d={svgPaths.p35e04c00} fill="#F7F7F7" />
        </svg>
      </div>
    </div>
  );
}

function ProductRow({ img, name, desc, dosage, qty }: { img: string; name: string; desc: string; dosage: string; qty: number }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[16px] shrink-0 size-[80px]">
        <div className="absolute inset-0 pointer-events-none rounded-[16px]">
          <div className="absolute bg-[#e6e6e6] inset-0 rounded-[16px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={img} />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px]">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap">
          <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px]">{name}</p>
          <p className="font-['Aeroport:Light',sans-serif] leading-[18px] opacity-60 relative shrink-0 text-[14px] text-right">{dosage}</p>
        </div>
        <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] w-full">{desc}</p>
      </div>
      <div className="absolute bg-[#f7f7f7] content-stretch flex h-[28px] items-start justify-end left-[56px] overflow-clip pl-[8px] pr-[4px] pt-[8px] rounded-bl-[16px] top-0 w-[24px]">
        <p className="font-['Aeroport:Medium',sans-serif] leading-[20px] text-[#25272a] text-[16px] tracking-[-0.3px]">{qty}</p>
      </div>
    </div>
  );
}

function AddOnRow({ img, name, desc, onAdd }: { img: string; name: string; desc: string; onAdd: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[16px] shrink-0 size-[80px]">
        <div className="absolute inset-0 pointer-events-none rounded-[16px]">
          <div className="absolute bg-[#e6e6e6] inset-0 rounded-[16px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={img} />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px]">
        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px]">{name}</p>
        <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] w-full">{desc}</p>
      </div>
      <button onClick={onAdd} className="bg-transparent border-none p-0 cursor-pointer size-[32px]">
        <div className="bg-[#25272a] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[9999px] size-full cursor-pointer hover:bg-[#3a3a3a] transition-colors">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[10.94%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 18.75">
                <path d={svgPathsPlus.p35e04c00} fill="#F7F7F7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export function ReviewStep({ onGoToPlan, onCheckout }: { onGoToPlan?: () => void; onCheckout?: () => void }) {
  const [promoApplied] = useState(true);

  return (
    <div className="flex-1 relative w-full min-h-0 overflow-y-auto">
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[96px] py-[80px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex gap-[40px] items-end justify-between relative shrink-0 w-full max-w-[1400px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
              <p className="font-['Aeroport:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#25272a] text-[36px] tracking-[-1.4px]">Review your selection</p>
              <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px]">
                Based on your responses in the consultation, our medical team recommend the following plan for you:
              </p>
            </div>
            <NeedTimeCard />
          </div>

          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full max-w-[1400px]">
            {/* Left column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
              {/* Your basket */}
              <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[32px] items-start px-[40px] py-[40px] relative rounded-[24px] shrink-0 w-full">
                <p className="font-['Aeroport:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px]">Your basket</p>

                {/* Plan header */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                      <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px]">Plan</p>
                      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px]">Finasteride and Minoxidil</p>
                      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px]">Every 6 months</p>
                    </div>
                    <div onClick={onGoToPlan} className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer">
                      <div className="relative shrink-0 size-[16px]">
                        <div className="absolute inset-[3.13%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0004 15.0004">
                            <path d={svgPaths.p25e8d180} fill="#4300DD" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Aeroport:Light',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#4300dd] text-[14px] tracking-[-0.3px] whitespace-nowrap">Change</p>
                    </div>
                  </div>
                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[#25272a] tracking-[-0.3px] text-[14px]">Included with plan</p>
                </div>

                {/* Products */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <ProductRow img={imgFrame70} name="Finasteride" desc="Works by blocking the production of DHT, a hormone that causes male pattern baldness" dosage="1mg" qty={1} />
                  <ProductRow img={imgFrame71} name="Minoxidil" desc="Boosts regrowth by increasing blood flow to hair follicles" dosage="5% Spray" qty={1} />
                  <ProductRow img={imgFrame72} name="Sons Welcome Pack" desc="Included with your 6-month plan" dosage="FREE" qty={1} />

                  {/* Product information leaflet notice */}
                  <p className="font-['Aeroport:Light',sans-serif] leading-[18px] text-[12px] tracking-[-0.2px] opacity-40 text-[#000000]">
                    Please be careful to read the product information leaflet, which is available{" "}
                    <a href="#" className="underline text-[#25272a] opacity-100">here</a>.
                  </p>
                </div>
              </div>

              {/* Add-ons */}
              <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[32px] items-start px-[40px] py-[40px] relative rounded-[24px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <p className="font-['Aeroport:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px]">Add-ons</p>
                  <p className="font-['Aeroport:Light',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px]">Products to help your progress</p>
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <AddOnRow img={imgFrame73} name="Hair Growth Complex" desc="Addresses hair thinning, enhance growth rate, and improve overall hair quality." onAdd={() => {}} />
                  <AddOnRow img={imgFrame74} name="Biotin" desc="The Biotin hair vitamin (also known as vitamin B7 or vitamin H) promotes healthier and stronger hair." onAdd={() => {}} />
                  <AddOnRow img={imgFrame75} name="Shampoo" desc="Our DHT blocking shampoo is formulated with saw palmetto - a proven DHT blocker." onAdd={() => {}} />
                  <AddOnRow img={imgFrame76} name="Strengthening Conditioner" desc="A highly effective anti-dandruff ingredient - biotin, argan oil, and 11 amino acids." onAdd={() => {}} />
                </div>
              </div>
            </div>

            {/* Right column wrapper */}
            <div className="flex flex-col gap-[16px] shrink-0 w-[400px]">
              {/* Right column - Order overview */}
              <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[40px] items-end justify-end pb-[40px] pt-[32px] px-[40px] relative rounded-[24px] shrink-0 w-full">
                {/* Order overview section */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] w-full">Order overview</p>
                  <div className="content-stretch flex flex-col gap-[24px] items-start leading-[20px] relative shrink-0 tracking-[-0.3px] w-full whitespace-nowrap">
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subscription</p>
                      <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 text-[18px]">£189.00</p>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subtotal</p>
                      <p className="font-['Aeroport:Regular',sans-serif] relative shrink-0 text-[18px]">£189.00</p>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Prescription fee</p>
                      <p className="font-['Aeroport:Regular',sans-serif] relative shrink-0 text-[18px]">£20.00</p>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Shipping</p>
                      <p className="font-['Aeroport:Regular',sans-serif] relative shrink-0 text-[18px]">£0</p>
                    </div>
                  </div>
                </div>

                {/* Discount/Promo section */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] w-full">Discount/Promo</p>
                  {promoApplied && (
                    <div className="bg-[#ebffe6] h-[44px] relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#34a21f] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-center justify-between leading-[20px] min-h-px min-w-px relative text-[#25272a] tracking-[-0.3px] whitespace-nowrap">
                            <p className="font-['Aeroport:Light',sans-serif] relative shrink-0 text-[16px]">SONSNEW40</p>
                            <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 text-[18px]">-£75.60</p>
                          </div>
                          <div className="relative shrink-0 size-[16px] cursor-pointer">
                            <div className="absolute inset-[18.75%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0006 10.0006">
                                <path d={svgPaths.p2662980} fill="#25272A" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="bg-[#25272a] h-px opacity-40 shrink-0 w-full" />

                {/* Total */}
                <div className="content-stretch flex items-start justify-between relative shrink-0 text-[#25272a] text-[22px] w-full whitespace-nowrap">
                  <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 tracking-[-1.2px]">Total</p>
                  <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] relative shrink-0 tracking-[-0.3px]">£113.40</p>
                </div>

                {/* Checkout button */}
                <button
                  onClick={onCheckout}
                  className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
                >
                  <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Checkout</p>
                </button>

                {/* Money back guarantee */}
                <div className="bg-[#f4eefd] relative rounded-[12px] shrink-0 w-full">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
                      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[80px]">
                        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgImage1} />
                        <div aria-hidden="true" className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
                      </div>
                      <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[22px] text-black tracking-[-1.2px] w-[min-content]">Money back guarantee</p>
                      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[16px] text-black tracking-[-0.3px] w-[min-content]">
                        Our clinically-backed treatments have been proven to halt hair loss for 94% of men. That's most guys. However, this does mean that a small few won't respond to the treatment.
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e4d4fc] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>

              {/* Disclaimer text */}
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative shrink-0 w-full">
                <p className="font-['Aeroport:Light',sans-serif] leading-[18px] text-[12px] tracking-[-0.2px] opacity-40 text-[#000000]">
                  Treatment fee relating to chosen prescription. Refunded if prescription is not approved.
                </p>
                <p className="font-['Aeroport:Light',sans-serif] leading-[18px] text-[12px] tracking-[-0.2px] opacity-40 text-[#000000]">
                  Treatment plans will only be dispensed if the prescriber approves you for this treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeedTimeCard() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[16px] shrink-0 w-[400px]">
      <div aria-hidden="true" className="absolute border border-[#d7d7d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
          <p className="font-['Aeroport:Bold',sans-serif] leading-[18px] relative shrink-0 text-[#25272a] text-[14px] tracking-[-0.3px] whitespace-nowrap">
            Need some time to think about it?
          </p>
        </div>
        <p className="font-['Aeroport:Light',sans-serif] leading-[18px] relative shrink-0 text-[#25272a] text-[14px] tracking-[-0.3px] w-full">
          We get it! To keep your details and plan handy for your return, quickly create an account.
        </p>
      </div>
      <div className="bg-[#25272a] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[9999px] shrink-0 size-[44px] cursor-pointer hover:bg-[#3a3a3a] transition-colors">
        <div className="relative shrink-0 size-[24px]">
          <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7532 15.7548">
              <path d={svgPathsArrow.p3f6c2200} fill="#F7F7F7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}