// import React from "react";
// import StepCard from "./StepCard";
// import styled from "styled-components";

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 24px;

//   /* Tablet */
//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   /* Mobile */
//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;


// const StepsGrid = ({ steps, layout }) => {
//     let stepIndex = 0; // tracks card data

//     return (
//         <div className="row steps d-flex justify-content-center align-items-center w-100 my-5 px-0">
//             {layout.map((item, index) => {
//                 if (item === "card") {
//                     const step = steps[stepIndex];
//                     stepIndex++;

//                     return (
//                         <StepCard
//                             key={index}
//                             icon={step.icon}
//                             title={step.title}
//                             description={step.description}
//                         />
//                     );
//                 }

//                 // render empty column
//                 return (
//                     <div
//                         key={index}
//                         className="col-3"
//                         style={{ height: "300px" }}
//                     ></div>
//                 );
//             })}
//         </div>
//     );
// };

// export default StepsGrid;

import React from "react";
import StepCard from "./StepCard";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EmptyCell = styled.div`
  height: 300px;

  /* Hide empty gaps on tablet & mobile */
  @media (max-width: 992px) {
    display: none;
  }
`;

const StepsGrid = ({ steps, layout }) => {
    let stepIndex = 0;

    return (
        <GridWrapper className="my-5 px-2">
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

                return <EmptyCell key={index} />;
            })}
        </GridWrapper>
    );
};

export default StepsGrid;
