// import { Link } from "react-router-dom";

// const steps = [
//   "Basic Info",
//   "Location",
//   "Pricing",
//   "Amenities",
//   "Rules",
// ];

// export default function Stepper({
//   currentStep,
//   completedSteps,
//   goToStep,
// }) {
//   return (
//     <div className="flex gap-4">
//       {steps.map((label, index) => {
//         const step = index + 1;

//         const isCompleted = completedSteps.includes(step);

//         return (
//           <>
//             {/* <Link to={`/${step}`} */}
//             <div
//               key={step}
//               onClick={() => goToStep(step)}
//               className={`
//               cursor-pointer px-4 py-2 rounded
//               ${currentStep === step ? "bg-blue-500 text-white" : ""}
//               ${isCompleted ? "bg-green-500 text-white" : "bg-gray-200"}
//             `}
//             >
//               {label}
//               {/* </Link> */}
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }



import React, { useState } from "react";
import styled from "styled-components";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Steps5";

const Container = styled.div`
  border-radius: 12px;
`;

const StepItem = styled.div`
  position: relative;
`;

const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  background: ${(props) => {
    if (props.active) return props.theme?.colors?.orange || "#ff7a00";
    if (props.completed) return "#ff7a00"; // green for completed
    return "#e0e0e0";
  }};

  color: white;
  z-index: 2;
`;

const Label = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#000" : "#9e9e9e")};
  z-index: 9999;
`;

const SubLabel = styled.div`
  font-size: 12px;
  color: #9e9e9e;
`;

const Line = styled.div`
  position: absolute;
  top: 22px;
  left: 50%;
  width: 100%;
  height: 4px;
  background: ${(props) =>
    props.active ? props.theme?.colors?.orange || "#28a745" : "#e0e0e0"};
  z-index: 0;
`;

const steps = [
  { title: "Basic Info", sub: "Tell us about your space" },
  { title: "Location", sub: "Where is your space" },
  { title: "Pricing", sub: "Set your rates" },
  { title: "Availability", sub: "When it is available?" },
  { title: "Amenities", sub: "What features do you offer?" },
  { title: "Details & Rules", sub: "Final touches" }
];

export default function Stepper({
  currentStep,
  completedSteps,
  nextStep,
  prevStep,
  goToStep,
}) {
  return (
    <Container className="container py-5">

      <div className="d-flex justify-content-between align-items-start position-relative">

        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isActive = index === currentStep;

          return (
            <>
              <StepItem
                key={index}
                className="text-center flex-fill"
                onClick={() => goToStep(index)}
                style={{ cursor: "pointer" }}
              >
                <Circle
                  active={isActive}
                  completed={isCompleted}
                >
                  {isCompleted ? "✓" : index + 1}
                </Circle>

                <Label active={isCompleted || isActive}>
                  {step.title}
                </Label>

                <SubLabel>{step.sub}</SubLabel>

                {index !== steps.length - 1 && (
                  <Line active={index < currentStep} />
                )}
              </StepItem>

            </>
          );
        })}

      </div>



      {currentStep === 0 && <Step1 />}

      {currentStep === 1 && <Step2 />}

      {currentStep === 2 && <Step3 />}

      {currentStep === 3 && <Step4 />}

      {currentStep === 4 && <Step5 />}


      {/* Buttons */}
      <div className="mt-5 d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>

        <button
          className="btn btn-success"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

    </Container >
  );
}



