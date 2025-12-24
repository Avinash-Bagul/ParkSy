import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Faq = styled.header`
    background-color: ${(props) => props.theme.colors.lightGray};
`

export const FAQWrapper = styled.section`
  /* width: 100%;
  padding: 80px 0;
  background: linear-gradient(180deg, #b7a9a9, #9e8f8f); */
`;

export const FAQCard = styled.div`
  /* background: #e8dcdc; */
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    background: #f0e6e6;
  }
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h6 {
      margin: 0;
      font-weight: 500;
    }
    
    span {
        font-size: 20px;
        transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
        transition: 0.3s;
    }
    `;

export const Answer = styled.div`
  max-height: ${({ open }) => (open ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
  margin-top: ${({ open }) => (open ? "14px" : "0")};
  
  p {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
    }
    `;

const faqData = [
    {
        question: "What is ParkSy?",
        answer:
            "ParkSy connects parking space owners with drivers looking for parking. Owners list their available spaces with pricing and availability. Drivers search for parking near their destination, book a spot, and pay through the app. Everything happens in real-time for instant connections.",
    },
    {
        question: "How do I book a parking spot?",
        answer:
            "Search your destination, select an available spot, reserve it instantly, and pay securely through the app.",
    },
    {
        question: "Is payment secure?",
        answer:
            "Yes, all transactions are encrypted and processed through secure payment gateways.",
    },
    {
        question: "Can I extend parking time?",
        answer:
            "Yes, you can extend your parking duration directly from the app if the spot is available.",
    },
];
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <>
            <Faq className=" d-flex flex-column justify-content-around align-items-center my-5 py-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center my-5">
                    <div className="Herohead container mb-5">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>Frequently Asked Questions</h1>
                            <p>Got questions? We've got answers</p>
                        </div>
                    </div>






                    <FAQWrapper>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-10 col-12">
                                    {faqData.map((item, index) => (
                                        <FAQCard
                                            key={index}
                                            onClick={() =>
                                                setActiveIndex(activeIndex === index ? null : index)
                                            }
                                        >
                                            <QuestionRow open={activeIndex === index}>
                                                <h6>{item.question}</h6>
                                                <span>⌄</span>
                                            </QuestionRow>

                                            <Answer open={activeIndex === index}>
                                                <p>{item.answer}</p>
                                            </Answer>
                                        </FAQCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FAQWrapper>

                </div>
            </Faq>
        </>
    )
}

export default FAQ;