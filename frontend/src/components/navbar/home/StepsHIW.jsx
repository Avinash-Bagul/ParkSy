import React from "react";
import StepsGrid from "./StepGrid";
import SuggestionBanner from "./SuggestionBanner";

const StepsHIW = () => {

    const driverSteps = [
        {
            icon: "search-outline",
            title: "Search For Parking",
            description: "Enter your destination and find available parking spots nearby in real-time",
            emptyAfter: true
        },
        {
            icon: "card-outline",
            title: "Park & Pay",
            description: "Navigate to your spot and pay securely through the app.",
            emptyAfter: true
        },
        {
            icon: "location-outline",
            title: "Choose and Reserve",
            description: "View spot details, ratings, and directions. Reserve instantly with one tap.",
            emptyAfter: true
        },
        {
            icon: "checkmark-done-outline",
            title: "Done",
            description: "Your parking is confirmed. Extend time if needed or check out early.",
            emptyAfter: false
        },
        [
            {
                title:"Ready to find Parking?",
                subtitle:"Join 50,000+ drivers who park smarter with ParkSy",
                buttonText:"Find Parking"
            }
        ]
    ];

    const ownerSteps = [
        {
            icon: "reader-outline",
            title: "List Your Space",
            description: "Enter your destination and find available parking spots nearby in real-time",
            emptyAfter: true
        },
        {
            icon: "card-outline",
            title: "Park & Pay",
            description: "Navigate to your spot and pay securely through the app.",
            emptyAfter: true
        },
        {
            icon: "location-outline",
            title: "Choose and Reserve",
            description: "View spot details, ratings, and directions. Reserve instantly with one tap.",
            emptyAfter: true
        },
        {
            icon: "checkmark-done-outline",
            title: "Done",
            description: "Your parking is confirmed. Extend time if needed or check out early.",
            emptyAfter: false
        }
    ];


    const layoutPattern = [
        "card",
        "empty",
        "card",
        "empty",
        "empty",
        "card",
        "empty",
        "card"
    ];

    const stepsToShow = mode === "driver" ? driverSteps : ownerSteps;

    return (
        <>
            <StepsGrid steps={stepsToShow} layout={layoutPattern} />

            <SuggestionBanner
                title="Ready to find Parking?"
                subtitle="Join 50,000+ drivers who park smarter with ParkSy"
                buttonText="Find Parking"
            />

        </>
    )
}

export default StepsHIW;

