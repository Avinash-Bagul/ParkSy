const steps = [
  "Basic Info",
  "Location",
  "Pricing",
  "Amenities",
  "Rules",
];

export default function Stepper({
  currentStep,
  completedSteps,
  goToStep,
}) {
  return (
    <div className="flex gap-4">
      {steps.map((label, index) => {
        const step = index + 1;

        const isCompleted = completedSteps.includes(step);

        return (
          <div
            key={step}
            onClick={() => goToStep(step)}
            className={`
              cursor-pointer px-4 py-2 rounded
              ${currentStep === step ? "bg-blue-500 text-white" : ""}
              ${isCompleted ? "bg-green-500 text-white" : "bg-gray-200"}
            `}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
