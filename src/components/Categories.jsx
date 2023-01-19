function Item({ question, answer, checked }) {
  return (
    <div className="relative overflow-hidden">
      <input
        type="checkbox"
        className="md:h-18cursor-pointer peer absolute inset-x-0 top-0 z-10 h-12 w-full opacity-0"
        checked={checked}
      />
      <div className="md:h-18 flex h-12 w-full items-center bg-soft-white pl-4 transition-all duration-500 peer-checked:bg-light-green">
        <h4 className="text-base font-bold md:text-xl">{question}</h4>
      </div>
      <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40 peer-checked:bg-light-green">
        <div className="p-4 pb-3 pt-1 text-xs leading-5 md:text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="overflow-hidden px-4 py-6 md:grid md:grid-cols-[55%_45%] md:gap-x-8 md:pl-0">
      <div className="accordion-header text-center text-very-black-brown md:col-start-2 md:col-end-3 md:pr-32 md:text-left">
        <h2 className="mb-2 text-sm md:text-xl">Categories</h2>
        <h3 className="mb-6 px-2 text-lg font-extrabold md:my-8 md:px-0 md:text-6xl">
          Furniture Sets Recommendations
        </h3>
      </div>
      <div className="accordion mx-4 mb-6 md:col-start-2 md:col-end-3 md:mx-0 md:mb-0 md:w-full md:pr-32">
        <Item question="Bedroom" />
        <Item
          question="Living Room"
          answer="Enjoy a great living room aesthetics with your family  Designs created for increased comfortability"
        />
        <Item question="Home Office" />
        <Item question="Gaming Room" />
      </div>
      <div className="grid grid-cols-3 gap-4 md:row-start-1 md:row-end-3 md:flex md:w-full md:gap-6">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="./images/desktop/furniture-3.png"
          />
          <source srcset="./images/mobile/furniture-3.png" />
          <img src="/images/mobile/furniture-3.png" alt="" />
        </picture>
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="./images/desktop/furniture-2.png"
          />
          <source srcset="./images/mobile/furniture-2.png" />
          <img src="/images/mobile/furniture-2.png" alt="" />
        </picture>
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="./images/desktop/furniture-1.png"
          />
          <source srcset="./images/mobile/furniture-1.png" />
          <img
            className="md:h-full md:w-full md:object-cover md:object-center"
            src="/images/mobile/furniture-1.png"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
}
