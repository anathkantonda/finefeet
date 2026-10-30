
import { useRef } from "react";
import pd1 from "../assets/pd1.jpg"
import pd2 from "../assets/pd2.jpg"
import pd3 from "../assets/pd3.jpg"
import pd4 from "../assets/pd4.jpg"
import pd5 from "../assets/pd5.jpg"
import pd6 from "../assets/pd6.jpg"
import pd7 from "../assets/pd7.jpg"

const Gallery = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;

      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    pd1,
    pd2,
    pd3,
    pd4,
    pd5,
    pd6,
    pd7
  ];

  return (
    <div className="relative w-full">

      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="btn btn-circle absolute left-2 top-1/2 z-10 -translate-y-1/2"
        aria-label="Previous images"
      >
        ❮
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-64 flex-none snap-start"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-100 w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="btn btn-circle absolute right-2 top-1/2 z-10 -translate-y-1/2"
        aria-label="Next images"
      >
        ❯
      </button>

    </div>
  );
};

export default Gallery;