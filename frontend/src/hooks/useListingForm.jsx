import { useState } from "react";

export const useListingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [completedSteps, setCompletedSteps] = useState([]);

  const markStepComplete = (step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prev) => [...prev, step]);
    }
  };

  const nextStep = (step) => {
    markStepComplete(step);
    setCurrentStep(step + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    // allow only if previous completed
    if (step === 1 || completedSteps.includes(step - 1)) {
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    completedSteps,
    nextStep,
    prevStep,
    goToStep,
  };
};
