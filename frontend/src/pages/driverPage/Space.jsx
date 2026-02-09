import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SpaceInfo from "../../components/driver/dashboard/SpaceInfo";
import ImageCarousel from "../../components/driver/SingleSpace/ImageCarousel";
import axios from "axios";
import BookingCard from "../../components/driver/SingleSpace/BookingCard";
import LocationMap from "../../components/Map/LocationMap";

const API = import.meta.env.VITE_API;

const PageWrapper = styled.div`
  background: #f8f9fa;
  padding: 0px 0;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); */
  padding: 24px;
`;

const Title = styled.h4`
  font-weight: 600;
`;

const Price = styled.h5`
  color: #198754;
  font-weight: 700;
`;

const Feature = styled.div`
  font-size: 14px;
  color: #555;
`;

const BookButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: 600;
  width: 100%;

  &:hover {
    background: #222;
  }
`;

const Space = () => {

    const { id } = useParams();
    const [space, setSpace] = useState([]);
    const [spaceUser, setSpaceUser] = useState();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const spaceRes = await axios.get(
                    `${API}/api/spaces/getSingpleSpace/${id}`
                );

                const spaceData = spaceRes.data.space;
                setSpace(spaceData);

                const userRes = await axios.get(
                    `${API}/api/auth/getUser/${spaceData.owner_id}`
                );

                setSpaceUser(userRes.data.singleUser);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [id]);

    if (!space) {
        return (
            <>
                <div className="container text-center h-100 d-flex justify-content-center align-items-center">
                    <h1>Loading....</h1>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="container-fluid p-0 bg-light">
                    <div className="container pt-3 pb-5">
                        <Link to="/home" className="backbtn align-items-center">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                            <div className="btn btn-">Back to Search</div>
                        </Link>
                        <div className="row gx-5 justify-content-between">
                            <div className="col-md-8 col-12 bg-white">
                                <PageWrapper>
                                    <ImageCarousel
                                        images={space.photo_url}
                                    />
                                </PageWrapper>
                                {/* <div className="mt-5"> */}
                                    <SpaceInfo
                                        space={space}
                                        owner={spaceUser}
                                    />
                                {/* </div> */}
                                <div className="mt-5">
                                    <LocationMap
                                        lat={space?.latitude ? space.latitude : 20.0046}
                                        lng={space?.longitude ? space.longitude : 73.7602}
                                        address={space?.location_address}
                                    />
                                </div>

                            </div>
                            <div className="col-md-4 col-12">
                                <BookingCard
                                    space={space}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    };
}

export default Space;