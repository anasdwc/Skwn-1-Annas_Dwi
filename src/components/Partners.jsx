export default function Partners() {
  return (
    <section className="py-6 px-6 pb-10 md:flex md:items-center md:justify-between md:px-32 md:py-20">
      <div>
        <h3 className="flex flex-col items-center text-very-black-brown">
          <span className="text-3xl font-extrabold">25+</span>
          <span>PARTNERED BRANDS</span>
        </h3>
      </div>
      <div className="mt-6 flex justify-around md:w-full md:justify-between md:gap-12">
        <img src="/images/company-logo/gusto.png" alt="Gusto" />
        <img src="/images/company-logo/stripe.png" alt="Stripe" />
        <img src="/images/company-logo/treehouse.png" alt="Treehouse" />
        <img src="/images/company-logo/upwork.png" alt="Upwork" />
      </div>
    </section>
  );
}
