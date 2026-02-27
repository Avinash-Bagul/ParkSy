import styled from "styled-components";

const BookingImg = styled.img`
  width: 100%;
  max-width: 200px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
`;

const BookingItem = (props) => {
    return (
        <>
            <div className="row align-items-center">

                <div className="col-md-auto text-center mb-3 mb-md-0">
                    <BookingImg src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1000" />
                </div>

                <div className="col">
                    <span className="badge bg-success mb-2">Active</span>

                    <h5>{props.total_price}</h5>

                    <div className="text-muted">
                        📍 123 Main St, Downtown
                    </div>

                    <div className="text-muted">
                        ⏰ Today • 2:30 PM - 5:30 PM
                    </div>

                    <div className="mt-3 d-flex gap-2 flex-wrap">
                        <button className="btn btn-primary">
                            Navigate
                        </button>

                        <button className="btn btn-outline-secondary">
                            Extend Time
                        </button>

                        <button className="btn btn-danger">
                            End Booking
                        </button>

                        <button className="btn btn-link">
                            View Details →
                        </button>
                    </div>
                </div>

                <div className="col-md-auto text-md-end mt-3 mt-md-0">
                    <h4 className="text-primary">$15</h4>
                    <small className="text-muted">3 hours</small>
                </div>

            </div>
        </>
    )
}

export default BookingItem;