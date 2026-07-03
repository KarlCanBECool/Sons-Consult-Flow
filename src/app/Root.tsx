import React, { useEffect, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { NavigationBar } from "./components/NavigationBar";
import { FormProvider } from "./context/FormContext";
import svgPaths from "../imports/ButtonPrimary/svg-eeafgay791";

const TOTAL_STEPS = 16;

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const match = location.pathname.match(/\/step\/(\d+)/);
  const currentStep = match ? parseInt(match[1], 10) : 0;

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = "#25272A";
  }, []);

  const goBack = useCallback(() => {
    const prev = currentStep === 13 ? 11 : Math.max(currentStep - 1, 0);
    navigate(`/step/${prev}`);
  }, [currentStep, navigate]);

  const handleSectionClick = useCallback((section: string) => {
    if (section === "plan") navigate("/step/13");
    else if (section === "final") navigate("/step/14");
  }, [navigate]);

  const showBack =
    currentStep >= 1 &&
    currentStep !== 12 &&
    currentStep !== 14 &&
    currentStep !== 15;

  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-start overflow-hidden relative size-full">
      {showBack && (
        <button
          onClick={goBack}
          className="fixed top-[132px] left-[64px] z-50 bg-[rgba(200,200,200,0.4)] backdrop-blur-sm flex items-center justify-center w-[40px] h-[40px] rounded-[9999px] border-none cursor-pointer hover:bg-[rgba(200,200,200,0.6)] transition-colors max-md:top-[104px] max-md:left-[16px]"
        >
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7509 15.7539">
              <path d={svgPaths.p596a600} fill="#1D1D1D" />
            </svg>
          </div>
        </button>
      )}
      <NavigationBar
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onBack={goBack}
        showBack={showBack}
        onSectionClick={handleSectionClick}
      />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 flex w-full min-h-0"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export function Root() {
  return (
    <FormProvider>
      <RootLayout />
    </FormProvider>
  );
}
