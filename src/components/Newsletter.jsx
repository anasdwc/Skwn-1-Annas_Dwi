export default function Newsletter() {
  return (
    <section className="bg-[#FCFAFA] py-8 px-4 ">
      <div className="px-8 text-center">
        <h2 className="text-sm">LIMITED DEALS</h2>
        <h3 className="mt-2 mb-6 font-bold">
          Become a member and get 10% off of your first purchase
        </h3>
      </div>
      <div className="relative px-8">
        <input
          placeholder="Enter your email here"
          className="w-full rounded-lg p-4 placeholder:text-xs placeholder:text-black-brown"
        />
        <img
          src="/images/icon-mail.svg"
          alt=""
          className="absolute inset-y-0 right-8 my-auto rounded-r-lg bg-light-green p-5"
        />
      </div>
    </section>
  );
}
