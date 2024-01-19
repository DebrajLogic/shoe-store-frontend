"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductDetailsCarousel({ images }) {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      {images && (
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images &&
            images?.map((image) => {
              return <img key={image?.id} src={image?.attributes?.url} />;
            })}
        </Carousel>
      )}
    </div>
  );
}

export default ProductDetailsCarousel;
