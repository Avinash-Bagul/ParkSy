import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpaceInfo from "./SpaceInfo";
const API = import.meta.env.VITE_API;

const SingleSpace = () => {
    const { id } = useParams();
    const [space, setSpace] = useState([]);
    console.log(id);

    useEffect(() => {
        const fetchSpace = async () => {
            const res = await axios.get(`${API}/api/spaces/getSingpleSpace/${id}`);
            console.log(res.data.space);
            setSpace(res.data.space);
        }

        fetchSpace();
    }, [])


    return (
        <>

            <div className="container-fluid p-0 bg-light">
                <div className="container">
                    <Link to="/home" className="backbtn align-items-center">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                        <div className="btn btn-">Back to Search</div>
                    </Link>
                    <div className="row py-5 gx-5 justify-content-between">
                        <div className="col-8 bg-white">
                            <SpaceInfo />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleSpace;