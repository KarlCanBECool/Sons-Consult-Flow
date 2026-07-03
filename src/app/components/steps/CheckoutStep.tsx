import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../../imports/svg-n422g5q90o";
import svgPathsCheckout2 from "../../../imports/svg-85o8u63ty9";
import svgPathsCheckout3 from "../../../imports/svg-y31vy7aob5";
import svgPathsBack from "../../../imports/svg-o3b0qf83q9";
import imgFrame64 from "figma:asset/e493d6895d865c0337ade71bbb76d37220029754.png";
import { WidePageLayout } from "../WidePageLayout";
import { h1MobileScale } from "../../constants/layout";

// ─── SVG Icons ───

function CaretRightIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[14.05%_26.55%_14.06%_32.8%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50377 11.5026">
          <path d={svgPaths.p9397f00} fill="var(--fill-0, #25272A)" />
        </svg>
      </div>
    </div>
  );
}

function CaretDownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[32.8%_14.05%_26.55%_14.05%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5039 6.50377">
          <path d={svgPathsCheckout2.p12bd8c80} fill="var(--fill-0, #25272A)" />
        </svg>
      </div>
    </div>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[9.37%_9.37%_12.5%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5004 12.5004">
          <path d={svgPathsCheckout2.p25e8d180} fill="var(--fill-0, #4300DD)" />
        </svg>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[14.05%_26.55%_14.06%_32.8%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50377 11.5026">
          <path d={svgPathsBack.p9397f00} fill="var(--fill-0, #25272A)" />
        </svg>
      </div>
    </div>
  );
}

// ─── Shared Input Component ───

function InputField({
  label,
  value,
  placeholder,
  onChange,
  isPlaceholder,
  suffix,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  isPlaceholder?: boolean;
  suffix?: React.ReactNode;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">
        {label}
      </p>
      <div className="bg-white h-[52px] relative rounded-[9999px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <input
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              className={`flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] tracking-[-0.3px] bg-transparent border-none outline-none w-full ${
                isPlaceholder && !value ? "text-[#25272a] opacity-70" : "text-[#25272a]"
              }`}
            />
            {suffix}
          </div>
        </div>
        <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}

function InputFieldHalf({
  label,
  value,
  placeholder,
  onChange,
  isPlaceholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  isPlaceholder?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative">
      <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] tracking-[-0.3px] w-full">
        {label}
      </p>
      <div className="bg-white h-[52px] relative rounded-[9999px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <input
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              className={`flex-[1_0_0] font-['Aeroport:Light',sans-serif] leading-[20px] not-italic text-[16px] tracking-[-0.3px] bg-transparent border-none outline-none w-full ${
                isPlaceholder && !value ? "text-[#25272a] opacity-70" : "text-[#25272a]"
              }`}
            />
          </div>
        </div>
        <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}

// ─── Breadcrumb ───

function Breadcrumb({ activeStep }: { activeStep: number }) {
  const steps = ["Account", "Shipping", "Payment"];
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      {steps.map((step, i) => (
        <span key={step} className="contents">
          <p
            className={`font-['Aeroport:${i === activeStep ? "Bold" : "Light"}',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25272a] text-[14px] tracking-[-0.3px] whitespace-nowrap ${
              i !== activeStep ? "opacity-60" : ""
            }`}
          >
            {step}
          </p>
          {i < steps.length - 1 && <CaretRightIcon />}
        </span>
      ))}
    </div>
  );
}

// ─── Edit Button ───

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer" onClick={onClick}>
      <EditIcon />
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4300dd] text-[16px] tracking-[-0.3px] whitespace-nowrap">
        Edit
      </p>
    </div>
  );
}

// ─── Summary Section (completed step display) ───

