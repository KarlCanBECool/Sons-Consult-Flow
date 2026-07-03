import React from "react";
import { useParams, useNavigate, Navigate } from "react-router";
import { useFormContext } from "./context/FormContext";
import { WelcomeStep } from "./components/steps/WelcomeStep";
import { AcceptStep } from "./components/steps/AcceptStep";
import { HairLossTypeStep } from "./components/steps/HairLossTypeStep";
import { RadioQuestionStep } from "./components/steps/RadioQuestionStep";
import { CheckboxQuestionStep } from "./components/steps/CheckboxQuestionStep";
import { TestimonialsStep } from "./components/steps/TestimonialsStep";
import { DisclaimerStep } from "./components/steps/DisclaimerStep";
import { PersonalDetailsStep } from "./components/steps/PersonalDetailsStep";
import { LoadingStep } from "./components/steps/LoadingStep";
import { PlanStep } from "./components/steps/PlanStep";
import { ReviewStep } from "./components/steps/ReviewStep";
import { CheckoutStep } from "./components/steps/CheckoutStep";

const TOTAL_STEPS = 16;

export function StepPage() {
  const { step } = useParams<{ step: string }>();
  const navigate = useNavigate();
  const { formData, saveAnswer } = useFormContext();

  const currentStep = parseInt(step ?? "0", 10);

  if (isNaN(currentStep) || currentStep < 0 || currentStep >= TOTAL_STEPS) {
    return <Navigate to="/step/0" replace />;
  }

  const goNext = () => navigate(`/step/${Math.min(currentStep + 1, TOTAL_STEPS - 1)}`);
  const goBack = () => navigate(`/step/${currentStep === 13 ? 11 : Math.max(currentStep - 1, 0)}`);

  switch (currentStep) {
    case 0:
      return <WelcomeStep onNext={goNext} />;
    case 1:
      return <AcceptStep onNext={goNext} />;
    case 2:
      return (
        <HairLossTypeStep
          onNext={goNext}
          savedValue={formData["hairloss-type"]}
          onSaveAnswer={(v: number) => saveAnswer("hairloss-type", v)}
        />
      );
    case 3:
      return (
        <RadioQuestionStep
          question="How did your hair loss start?"
          options={[
            "Gradually over months and years",
            "Suddenly (it fell out over a matter of days or a few weeks)",
          ]}
          onNext={goNext}
          savedValue={formData["hair-start"]}
          onSaveAnswer={(v: number) => saveAnswer("hair-start", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
        />
      );
    case 4:
      return (
        <RadioQuestionStep
          question="Do you have any issues with your mood or are you taking antidepressants?"
          options={["Yes", "No"]}
          onNext={goNext}
          savedValue={formData["mood"]}
          onSaveAnswer={(v: number) => saveAnswer("mood", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
        />
      );
    case 5:
      return (
        <CheckboxQuestionStep
          question="Have you ever taken any of the below medicines before?"
          options={[
            "Finasteride or Propecia",
            "Minoxidil or Regaine",
            "Topical Finasteride Minoxidil Combination",
            "None of these",
          ]}
          onNext={goNext}
          savedValue={formData["medicines"]}
          onSaveAnswer={(v: Set<number>) => saveAnswer("medicines", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
        />
      );
    case 6:
      return (
        <RadioQuestionStep
          question="What treatment type do you prefer?"
          options={[
            "Topical sprays - (apply to scalp)",
            "Oral capsule - (take once a day)",
            "I don't mind - I want what's most effective for me",
          ]}
          onNext={goNext}
          savedValue={formData["treatment"]}
          onSaveAnswer={(v: number) => saveAnswer("treatment", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
        />
      );
    case 7:
      return (
        <CheckboxQuestionStep
          question="Do any of the following apply to you?"
          options={[
            "High Blood Pressure",
            "Cardiovascular Disease (incl. Heart Attack, Rhythm, Valve Disorder or Stroke)",
            "Severe Kidney or Liver Disease",
            "Prostate Disease, Male Breast Cancer or Testicular Cancer",
            "Rheumatoid Arthritis, Systemic Lupus or on Methotrexate",
            "Scalp Disorders (including Scalp Psoriasis, Eczema, Dermatitis or Infection)",
            "Phaeochromocytoma",
            "Diagnosed Lactose Allergy",
            "Sexual Dysfunction",
            "None of these",
          ]}
          onNext={goNext}
          savedValue={formData["conditions"]}
          onSaveAnswer={(v: Set<number>) => saveAnswer("conditions", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
        />
      );
    case 8:
      return (
        <CheckboxQuestionStep
          question="What are your hair loss goals?"
          options={[
            "Stop hair loss",
            "Regrow hair",
            "Improve hairline",
            "All of the above",
          ]}
          onNext={goNext}
          savedValue={formData["goals"]}
          onSaveAnswer={(v: Set<number>) => saveAnswer("goals", v)}
          tooltip={{ title: "Why do we ask?", description: "Description" }}
          showInputs={false}
        />
      );
    case 9:
      return <TestimonialsStep onNext={goNext} />;
    case 10:
      return <DisclaimerStep onNext={goNext} />;
    case 11:
      return <PersonalDetailsStep onNext={goNext} />;
    case 12:
      return <LoadingStep onNext={goNext} />;
    case 13:
      return <PlanStep onNext={goNext} onBack={goBack} />;
    case 14:
      return <ReviewStep onGoToPlan={() => navigate("/step/13")} onCheckout={goNext} />;
    case 15:
      return <CheckoutStep onBack={goBack} />;
    default:
      return <Navigate to="/step/0" replace />;
  }
}
