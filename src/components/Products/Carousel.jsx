import clsx from "clsx";

export default function Carousel({ children, next, prev, currentIndex }) {
  return (
    <div className="carousel relative overflow-hidden px-4">
      <button
        onClick={prev}
        className="left-arrow absolute inset-y-0 z-10 my-auto max-h-12 rounded-full bg-light-green p-4 md:right-0 md:mb-0 md:mr-56"
      >
        <img src="/images/icon-arrow-left.png" alt="" />
      </button>
      <div
        className={clsx(
          "carousel-content flex h-64 gap-x-4 transition-transform duration-500 md:h-96"
        )}
        style={{
          transform: `translateX(-${currentIndex * 10}rem)`,
        }}
      >
        {children}
      </div>
      <button
        onClick={next}
        className="right-arrow absolute inset-y-0 right-0 z-10 my-auto max-h-12 rounded-full bg-light-green p-4 md:mb-0 md:mr-36"
      >
        <img src="/images/icon-arrow-right.png" alt="" />
      </button>
    </div>
  );
}
