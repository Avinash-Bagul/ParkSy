import { useState } from "react";

export const useListingForm = (totalSteps = 6) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const markStepComplete = (step) => {
    setCompletedSteps((prev) =>
      prev.includes(step) ? prev : [...prev, step]
    );
  };

  const nextStep = () => {
    markStepComplete(currentStep);

    setCurrentStep((prev) =>
      Math.min(prev + 1, totalSteps - 1)
    );
  };

  const prevStep = () => {
    setCurrentStep((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  const goToStep = (step) => {
    // allow only if previous step completed
    if (step === 0 || completedSteps.includes(step - 1)) {
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