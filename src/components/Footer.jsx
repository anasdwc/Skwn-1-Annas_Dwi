export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 px-4 text-xs md:flex-row md:gap-x-28 md:py-20 md:px-28">
      <div className="md:text-[#667085}">
        <div className="brand-logo flex justify-center md:justify-start">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="brand-description my-9 text-[#667085]">
          <p className="text-center leading-6 md:pr-32 md:text-left">
            Dekoor is a furniture company created to fulfill the needs of family
            with aesthetic feeling in their furniture. Always pay attention to
            details and give clear communication for the customers. Priority of
            our design is comfortability.
          </p>
        </div>
        <div className="copyright order-3 hidden text-[#667085] md:block">
          &copy; Copyright 2022 Dekoor
        </div>
      </div>
      <div className="footer-list grid w-full grid-cols-2 gap-y-8 text-center text-xs md:order-3 md:mb-0 md:grid-cols-3">
        <ul className="flex flex-col gap-6 text-[#667085]">
          <li className="text-sm font-bold text-[#101828]">Support</li>
          <li>FAQ</li>
          <li>Shipping & Returns</li>
          <li>Care guide</li>
          <li>Redeem warranty</li>
        </ul>
        <ul className="flex flex-col gap-6 text-[#667085]">
          <li className="text-sm font-bold text-[#101828]">Social Media</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>TikTok</li>
        </ul>
        <ul className="col-span-full flex flex-col gap-6 text-[#667085] md:col-start-3">
          <li className="text-sm font-bold text-[#101828]">About Us</li>
          <li>Our Story</li>
          <li>Designer</li>
          <li>Craftmanship</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </footer>
  );
}
