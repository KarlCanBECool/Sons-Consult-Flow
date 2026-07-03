import React, { useState } from "react";
import imgFrame16 from "figma:asset/2159ead89fb0d4a41fb7c00c18bcadbe9a4ee1c4.png";
import imgImage3 from "figma:asset/f150bc76379a8dab467bafe928a6f94353663adc.png";
import imgImage4 from "figma:asset/f17f60e674660310781be4bb6c7e0a27e75f8686.png";
import { StepScrollLayout } from "../StepScrollLayout";

interface PersonalDetailsStepProps {
  onNext: () => void;
}

function Checkbox({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-transparent border-none p-0 cursor-pointer shrink-0">
      <div className={`relative rounded-[8px] shrink-0 size-[24px] transition-colors ${checked ? "bg-[#00b692]" : "bg-[#fdfdff]"}`}>
        {!checked && <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />}
        <div className="absolute border-2 border-[#00b692] border-solid inset-0 rounded-[8px]" />
        {checked && (
          <svg className="absolute top-[4px] left-[4px] size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d="M2 8L6 12L14 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

function SubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#4300dd] content-stretch flex h-[52px] max-md:h-[58px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
    >
      <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">Get my personalised plan</p>
    </button>
  );
}

export function PersonalDetailsStep({ onNext }: PersonalDetailsStepProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [whatsappChecked, setWhatsappChecked] = useState(false);

  return (
    <StepScrollLayout>
          <div className="content-stretch flex gap-[24px] items-start justify-center min-h-px min-w-px relative max-md:flex-col max-md:gap-[32px] max-md:w-full">
            {/* Left side - Form */}
            <div className="h-full relative rounded-[32px] shrink-0 w-[559px] max-md:h-auto max-md:w-full">
              <div className="flex flex-col items-end justify-center rounded-[inherit] size-full max-md:items-stretch max-md:h-auto">
                <div className="content-stretch flex flex-col gap-[32px] items-end justify-center relative size-full px-[16px] pt-[56px] pb-[0px] max-md:h-auto max-md:items-stretch max-md:justify-start max-md:px-0 max-md:pt-0">
                  {/* Header + Inputs */}
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[8px] max-md:gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#4300dd] text-[16px] tracking-[-0.3px] w-full">Almost there!</p>
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[28px] text-black tracking-[-1.4px] w-full max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]">Last step before your personalised treatment plan</p>
                      </div>
                      <p className="font-['Aeroport:Light',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.3px] w-full">Please enter your details to continue</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Your first name</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter first name"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Your last name</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter last name"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Email address*</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Phone number*</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone number"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Date of birth*</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="text"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="dd/mm/yyyy"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Password*</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
                        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">Confirm password*</p>
                        <div className="bg-[#f7f7f7] h-[52px] relative rounded-[9999px] shrink-0 w-full">
                          <div className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                          <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter password"
                            className="font-['Aeroport:Light',sans-serif] leading-[20px] text-[16px] tracking-[-0.3px] text-[#25272a] placeholder:opacity-60 w-full h-full px-[16px] bg-transparent border-none outline-none"
                          />
                          <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <Checkbox checked={termsChecked} onClick={() => setTermsChecked(!termsChecked)} />
                      <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#020304] text-[16px] tracking-[-0.3px]">
                        I agree to the Terms & Conditions, Privacy Policy and confirm that I am male and at least 18 years of age.
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <Checkbox checked={marketingChecked} onClick={() => setMarketingChecked(!marketingChecked)} />
                      <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#020304] text-[16px] tracking-[-0.3px]">
                        I consent to receive marketing communications via email, SMS and Postal Mail.
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <Checkbox checked={whatsappChecked} onClick={() => setWhatsappChecked(!whatsappChecked)} />
                      <p className="flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#020304] text-[16px] tracking-[-0.3px]">
                        I consent to receive marketing communications via Whatsapp
                      </p>
                    </div>
                  </div>

                  {/* Submit button — desktop only; mobile button is a direct sibling below */}
                  <div className="max-md:hidden w-full">
                    <SubmitButton onClick={onNext} />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit button — mobile only (Figma mainContainer sibling before image) */}
            <div className="md:hidden w-full shrink-0">
              <SubmitButton onClick={onNext} />
            </div>

            {/* Right side - Image with testimonial */}
            <div className="relative rounded-[32px] shrink-0 w-[450px] overflow-hidden md:sticky md:top-[40px] md:self-start md:h-[calc(100vh-180px)] md:max-h-[800px] max-md:h-auto max-md:w-full max-md:p-[24px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-end">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover md:block hidden" src={imgFrame16} />
                <img alt="" className="absolute h-[111.68%] left-[-17.82%] max-w-none top-[-11.73%] w-[151.49%] max-md:block hidden" src={imgFrame16} />
              </div>
              <div className="flex flex-col items-center justify-end rounded-[inherit] size-full max-md:relative max-md:z-10 max-md:size-auto max-md:w-full">
                <div className="content-stretch flex flex-col items-center justify-end p-[24px] relative size-full max-md:p-0 max-md:w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[32px] relative rounded-[12px] w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Aeroport:Light','Noto_Sans:Light',sans-serif] leading-[20px] relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 300' }}>
                          "Great company with great products. I use the thickening clay every day and it's brilliant!! Communication and customer service is next level. Great company and I love using their products!"
                        </p>
                        <p className="font-['Aeroport:Bold',sans-serif] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] leading-[20px] tracking-[-0.3px] w-full">− Harry Llewellyn</p>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                        <div className="h-[20px] relative shrink-0 w-[106px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[110%] left-[-1.42%] max-w-none top-[-5%] w-[101.89%]" src={imgImage3} />
                          </div>
                        </div>
                        <div className="h-[23px] relative shrink-0 w-[100px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[244.57%] left-[-1%] max-w-none top-[-74.46%] w-full" src={imgImage4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </StepScrollLayout>
  );
}