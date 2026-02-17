import Stepper from "../../components/OwnerComp/listingComp/Stepper.jsx";
import Step1 from "../../components/OwnerComp/listingComp/steps/Step1.jsx";
import Step2 from "../../components/OwnerComp/listingComp/steps/Step2.jsx";
import Step3 from "../../components/OwnerComp/listingComp/steps/Step3.jsx";
import Step4 from "../../components/OwnerComp/listingComp/steps/Step4.jsx";
import Step5 from "../../components/OwnerComp/listingComp/steps/Steps5.jsx";

import { useListingForm } from "../../hooks/useListingForm.jsx";

export default function ListingPage() {
    const {
        currentStep,
        completedSteps,
        nextStep,
        goToStep,
    } = useListingForm();

    return (
        <div>
            <Stepper
                currentStep={currentStep}
                completedSteps={completedSteps}
                goToStep={goToStep}
            />

            {currentStep === 1 && <Step1 nextStep={nextStep} />}
            {currentStep === 2 && <Step2 nextStep={nextStep} />}
            {currentStep === 3 && <Step3 nextStep={nextStep} />}
            {currentStep === 4 && <Step4 nextStep={nextStep} />}
            {currentStep === 5 && <Step5 nextStep={nextStep} />}
        </div>
    );
}

