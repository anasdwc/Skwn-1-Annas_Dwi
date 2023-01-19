import { useEffect, useState } from "react";

import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default function Products() {
  const totalChild = document.querySelectorAll(".caraousel-content-item");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(totalChild);

  useEffect(() => {
    setLength(totalChild.length);
  }, [length]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    console.log(currentIndex);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <section className="bg-very-black-brown py-8 text-light-green md:py-20">
      <div className="mb-6 flex items-center justify-between px-4 md:mb-16 md:px-36">
        <div className="text-sm">
          <h3 className="text-2xl uppercase">Our Products</h3>
          <h4 className="mt-2 text-base font-extrabold md:mt-4 md:text-5xl">
            This month's best seller
          </h4>
        </div>
        <div>
          <button className="rounded-xl bg-light-green px-4 py-3 text-sm text-very-black-brown md:px-8 md:py-4">
            SEE MORE
          </button>
        </div>
      </div>
      <Carousel next={next} prev={prev} currentIndex={currentIndex}>
        <CarouselItem
          index={0}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={1}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={2}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={3}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={4}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={5}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
        <CarouselItem
          index={6}
          currentIndex={currentIndex}
          price={329}
          productName="Und Chair"
        />
      </Carousel>
    </section>
  );
}
