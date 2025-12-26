import styled from "styled-components";
import heroimg from "../../../assets/heroimg.png";

export const HeroWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url(${heroimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const PrimaryBtn = styled.button`
  background-color: ${(props) => props.theme.colors.orange};
  color: white;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryBtn = styled.button`
  background-color: ${(props) => props.theme.colors.teal};
  color: white;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;



const Hero = () => {
    return (
        <HeroWrapper>
            {/* Hero Image */}
            <HeroImage />

            {/* Hero Content */}
            <div className="container text-center my-5">
                <h1 className="fw-bold">
                    Find, Book & Earn With Parking Spaces Near You
                </h1>
                <p className="text-muted mt-2">
                    ParkSy connects parking space owners with drivers who need parking
                </p>

                <HeroButtons className="d-flex justify-content-center align-items-center">
                    <PrimaryBtn>Find Parking</PrimaryBtn>
                    <SecondaryBtn>List Your Space</SecondaryBtn>
                </HeroButtons>
            </div>
        </HeroWrapper>
    );
};

export default Hero;