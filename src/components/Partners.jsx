export default function Partners() {
  return (
    <section className="py-6 px-6 pb-10 md:flex md:items-center md:justify-between md:gap-8 md:px-32 md:py-20">
      <div className="md:w-1/4">
        <h3 className="flex flex-col items-center text-very-black-brown md:items-start">
          <span className="text-3xl font-extrabold md:mb-2 md:text-7xl">
            25+
          </span>
          <span>PARTNERED BRANDS</span>
        </h3>
      </div>
      <div className="mt-6 flex justify-around md:mt-0 md:w-3/4 md:items-center md:justify-between md:gap-12">
        <img src="/images/gusto.png" alt="Gusto" />
        <img src="/images/stripe.png" alt="Stripe" />
        <img src="/images/treehouse.png" alt="Treehouse" />
        <img src="/images/upwork.png" alt="Upwork" />
      </div>
    </section>
  );
}
