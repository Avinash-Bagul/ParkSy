import React from "react";
import styled from "styled-components";

const Whystyle = styled.section`
  background-color: ${(props) => props.theme.colors.lightGray};
  .history{
    background: ${(props) => props.theme.colors.gradiant};
     border-radius: 14px;
  padding: 30px 20px;
  color: white;
  }
  p{
    margin: 0;
    padding: 0;
  }
`

export const WhyCard = styled.div`
  position: relative;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 14px;
  padding: 30px 20px;
  overflow: hidden;
  transition: all 0.35s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
  }

  &:before {
    content: "";
    position: absolute;
    top: -120px;
    left: -120px;
    width: 300px;
    height: 300px;
    background: ${(props) => props.$accent};
    border-radius: 50%;
    opacity: 0.15;
    transition: 0.4s;
  }

  &:hover:before {
    top: -80px;
    left: -80px;
  }

  h4 {
    position: relative;
    z-index: 1;
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
  }

  ul {
    position: relative;
    z-index: 1;
    padding-left: 18px;
  }

  li {
    margin-bottom: 8px;
    font-size: 15px;
  }

`;




// whyData.js
export const whyCards = [
    {
        title: "Save Money",
        color: "#ff7a00",
        points: [
            "Up to 60% cheaper than street meters",
            "No hidden fees or surprise charges",
            "Dynamic pricing for best deals",
            "Compare prices instantly",
        ],
    },
    {
        title: "Save Time",
        color: "#00b4d8",
        points: [
            "Book in under 30 seconds",
            "Pre-book before you leave",
            "GPS navigation to your spot",
            "No more circling blocks",
        ],
    },
    {
        title: "Eco-Friendly",
        color: "#2ec4b6",
        points: [
            "Reduce idle driving emissions",
            "Optimize unused urban spaces",
            "Community impact metrics",
        ],
    },
    {
        title: "Community-Driven",
        color: "#8338ec",
        points: [
            "Connect with local residents",
            "Verified trusted members",
            "Transparent rating system",
            "Support local economies",
        ],
    },
];




const Why = () => {
    return (
        <>
            <Whystyle className=" d-flex flex-column justify-content-around align-items-center my-5 py-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container mb-5">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>Why Choose ParkSy?</h1>
                            <p>More than just a parking app it's a smarter way to move through your city</p>
                        </div>
                    </div>
                    {/* <div className="row my-5 py-5 g-3 px-0"> */}
                    <div className="row my-5 pb-5  g-4 px-0">
                        {whyCards.map((card, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-lg-3"
                            >
                                <WhyCard $accent={card.color}>
                                    <h4>{card.title}</h4>
                                    <ul>
                                        {card.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </WhyCard>
                            </div>
                        ))}
                        {/* </div> */}



                    </div>

                    <div className="history w-100 d-flex justify-content-between align-items-center my-5">
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>$800</h3>
                            <p>Avg. saved per Year</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>25Hr</h3>
                            <p>Time Saved Annualy</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>50K+</h3>
                            <p>Happy Users</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>4.9⭐</h3>
                            <p>Rating on Webapp</p>
                        </div>
                    </div>
                </div>
            </Whystyle>
        </>
    )
}

export default Why;
