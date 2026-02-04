import { useEffect, useState } from "react";
import List from "../../components/driver/dashboard/List";
import SearchBar from "../../components/driver/dashboard/searchbar";
import axios from "axios";
import QuickLinks from "../../components/driver/dashboard/QuickLinks";
import styled from "styled-components";
import ActiveBooking from "../../components/driver/dashboard/ActiveBooking";


const API = import.meta.env.VITE_API;

const DashboardStyle = styled.header`
    border-radius: 10px;
    .col-8, .col-4{
        border-radius: 10px;
    }
    .quick{
        right: 0;
    }
`

const Dashboard = () => {
    const [list, setList] = useState([]);

    const fetchSpaces = async () => {
        try {
            const res = await axios.get(`${API}/api/spaces`);
            console.log(res);
            setList(res.data.spaces);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchSpaces();
    }, []);

    return (
        <>
            <DashboardStyle className="container-fluid p-0 bg-light">

                <div className="container">
                    <div className="row py-5 gx-5 justify-content-between">
                        <div className="col-8 bg-white">
                            <SearchBar />
                            {list.map((item, index) => {
                                return <>
                                    <List key={index}
                                        id={item._id}
                                        image={item.photo_url[0]}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price_per_hour}
                                        available_from={item.available_from}
                                        available_to={item.available_to}
                                        available={item.is_available}
                                    />
                                </>
                            })}


                        </div>
                        <div className="col-4 d-flex flex-column justify-content-start">
                            <ActiveBooking />
                            <QuickLinks />
                        </div>
                        
                    </div>
                </div>
            </DashboardStyle>
        </>
    )
}

export default Dashboard;