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
