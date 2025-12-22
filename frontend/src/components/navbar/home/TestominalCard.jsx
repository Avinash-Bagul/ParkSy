// import { CardWrapper, Avatar, Stars } from "../styles/Testimonial.styles";
import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const Name = styled.h5`
  margin-bottom: 5px;
  font-weight: 600;
`;

export const Comment = styled.p`
  color: #555;
  font-size: 15px;
  margin-top: 15px;
`;

export const Stars = styled.div`
  color: #fbbf24;
`;



const TestimonialCard = ({ user }) => {
    return (
        <CardWrapper>
            <Avatar src={user.image} alt={user.name} />
            <h5 className="fw-bold">{user.name}</h5>

            <Stars>
                {"★".repeat(user.rating)}
                {"☆".repeat(5 - user.rating)}
            </Stars>

            <p className="mt-3 text-muted">{user.comment}</p>
        </CardWrapper>
    );
};

export default TestimonialCard;
