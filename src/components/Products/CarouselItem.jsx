import clsx from "clsx";

export default function CarouselItem({
  index,
  price,
  productName,
  currentIndex,
}) {
  return (
    <div className="caraousel-content-item relative flex-shrink-0 flex-grow">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`/images/desktop/product-${index + 1}.png`}
        />
        <source srcSet={`/images/mobile/product-${index + 1}.png`} />
        <img
          src={`/images/mobile/product-${index + 1}.png`}
          alt=""
          className={clsx(
            "transition-all delay-100 duration-700",
            currentIndex === index ? "h-64 md:h-96" : "h-56 md:h-80"
          )}
        />
      </picture>
      <div
        className={clsx(
          "item-body absolute bottom-4 left-4 text-white transition-all delay-200",
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
