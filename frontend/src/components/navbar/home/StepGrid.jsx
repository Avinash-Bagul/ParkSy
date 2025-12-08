import React from "react";
import StepCard from "./StepCard";

const StepsGrid = ({ steps, layout }) => {
    let stepIndex = 0; // tracks card data

    return (
        <div className="row steps d-flex justify-content-center align-items-center w-100 my-5 px-0">
            {layout.map((item, index) => {
                if (item === "card") {
                    const step = steps[stepIndex];
                    stepIndex++;

                    return (
                        <StepCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                        />
                    );
                }

                // render empty column
                return (
                    <div
                        key={index}
                        className="col-3"
                        style={{ height: "300px" }}
                    ></div>
                );
            })}
        </div>
    );
};

export default StepsGrid;

