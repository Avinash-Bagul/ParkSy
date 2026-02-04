import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Liststyle = styled.header`
    cursor: pointer;
    p{
        margin: 0;
        padding: 0;
    }
    .spotImage{
        width: 100%;
        /* height: 200px; */
    }
    .details{
        position: relative;
    }
    .available{
        position: absolute;
        top: 0;
        right: 0;
        width: max-content;
    }
    .btn-orange{
        background-color: ${(props) => props.theme.colors.light_orange};;
        color: white;
    }
`

const List = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Liststyle className="listBox w-100 d-flex justify-content-center align-items-center row bg-white py-2" onClick={(e) => {
                navigate(`/space/${props.id}`)
            }}>
                <div className="carLogo col-3 d-flex justify-content-center">
                    {/* <ion-icon name="location-outline" className="text-dark"></ion-icon> */}
                    <img src={props.image} alt="Parking Spot Img" className="spotImage w-100"/>
                </div>
                <div className="details col-9 position-relative my-3">
                    <div className="w-50 detailsbox">

                        <p className="fs-5 fw-semibold">{props.title}</p>
                        <p className="py-1">{props.description}</p>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <p>location</p>
                            <p>ratings</p>
                            <p>Price: <span className="fw-semibold">{props.price} Rs/hr</span></p>
                        </div>

                    </div>
                    <div className="text-light">
                        {props.available ? <p className="available bg-success  py-1 px-2">Available</p> : <p className="bg-gray py-1 px-2">occupied</p>}
                    </div>
                    <div className="col-8 btns w-50 d-flex justify-content-start align-items-center mt-4 mb-2">
                        <button className="btn btn-light me-3">View Detais</button>
                        <button className="btn btn-primary ">Book Now</button>
                    </div>
                </div>
                <hr />
            </Liststyle>
        </>
    )
}

export default List;