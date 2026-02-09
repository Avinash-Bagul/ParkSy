import { Link } from "react-router-dom";
import styled from "styled-components";

const QuickLinksStyle = styled.header`
border-radius: 10px;
right: 0;
    a{
        color: black;
        text-decoration: none;
    }
    a:hover{
        color: white;
        background-color: ${(props) => props.theme.colors.teal};
    }
    .links{
        height: 200px;
    }
    .link{
        width: 40px;
        height: 40px;
    }
`

const QuickLinks = () => {
    return (
        <>
            <QuickLinksStyle className="bg-white mt-5">
                <div className="p-3">

                    <h5>Quick Links</h5>
                    <div className="links d-flex flex-column justify-content-evenly text-center align-items-center mt-3">
                        <Link to="/bookings" className="w-100 link d-flex justify-content-between pt-2">
                            <div className="d-flex align-items-start w-75">
                                <ion-icon name="layers-outline" className="px-3 fs-3"></ion-icon>
                                My Bookings
                            </div>
                            <ion-icon name="chevron-forward-outline" className="fs-3 fw-lighter"></ion-icon>
                        </Link>
                        <Link to="/payments" className="w-100 link d-flex justify-content-between pt-2">
                            <div className="d-flex align-items-start w-75">
                                <ion-icon name="card-outline" className="px-3 fs-3"></ion-icon>
                                Payments
                            </div>
                            <ion-icon name="chevron-forward-outline" className="fs-3 fw-lighter"></ion-icon>
                        </Link>
                        <Link to="/profile" className="w-100 link d-flex justify-content-between pt-2">
                            <div className="d-flex align-items-start w-75">
                                <ion-icon name="person-outline" className="px-3 fs-3"></ion-icon>
                                Profile
                            </div>
                            <ion-icon name="chevron-forward-outline" className="fs-3 fw-lighter"></ion-icon>
                        </Link>
                        <Link to="/notifications" className="w-100 link d-flex justify-content-between pt-2">
                            <div className="d-flex align-items-start w-75">
                                <ion-icon name="notifications-outline" className="px-3 fs-3"></ion-icon>
                                Notifications
                            </div>
                            <ion-icon name="chevron-forward-outline" className="fs-3 fw-lighter"></ion-icon>
                        </Link>
                    </div>
                </div>
            </QuickLinksStyle>
        </>
    )
}

export default QuickLinks;