import clsx from "clsx";

function Button({ text, buttonIcon, bg, extendClass, iconPosition }) {
  return (
    <button
      className={clsx(
        "px-6border-1 flex items-center justify-center gap-2 rounded-2xl border-solid py-4 text-black-brown",
        bg ? bg : "border-1 border-black",
        extendClass
      )}
    >
      <img
        className={clsx(iconPosition == "right" && "order-2")}
        src={buttonIcon}
        alt=""
      />
      <span className="uppercase">{text}</span>
    </button>
  );
}

export default function Hero() {
  return (
    <div className="hero md:grid md:grid-cols-[60%_40%] md:gap-16">
      <div className="hero-title px-4 py-8 md:py-48 md:pl-32">
        <h2 className="text-center text-3xl font-extrabold leading-12 tracking-tight text-brown md:pr-28 md:text-left md:text-7xl">
          The kind of <span className="text-soft-brown">furniture </span>
          you have been looking for
        </h2>
        <div className="button-wrapper flex flex-col items-center md:mt-8 md:flex-row md:gap-6">
          <Button
            text="search catalog"
            buttonIcon="./images/icon-search.svg"
            bg="bg-light-green"
            extendClass="w-3/4 mt-6 mb-4"
          />
          <Button
            text="watch videos"
            buttonIcon="./images/icon-videos.svg"
            extendClass="w-3/4"
          />
        </div>
      </div>
      <div className="banner mx-0 flex flex-col bg-highlightedProductMobile bg-cover bg-center bg-no-repeat px-4 py-6 md:justify-end md:bg-highlightedProductDesktop">
        <h3 className="text-white md:hidden">HIGHLIGHTED PRODUCT</h3>
        <div className="banner__body mt-16 md:mb-16 md:ml-8">
          <p className="text- inline-block rounded-xl bg-transparent-white px-4 py-2 text-black-brown">
            $329
          </p>
          <h4 className="my-4 text-3xl leading-8 text-white">Pösht Sofa</h4>
          <Button
            iconPosition="right"
            extendClass="!text-white text-sm px-2 w-2/4 justify-evenly mt-2"
            bg="bg-brown"
            text="View Details"
            buttonIcon="./images/icon-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
}
