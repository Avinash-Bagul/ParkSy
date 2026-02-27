import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BookingItem from "../../components/driver/dashboard/BookingItem";
import SearchBar from "../../components/driver/dashboard/searchbar";
import axios from "axios";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API;

const PageWrapper = styled.div`
  background: #f5f7fb;
  min-height: 100vh;
  padding: 40px 0;
`;

const GradientBtn = styled.button`
  background: ${(props) => props.theme.colors.orange};
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
  a{
    text-decoration: none;
    color: white;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(p) => p.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

// const SearchBar1 = styled.div`
//   background: white;
//   padding: 18px;
//   border-radius: 16px;
//   margin-top: 25px;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.05);
// `;

const TabsWrapper = styled.div`
  background: #e9ecef;
  padding: 6px;
  border-radius: 14px;
  display: inline-flex;
  margin-top: 20px;
`;

const Tab = styled.div`
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  background: ${(p) => (p.active ? "white" : "transparent")};
`;

const BookingCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 20px;
  margin-top: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;



export default function MyBookings() {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            console.log(API);
            const res = await axios.get(`${API}/api/booking/getAllBookings`, { withCredentials: true });
            setBookingData(res.data.bookings);

        }
        fetch()
    }, [])


    return (
        <PageWrapper>
            <div className="container">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                    <div>
                        <h1 className="fw-bold">My Bookings</h1>
                        <p className="text-muted">
                            Manage and track all your parking reservations
                        </p>
                    </div>

                    <GradientBtn>
                    <Link to={"/home"}>
                    + New Booking 
                    </Link>
                    </GradientBtn>
                </div>

                {/* Stats */}
                <div className="row g-3">

                    <div className="col-md-3 col-sm-6">
                        <StatCard>
                            <IconBox bg="#0ea5e9">📅</IconBox>
                            <div>
                                <h4 className="mb-0">{bookingData.length}</h4>
                                <small>Total</small>
                            </div>
                        </StatCard>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <StatCard>
                            <IconBox bg="#22c55e">⏱</IconBox>
                            <div>
                                <h4 className="mb-0">1</h4>
                                <small>Active</small>
                            </div>
                        </StatCard>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <StatCard>
                            <IconBox bg="#6366f1">🕒</IconBox>
                            <div>
                                <h4 className="mb-0">2</h4>
                                <small>Upcoming</small>
                            </div>
                        </StatCard>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <StatCard>
                            <IconBox bg="#64748b">$</IconBox>
                            <div>
                                <h4 className="mb-0">$252</h4>
                                <small>Total Spent</small>
                            </div>
                        </StatCard>
                    </div>

                </div>

                {/* Search */}
                {/* <div className="my-3">
                    <SearchBar />
                </div> */}

                {/* Tabs */}
                <TabsWrapper>
                    <Tab active>All ({bookingData.length})</Tab>
                    <Tab>Active (1)</Tab>
                    <Tab>Completed (2)</Tab>
                    <Tab>Cancelled</Tab>
                </TabsWrapper>

                {/* Booking Card */}
                <BookingCard>
                    {bookingData.map((item, index) => {
                        return <div className="mb-5">
                            <BookingItem key={index}
                                total_price={bookingData.total_price}
                            />
                        </div>
                    })}
                </BookingCard>

            </div>
        </PageWrapper>
    );
}