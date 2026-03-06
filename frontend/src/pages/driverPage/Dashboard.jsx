import { useEffect, useState } from "react";
import List from "../../components/driver/dashboard/List";
import SearchBar from "../../components/driver/dashboard/SearchBar";
import axios from "axios";
import QuickLinks from "../../components/driver/dashboard/QuickLinks";
import styled from "styled-components";
import ActiveBooking from "../../components/driver/dashboard/ActiveBooking";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";


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
    const [activeBooking, setActiveBooking] = useState(false);
    const isLogin = useSelector((state) => state.auth.isLogin);

    const fetchSpaces = async () => {
        try {
            const res = await axios.get(`${API}/api/spaces`, { withCredentials: true });
            setList(res.data.spaces);
            if (isLogin) {
                const activeBooking = await axios.get(`${API}/api/booking/getActiveBooking`, { withCredentials: true });
                setActiveBooking(activeBooking.data.activeB);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchSpaces();
    }, []);


    // console.log(list);

    return (
        <>
            <DashboardStyle className="container-fluid p-0 bg-light">

                <div className="container">
                    <div className="row py-5 gx-5 justify-content-between">
                        <div className="col-8">
                            <SearchBar />
                            {list.map((item, index) => {
                                return <>
                                    <List key={item._id}
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
                            {activeBooking && isLogin ? <ActiveBooking data={activeBooking} /> : <></>}

                            <QuickLinks />
                        </div>

                    </div>
                </div>
            </DashboardStyle>
        </>
    )
}



export default Dashboard;