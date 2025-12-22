import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TestimonialCard from "./TestominalCard";

export const TestStyle = styled.section`
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.lightGray},
    ${(props) => props.theme.colors.white}
  );
    .h2{
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
    }
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

export const CardBox = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  height: 100%;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Stars = styled.div`
  color: #f5b50a;
`;



const users = [
    {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        comment: "I've been earning an extra $1,200 per month by renting out my driveway during work hours. ParkSy made it incredibly easy to set up and manage bookings.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Anjali Patel",
        rating: 4,
        comment: "As someone who commutes downtown every day, ParkSy has been a game-changer. I save 30 minutes every morning and pay half of what I used to.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Amit Verma",
        rating: 5,
        comment: "Living near the airport, I wasn't using my garage much. Now it's generating passive income while I travel. The platform is secure and reliable.",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        id: 4,
        name: "Neha Singh",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 4,
        comment: "Perfect for when I need to visit the city for meetings. I can book parking in advance and know exactly where I'm going. No stress, no hassle."
    },
    {
        id: 5,
        name: "Vikas Jain",
        image: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        comment: "Our office parking lot sits empty on weekends. ParkSy helps us generate revenue from it during off-hours. Great additional income stream!"
    }
];

const VISIBLE_COUNT = 3;

const Testimonials = () => {

    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev + VISIBLE_COUNT >= users.length ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const visibleCards = users.slice(
        index,
        index + VISIBLE_COUNT
    );

    return (
        <>
            <div className=" d-flex flex-column justify-content-around align-items-center my-5 py-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>What Our Users Say</h1>
                            <p>Join thousands of happy drivers and space owners</p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center my-5">
                        {visibleCards.map((user) => (
                            <div className="col-lg-4 col-md-6" key={user.id}>
                                <CardBox>
                                    <div className="d-flex align-items-center mb-3">
                                        <Avatar src={user.image} />
                                        <div className="ms-3">
                                            <h6 className="mb-0">{user.name}</h6>
                                            <Stars>
                                                {"★".repeat(user.rating)}
                                            </Stars>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-muted">{user.comment}</p>
                                </CardBox>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials;