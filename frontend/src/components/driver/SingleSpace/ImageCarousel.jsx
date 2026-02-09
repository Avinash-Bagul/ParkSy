import styled from "styled-components";

const CarouselWrapper = styled.div`
  .carousel-inner {
    border-radius: 16px;
    overflow: hidden;
  }

  img {
    height: 500px;
    /* width: 800px; */
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      height: 220px;
    }
  }
`;

const ImageCarousel = (props) => {
  const images = [
    "https://thumbs.dreamstime.com/b/underground-parking-cars-white-colors-30872672.jpg",
    "https://t4.ftcdn.net/jpg/03/30/78/77/360_F_330787755_RSUhTI7LvN3UUvGWus7t90Sh8yACJ8Lb.jpg",
    "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D  ",
    "/images/parking4.jpg",
  ];
  console.log(props.images);

  return (
    <CarouselWrapper>
      <div
        id="parkingCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {props.images?.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100" alt="Parking space" />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#parkingCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#parkingCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </CarouselWrapper>
  );
};

export default ImageCarousel;
