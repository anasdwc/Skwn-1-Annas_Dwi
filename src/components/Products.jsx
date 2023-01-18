import clsx from "clsx";
import { useState, useEffect } from "react";

function Carousel({ children, next, prev, currentIndex }) {
  return (
    <div className="carousel relative">
      <button
        onClick={prev}
        className="left-arrow absolute inset-y-0 z-10 my-auto max-h-12 rounded-full bg-light-green p-4"
      >
        <img src="/images/icon-arrow-left.png" alt="" />
      </button>
      <div
        className={clsx(
          "carousel-content flex gap-x-4 transition-transform duration-500"
        )}
        style={{
          transform: `translateX(-${currentIndex * 50}%)`,
        }}
      >
        {children}
      </div>
      <button
        onClick={next}
        className="right-arrow absolute inset-y-0 right-0 z-10 my-auto max-h-12 rounded-full bg-light-green p-4"
      >
        <img src="/images/icon-arrow-right.png" alt="" />
      </button>
    </div>
  );
}

function CarouselItem({ index, price, productName, currentIndex }) {
  return (
    <div className="caraousel-content-item relative flex-shrink-0 flex-grow">
      <img
        src={`/images/mobile/product-${index + 1}.png`}
        alt=""
        className={clsx(
          "transition-all delay-100 duration-700",
          currentIndex === index ? "h-64" : "h-56"
        )}
      />
      <div
        className={clsx(
          "item-body absolute bottom-4 left-4 text-white transition-opacity delay-200",
          currentIndex === index ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="inline rounded-xl bg-transparent-white py-2 px-4 text-xs text-very-black-brown">
          ${price}
        </p>
        <h5 className="mt-4 text-xl">{productName}</h5>
      </div>
    </div>
  );
}

export default function Products() {
  const totalChild = document.querySelectorAll(".caraousel-content-item");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(totalChild.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <section className="bg-very-black-brown py-8 px-4 text-light-green">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm ">
          <h3>Categories</h3>
          <h4 className="mt-2 text-base font-extrabold">
            This month's best seller
          </h4>
        </div>
        <div>
          <button className="rounded-xl bg-light-green px-4 py-3 text-sm text-very-black-brown">
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
      </Carousel>
    </section>
  );
}
