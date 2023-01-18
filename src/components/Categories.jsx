function Item({ question, answer, checked }) {
  return (
    <div className="relative overflow-hidden">
      <input
        type="checkbox"
        className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0"
        checked={checked}
      />
      <div className="flex h-12 w-full items-center bg-soft-white pl-4 transition-all duration-500 peer-checked:bg-light-green">
        <h4 className="text-base font-bold">{question}</h4>
      </div>
      <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40 peer-checked:bg-light-green">
        <div className="p-4 pb-3 pt-1 text-xs leading-5">{answer}</div>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="px-4 py-6 ">
      <div className="accordion-header text-center text-very-black-brown">
        <h2 className="mb-2 text-sm ">Categories</h2>
        <h3 className="mb-6 px-2 text-lg font-extrabold">
          Furniture Sets Recommendations
        </h3>
      </div>
      <div className="accordion mx-4 mb-6">
        <Item question="Bedroom" />
        <Item
          question="Living Room"
          answer="Enjoy a great living room aesthetics with your family  Designs created for increased comfortability"
        />
        <Item question="Home Office" />
        <Item question="Gaming Room" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src="/images/mobile/furniture-3.png" alt="" />
        <img src="/images/mobile/furniture-2.png" alt="" />
        <img src="/images/mobile/furniture-1.png" alt="" />
      </div>
    </section>
  );
}