function CompletedSection({
  title,
  content,
  onEdit,
}: {
  title: string;
  content: React.ReactNode;
  onEdit: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] whitespace-nowrap">
            {title}
          </p>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            {content}
            <EditButton onClick={onEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Order Overview Sidebar ───

function OrderOverview() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[40px] items-end justify-end py-[40px] px-[40px] relative rounded-[24px] shrink-0 w-full">
      {/* Order details */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#25272a] text-[22px] tracking-[-1.2px] w-full">
          Order overview
        </p>
        <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
          {/* Product image */}
          <div className="h-[101px] relative shrink-0 w-[180px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[178.61%] left-[-10.59%] max-w-none top-[-47.8%] w-[100.02%]" src={imgFrame64} />
            </div>
          </div>
          {/* Plan info */}
          <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[#25272a] tracking-[-0.3px] w-full whitespace-nowrap">
            <p className="font-['Aeroport:Light',sans-serif] relative shrink-0 text-[16px]">Your plan</p>
            <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 text-[18px]">Finasteride and Minoxidil</p>
          </div>
          {/* Frequency */}
          <div className="content-stretch flex items-start justify-between leading-[20px] relative shrink-0 text-[#25272a] tracking-[-0.3px] w-full whitespace-nowrap">
            <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Frequency</p>
            <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 text-[18px]">6 months</p>
          </div>
        </div>
        {/* Pricing */}
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[20px] relative shrink-0 text-[#25272a] tracking-[-0.3px] w-full whitespace-nowrap">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subscription</p>
            <p className="font-['Aeroport:Bold',sans-serif] relative shrink-0 text-[18px]">£189.00</p>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Subtotal</p>
            <p className="font-['Aeroport:Regular',sans-serif] relative shrink-0 text-[18px]">£189.00</p>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-['Aeroport:Light',sans-serif] not-italic relative shrink-0 text-[16px]">Shipping</p>
            <p className="font-['Aeroport:Regular',sans-serif] relative shrink-0 text-[18px]">£0</p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="bg-[#25272a] h-px opacity-40 shrink-0 w-full" />
      {/* Total */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 text-[#25272a] text-[22px] w-full whitespace-nowrap">
        <p className="font-['Aeroport:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 tracking-[-1.2px]">Total</p>
        <p className="font-['Aeroport:Bold',sans-serif] leading-[20px] relative shrink-0 tracking-[-0.3px]">£113.40</p>
      </div>
    </div>
  );
}

// ─── Step 1: Account ───

function AccountForm({
  data,
  onChange,
  onSubmit,
}: {
  data: any;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="content-stretch flex flex-col gap-[32px] items-end w-full"
    >
      <Breadcrumb activeStep={0} />
      {/* Title */}
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] relative shrink-0 text-[#25272a] text-[28px] tracking-[-1.4px] w-full">
            First, let's create an account
          </p>
        </div>
      </div>
      {/* Inputs */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <InputFieldHalf label="First name" value={data.firstName} placeholder="Enter first name" onChange={(v) => onChange("firstName", v)} isPlaceholder />
          <InputFieldHalf label="Last name" value={data.lastName} placeholder="Enter last name" onChange={(v) => onChange("lastName", v)} isPlaceholder />
        </div>
        <InputField label="Email address" value={data.email} placeholder="Enter email address" onChange={(v) => onChange("email", v)} isPlaceholder />
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <InputFieldHalf label="Phone" value={data.phone} placeholder="Enter phone number" onChange={(v) => onChange("phone", v)} isPlaceholder />
          <InputFieldHalf label="Date of Birth" value={data.dob} placeholder="e.g. 01/01/90" onChange={(v) => onChange("dob", v)} isPlaceholder />
        </div>
        <InputField label="Password" value={data.password} placeholder="Enter password" onChange={(v) => onChange("password", v)} isPlaceholder />
        <InputField label="Confirm password" value={data.confirmPassword} placeholder="Enter password again" onChange={(v) => onChange("confirmPassword", v)} isPlaceholder />
      </div>
      {/* Submit button */}
      <button
        onClick={onSubmit}
        className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
      >
        <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">
          Create account
        </p>
      </button>
    </motion.div>
  );
}

// ─── Step 2: Shipping ───

function ShippingForm({
  accountData,
  data,
  onChange,
  onSubmit,
  onEditAccount,
}: {
  accountData: any;
  data: any;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onEditAccount: () => void;
}) {
  const [diffAddress, setDiffAddress] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="content-stretch flex flex-col gap-[32px] items-end w-full"
    >
      <Breadcrumb activeStep={1} />
      {/* Completed: Contact */}
      <CompletedSection
        title="Contact"
        content={
          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25272a] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            {accountData.firstName} {accountData.lastName}
          </p>
        }
        onEdit={onEditAccount}
      />
      {/* Shipping title */}
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#25272a] w-full">
          <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] min-w-full relative shrink-0 text-[28px] tracking-[-1.4px]">
            Shipping address
          </p>
          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            All fields required unless otherwise stated
          </p>
        </div>
      </div>
      {/* Shipping inputs */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[24px] items-start relative shrink-0 w-full">
          <InputFieldHalf label="First name" value={data.firstName} placeholder="Enter first name" onChange={(v) => onChange("firstName", v)} isPlaceholder />
          <InputFieldHalf label="Last name" value={data.lastName} placeholder="Enter last name" onChange={(v) => onChange("lastName", v)} isPlaceholder />
        </div>
        <InputField label="Address line 1" value={data.address1} placeholder="Start typing..." onChange={(v) => onChange("address1", v)} isPlaceholder />
        <InputField label="Address line 2 (optional)" value={data.address2} placeholder="Enter address line 2" onChange={(v) => onChange("address2", v)} isPlaceholder />
        <InputField label="City" value={data.city} placeholder="Enter city" onChange={(v) => onChange("city", v)} isPlaceholder />
        <InputField
          label="Country"
          value={data.country}
          placeholder="United Kingdom"
          onChange={(v) => onChange("country", v)}
          isPlaceholder
          suffix={<CaretDownIcon />}
        />
        <InputField label="County/State" value={data.county} placeholder="Enter county/state" onChange={(v) => onChange("county", v)} isPlaceholder />
        <InputField label="ZIP/Postal Code" value={data.postalCode} placeholder="Enter ZIP/postal code" onChange={(v) => onChange("postalCode", v)} isPlaceholder />
      </div>
      {/* Checkbox */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        <div
          className="relative rounded-[8px] shrink-0 size-[28px] cursor-pointer bg-[#fdfdff]"
          onClick={() => setDiffAddress(!diffAddress)}
        >
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.11)]" />
          <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 rounded-[8px] ${diffAddress ? "border-[#00b692]" : "border-[#00b692]"}`} />
          {diffAddress && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="#00b692" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Aeroport:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020304] text-[16px] tracking-[-0.3px]">
          <p className="leading-[20px]">Use a different shipping address?</p>
        </div>
      </div>
      {/* Submit button */}
      <button
        onClick={onSubmit}
        className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
      >
        <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">
          Next
        </p>
      </button>
    </motion.div>
  );
}

// ─── Step 3: Payment ───

function PaymentForm({
  accountData,
  shippingData,
  data,
  onChange,
  onSubmit,
  onEditAccount,
  onEditShipping,
}: {
  accountData: any;
  shippingData: any;
  data: any;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onEditAccount: () => void;
  onEditShipping: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="content-stretch flex flex-col gap-[32px] items-end w-full"
    >
      <Breadcrumb activeStep={2} />
      {/* Completed: Contact */}
      <CompletedSection
        title="Contact"
        content={
          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            {accountData.email}
          </p>
        }
        onEdit={onEditAccount}
      />
      {/* Completed: Shipping */}
      <CompletedSection
        title="Shipping"
        content={
          <div className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[#25272a] text-[16px] text-right tracking-[-0.3px] whitespace-nowrap">
            <p className="mb-[3px]">{shippingData.firstName} {shippingData.lastName}</p>
            {shippingData.address1 && <p className="mb-[3px]">{shippingData.address1}</p>}
            {shippingData.address2 && <p className="mb-[3px]">{shippingData.address2}</p>}
            {shippingData.city && <p className="mb-[3px]">{shippingData.city}</p>}
            {shippingData.postalCode && <p>{shippingData.postalCode}</p>}
          </div>
        }
        onEdit={onEditShipping}
      />
      {/* Payment title */}
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#25272a] w-full">
          <p className="font-['Aeroport:Bold',sans-serif] leading-[34px] min-w-full relative shrink-0 text-[28px] tracking-[-1.4px]">
            Payment
          </p>
          <p className="font-['Aeroport:Light',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            All fields required unless otherwise stated
          </p>
        </div>
      </div>
      {/* Payment inputs */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <InputField label="Card Number" value={data.cardNumber} placeholder="1234 1234 1234 1234" onChange={(v) => onChange("cardNumber", v)} isPlaceholder />
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <InputFieldHalf label="Expiry date" value={data.expiry} placeholder="MM/YY" onChange={(v) => onChange("expiry", v)} isPlaceholder />
          <InputFieldHalf label="Security code" value={data.cvc} placeholder="CVC" onChange={(v) => onChange("cvc", v)} isPlaceholder />
        </div>
      </div>
      {/* Disclaimer */}
      <p className="font-['Aeroport:Light',sans-serif] leading-[20px] min-w-full not-italic opacity-60 relative shrink-0 text-[16px] text-black tracking-[-0.3px]">
        By providing your card information, you allow Sons to charge your card for future payments in accordance with their terms.
      </p>
      {/* Submit button */}
      <button
        onClick={onSubmit}
        className="bg-[#4300dd] content-stretch flex h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:bg-[#3600b3] transition-colors border-none"
      >
        <p className="font-['Aeroport:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.4px] whitespace-nowrap">
          Place Order
        </p>
      </button>
    </motion.div>
  );
}

// ─── Main Checkout Step ───

export function CheckoutStep({ onBack }: { onBack?: () => void }) {
  const [checkoutStep, setCheckoutStep] = useState(0);

  const [accountData, setAccountData] = useState({
    firstName: "Karl",
    lastName: "Martin",
    email: "martinjkarl@gmail.com",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [shippingData, setShippingData] = useState({
    firstName: "Karl",
    lastName: "Martin",
    address1: "",
    address2: "",
    city: "",
    country: "United Kingdom",
    county: "England",
    postalCode: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const updateAccount = (field: string, value: string) => {
    setAccountData((prev) => ({ ...prev, [field]: value }));
  };

  const updateShipping = (field: string, value: string) => {
    setShippingData((prev) => ({ ...prev, [field]: value }));
  };

  const updatePayment = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <WidePageLayout
      className="gap-[24px]"
      backButton={
        onBack ? (
          <div className="absolute left-nav-gutter top-[32px] z-10 max-lg:left-page-gutter max-lg:top-[16px]">
            <button
              onClick={onBack}
              className="relative shrink-0 size-[32px] cursor-pointer bg-transparent border-none p-0 hover:opacity-60 transition-opacity"
            >
              <div className="absolute inset-[17.18%_10.94%_17.18%_10.93%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0012 21.0052">
                  <path d={svgPathsBack.p2d947a00} fill="#25272A" />
                </svg>
              </div>
            </button>
          </div>
        ) : undefined
      }
    >
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1300px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px not-italic relative text-[#25272a] text-center whitespace-nowrap">
                <p className={`font-['Aeroport:Bold',sans-serif] leading-[40px] relative shrink-0 text-[36px] tracking-[-1.4px] ${h1MobileScale}`}>
                  Secure checkout
                </p>
                <p className="font-['Aeroport:Light',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.3px]">
                  Please fill in your details to complete the checkout process.
                </p>
              </div>
            </div>

            {/* Content: form + sidebar */}
            <div className="content-stretch flex gap-[24px] items-start max-w-[1300px] relative shrink-0 w-full max-lg:flex-col max-lg:gap-[24px]">
              {/* Left column - form card */}
              <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[32px] items-end py-[40px] px-[40px] relative rounded-[24px] flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {checkoutStep === 0 && (
                    <AccountForm
                      key="account"
                      data={accountData}
                      onChange={updateAccount}
                      onSubmit={() => setCheckoutStep(1)}
                    />
                  )}
                  {checkoutStep === 1 && (
                    <ShippingForm
                      key="shipping"
                      accountData={accountData}
                      data={shippingData}
                      onChange={updateShipping}
                      onSubmit={() => setCheckoutStep(2)}
                      onEditAccount={() => setCheckoutStep(0)}
                    />
                  )}
                  {checkoutStep === 2 && (
                    <PaymentForm
                      key="payment"
                      accountData={accountData}
                      shippingData={shippingData}
                      data={paymentData}
                      onChange={updatePayment}
                      onSubmit={() => {
                        // Place order action
                      }}
                      onEditAccount={() => setCheckoutStep(0)}
                      onEditShipping={() => setCheckoutStep(1)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Right column - order overview */}
              <div className="flex-1 min-w-0 max-w-[400px] max-lg:max-w-none max-lg:w-full">
                <OrderOverview />
              </div>
            </div>
          </div>
    </WidePageLayout>
  );
}